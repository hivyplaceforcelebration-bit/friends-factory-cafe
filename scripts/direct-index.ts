// Direct Google Indexing — runs locally, bypasses live Vercel API
// Usage: npx tsx scripts/direct-index.ts [--start=0] [--limit=200]
import fs from "fs";
import path from "path";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

// Load .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  let multilineKey = "";
  let multilineVal = "";
  for (const line of lines) {
    if (multilineKey) {
      multilineVal += "\n" + line;
      if (line.includes('"') && !line.endsWith("\\")) {
        process.env[multilineKey] = multilineVal.replace(/^"|"$/g, "").replace(/\\n/g, "\n");
        multilineKey = "";
        multilineVal = "";
      }
      continue;
    }
    const eq = line.indexOf("=");
    if (eq === -1 || line.trim().startsWith("#")) continue;
    const k = line.slice(0, eq).trim();
    let v = line.slice(eq + 1).trim();
    if (v.startsWith('"') && !v.endsWith('"')) {
      multilineKey = k;
      multilineVal = v;
      continue;
    }
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    v = v.replace(/\\n/g, "\n");
    if (!process.env[k]) process.env[k] = v;
  }
}

// Parse CLI args
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace("--", "").split("=");
    return [k, v ?? "true"];
  })
);
const START = parseInt(args.start ?? "0", 10);
const LIMIT = parseInt(args.limit ?? "200", 10);

// Build JWT and get OAuth token
async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.trim().replace(/\\n/g, "\n");
  if (!email || !privateKey) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY");

  const { createSign } = await import("crypto");
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  ).toString("base64url");
  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(privateKey, "base64url");
  const jwt = `${header}.${payload}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json() as { access_token?: string; error?: string };
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function indexUrl(url: string, token: string): Promise<"ok" | "skip" | "fail"> {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  if (res.status === 200) return "ok";
  if (res.status === 429 || res.status === 403) return "skip";
  const body = await res.text();
  console.error(`  ❌ ${res.status} for ${url}: ${body.slice(0, 100)}`);
  return "fail";
}

async function main() {
  const allUrls = getAllSiteUrls()
    .sort((a, b) => b.priority - a.priority)
    .map((u) => u.url);

  const urls = allUrls.slice(START, START + LIMIT);
  console.log(`\n🔵 Google Indexing API (direct)`);
  console.log(`   Total site URLs: ${allUrls.length}`);
  console.log(`   Submitting: ${urls.length} (start=${START}, limit=${LIMIT})`);
  if (START + LIMIT < allUrls.length) {
    console.log(`   💡 Run tomorrow: npx tsx scripts/direct-index.ts --start=${START + LIMIT}`);
  }

  let token: string;
  try {
    token = await getAccessToken();
    console.log(`   ✅ Google auth OK\n`);
  } catch (e) {
    console.error(`   ❌ Auth failed: ${e}`);
    process.exit(1);
  }

  let ok = 0, fail = 0, skip = 0;
  for (let i = 0; i < urls.length; i++) {
    const result = await indexUrl(urls[i], token);
    if (result === "ok") ok++;
    else if (result === "fail") fail++;
    else skip++;
    if ((i + 1) % 10 === 0) process.stdout.write(`   [${i + 1}/${urls.length}] ✅${ok} ❌${fail} ⏭${skip}\r`);
    await new Promise((r) => setTimeout(r, 100)); // gentle rate limit
  }

  console.log(`\n   Done: ✅ ${ok} ok, ❌ ${fail} failed, ⏭ ${skip} skipped`);
}

main().catch(console.error);
