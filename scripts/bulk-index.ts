/**
 * Bulk Google Indexing API submitter with Supabase logging + auto-retry
 *
 * Usage:
 *   npx tsx scripts/bulk-index.ts
 *   npx tsx scripts/bulk-index.ts --dry-run          # preview URLs, no API calls
 *   npx tsx scripts/bulk-index.ts --limit 200        # cap submissions (daily quota is 200)
 *   npx tsx scripts/bulk-index.ts --type keyword     # only submit 'keyword' page type
 *   npx tsx scripts/bulk-index.ts --retry-failed     # only retry previously failed URLs
 *   npx tsx scripts/bulk-index.ts --delay 700        # ms between requests (default 650)
 *
 * Quota: Google Indexing API allows 200 URL submissions per day.
 */

import { loadEnvConfig } from "@next/env";
import { SignJWT, importPKCS8 } from "jose";
import { createClient } from "@supabase/supabase-js";
import fs from "fs/promises";
import path from "path";

loadEnvConfig(process.cwd());

// ── Config ───────────────────────────────────────────────────────────────────

const INDEXING_ENDPOINT =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing";
const DAILY_QUOTA = 200;
const PROGRESS_FILE = path.join(process.cwd(), ".indexing-progress.json");

// ── CLI args ─────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const isRetryFailed = args.includes("--retry-failed");
const limitArg = args.find((a) => a.startsWith("--limit"));
const limit = limitArg
  ? parseInt(limitArg.split("=")[1] ?? args[args.indexOf(limitArg) + 1] ?? `${DAILY_QUOTA}`)
  : DAILY_QUOTA;
const delayArg = args.find((a) => a.startsWith("--delay"));
const delayMs = delayArg
  ? parseInt(delayArg.split("=")[1] ?? args[args.indexOf(delayArg) + 1] ?? "650")
  : 650;
const typeFilter =
  args.find((a) => a.startsWith("--type"))?.split("=")[1] ??
  (args.includes("--type") ? args[args.indexOf("--type") + 1] : null);

// ── Supabase ──────────────────────────────────────────────────────────────────

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

async function logToSupabase(
  supabase: ReturnType<typeof createClient> | null,
  entries: Array<{ url: string; status: "success" | "failed" | "skipped"; http_status?: number; error_message?: string }>
) {
  if (!supabase || entries.length === 0) return;
  const { error } = await supabase.from("indexing_log").insert(entries);
  if (error) console.warn("  [Supabase] Log write failed:", error.message);
}

async function getFailedFromSupabase(
  supabase: ReturnType<typeof createClient> | null
): Promise<string[]> {
  if (!supabase) return [];
  // Get URLs that failed and were never successfully submitted
  const { data, error } = await supabase
    .from("indexing_log")
    .select("url")
    .eq("status", "failed");
  if (error || !data) return [];

  // Exclude any that later succeeded
  const { data: succeeded } = await supabase
    .from("indexing_log")
    .select("url")
    .eq("status", "success");
  const succeededSet = new Set((succeeded ?? []).map((r: { url: string }) => r.url));
  return [...new Set(data.map((r: { url: string }) => r.url).filter((u: string) => !succeededSet.has(u)))];
}

// ── Auth ─────────────────────────────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY in .env.local"
    );
  }

  const privateKey = await importPKCS8(rawKey.replace(/\\n/g, "\n"), "RS256");

  const now = Math.floor(Date.now() / 1000);
  const jwt = await new SignJWT({ scope: SCOPE })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt(now)
    .setExpirationTime(now + 3600)
    .setIssuer(email)
    .setAudience(TOKEN_ENDPOINT)
    .sign(privateKey);

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) throw new Error(`Token error: ${await res.text()}`);
  const { access_token } = (await res.json()) as { access_token: string };
  return access_token;
}

// ── Progress tracking ─────────────────────────────────────────────────────────

interface Progress {
  submitted: string[];
  failed: string[];
  lastRun: string;
}

async function loadProgress(): Promise<Progress> {
  try {
    const raw = await fs.readFile(PROGRESS_FILE, "utf-8");
    return JSON.parse(raw) as Progress;
  } catch {
    return { submitted: [], failed: [], lastRun: "" };
  }
}

async function saveProgress(progress: Progress): Promise<void> {
  await fs.writeFile(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

// ── Submit one URL ────────────────────────────────────────────────────────────

async function submitUrl(
  url: string,
  token: string
): Promise<{ ok: boolean; status: number; body: unknown }> {
  const res = await fetch(INDEXING_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  const body = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body };
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  Friends Factory Cafe — Google Indexing API Bulk Submit");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  if (isDryRun) console.log("  [DRY RUN] No actual API calls will be made.\n");

  const supabase = getSupabase();
  if (supabase) console.log("  [Supabase] Connected — indexing results will be logged.\n");
  else console.log("  [Supabase] Not configured — logging skipped.\n");

  const { getAllSiteUrls } = await import("../lib/seo-url-registry");
  const allUrls = getAllSiteUrls();

  const filtered = typeFilter
    ? allUrls.filter((u) => u.type === typeFilter)
    : allUrls;

  const progress = await loadProgress();
  // Deduplicate failed list from previous runs
  progress.failed = [...new Set(progress.failed)];
  const submittedSet = new Set(progress.submitted);

  let pending: typeof filtered;

  if (isRetryFailed) {
    // Retry mode: pull failed URLs from Supabase or local progress
    const supabaseFailed = await getFailedFromSupabase(supabase);
    const failedUrls = supabaseFailed.length > 0
      ? supabaseFailed
      : [...new Set(progress.failed)];
    pending = failedUrls
      .map((url) => filtered.find((u) => u.url === url))
      .filter(Boolean) as typeof filtered;
    console.log(`  [RETRY MODE] Retrying ${pending.length} previously failed URLs`);
  } else {
    pending = filtered.filter((u) => !submittedSet.has(u.url));
  }

  console.log(`  Total URLs in registry : ${allUrls.length}`);
  console.log(`  After type filter      : ${filtered.length}${typeFilter ? ` (type=${typeFilter})` : ""}`);
  console.log(`  Already submitted      : ${progress.submitted.length}`);
  console.log(`  Remaining              : ${pending.length}`);

  const batch = pending.slice(0, limit);
  console.log(`  This run (limit ${limit})   : ${batch.length} URLs`);
  console.log(`  Delay between requests : ${delayMs}ms\n`);

  if (batch.length === 0) {
    console.log("  Nothing to submit. All URLs already indexed or registry is empty.");
    return;
  }

  let token = "";
  if (!isDryRun) {
    process.stdout.write("  Authenticating with Google... ");
    token = await getAccessToken();
    console.log("OK\n");
  }

  let successCount = 0;
  let failCount = 0;
  const supabaseBatch: Array<{ url: string; status: "success" | "failed" | "skipped"; http_status?: number; error_message?: string }> = [];

  for (let i = 0; i < batch.length; i++) {
    const { url } = batch[i];
    const idx = `[${String(i + 1).padStart(4, "0")}/${batch.length}]`;

    if (isDryRun) {
      console.log(`  ${idx} DRYRUN  ${url}`);
      successCount++;
      continue;
    }

    const { ok, status, body } = await submitUrl(url, token);

    if (ok) {
      console.log(`  ${idx} OK ${status}  ${url}`);
      progress.submitted.push(url);
      // Remove from failed list if retrying
      progress.failed = progress.failed.filter((f) => f !== url);
      successCount++;
      supabaseBatch.push({ url, status: "success", http_status: status });
    } else {
      const errMsg =
        (body as { error?: { message?: string } })?.error?.message ??
        JSON.stringify(body);
      console.error(`  ${idx} ERR ${status} ${url}`);
      console.error(`              ${errMsg}`);

      if (status === 429) {
        // Flush Supabase batch before stopping
        await logToSupabase(supabase, supabaseBatch);
        supabaseBatch.length = 0;
        console.error("\n  Daily quota reached (429). Re-run tomorrow.");
        break;
      }

      if (!progress.failed.includes(url)) progress.failed.push(url);
      failCount++;
      supabaseBatch.push({ url, status: "failed", http_status: status, error_message: errMsg });
    }

    // Flush Supabase every 10 URLs
    if (supabaseBatch.length >= 10) {
      await logToSupabase(supabase, [...supabaseBatch]);
      supabaseBatch.length = 0;
    }

    if ((i + 1) % 10 === 0) {
      progress.lastRun = new Date().toISOString();
      await saveProgress(progress);
    }

    if (i < batch.length - 1) {
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }

  // Flush remaining Supabase logs
  await logToSupabase(supabase, supabaseBatch);

  progress.lastRun = new Date().toISOString();
  if (!isDryRun) await saveProgress(progress);

  const remaining = isRetryFailed
    ? Math.max(0, pending.length - batch.length)
    : pending.length - batch.length;

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Done
  Submitted : ${successCount}
  Failed    : ${failCount}
  Remaining : ${remaining} (run again tomorrow)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  if (remaining > 0 && !isRetryFailed) {
    const daysLeft = Math.ceil(remaining / DAILY_QUOTA);
    console.log(`  At 200/day quota, ~${daysLeft} more day(s) to finish.`);
  }

  if (failCount > 0) {
    console.log(`\n  ${failCount} URL(s) failed — run with --retry-failed to retry them.`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err instanceof Error ? err.message : err);
  process.exit(1);
});
