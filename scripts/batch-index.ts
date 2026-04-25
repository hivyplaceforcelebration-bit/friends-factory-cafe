// ============================================================================
// Batch Indexing Script — Production-grade for 3,000+ pages
// 6 Indexing Methods: Google API + IndexNow + Sitemap Ping + RSS + WebSub
// Run: npx tsx scripts/batch-index.ts
// Run subset: npx tsx scripts/batch-index.ts --start=200 --limit=200
// Env: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, REINDEX_API_KEY, INDEXING_API_KEY
// ============================================================================

const SITE_URL = "https://friendsfactorycafe.com";
const REINDEX_API = `${SITE_URL}/api/reindex`;
const INDEXNOW_API = `${SITE_URL}/api/indexnow`;
const WEBSUB_API = `${SITE_URL}/api/websub/ping`;
const GOOGLE_DAILY_QUOTA = 200;

// ── Parse CLI args ─────────────────────────────────────────────────────────

function parseArgs() {
  const args: Record<string, string> = {};
  for (const arg of process.argv.slice(2)) {
    const match = arg.match(/^--(\w+)=(.+)$/);
    if (match) args[match[1]] = match[2];
  }
  return {
    start: parseInt(args.start || "0", 10),
    limit: parseInt(args.limit || "0", 10), // 0 = all
    skipGoogle: args.skipgoogle === "true",
    skipIndexnow: args.skipindexnow === "true",
    only: args.only as "google" | "indexnow" | "sitemap" | "websub" | undefined,
  };
}

// ── URL Discovery ──────────────────────────────────────────────────────────

async function getAllUrls(): Promise<string[]> {
  try {
    const { getAllSiteUrls } = await import("../lib/seo-url-registry");
    // Sort by priority (highest first) so most important pages get indexed first
    return getAllSiteUrls()
      .sort((a, b) => b.priority - a.priority)
      .map((u) => u.url);
  } catch {
    // Fallback: scan app directory
    const fs = await import("fs");
    const path = await import("path");
    const appDir = path.join(process.cwd(), "app");
    const routes: string[] = ["/"];
    const ignoreDirs = new Set(["api", "_components", "_lib", "admin", "affiliate", "node_modules"]);

    function scanDir(dir: string, basePath: string) {
      let entries: ReturnType<typeof fs.readdirSync>;
      try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
      for (const entry of entries) {
        if (entry.name.startsWith(".") || entry.name.startsWith("_")) continue;
        if (entry.isDirectory()) {
          if (ignoreDirs.has(entry.name) || entry.name.startsWith("[")) continue;
          const dirPath = path.join(dir, entry.name);
          const routePath = `${basePath}/${entry.name}`;
          if (fs.existsSync(path.join(dirPath, "page.tsx")) || fs.existsSync(path.join(dirPath, "page.js"))) {
            routes.push(routePath);
          }
          scanDir(dirPath, routePath);
        }
      }
    }

    scanDir(appDir, "");
    return [...new Set(routes)].sort().map((r) => `${SITE_URL}${r}`);
  }
}

// ── Google Indexing API (200/day quota) ─────────────────────────────────────

async function submitToGoogle(urls: string[], startIndex: number) {
  const apiKey = process.env.REINDEX_API_KEY;
  if (!apiKey) {
    console.error("⚠️  Missing REINDEX_API_KEY — skipping Google Indexing API");
    return;
  }

  // With 3,000+ pages, only submit up to daily quota
  const quotaUrls = urls.slice(0, GOOGLE_DAILY_QUOTA);
  console.log("\n🔵 GOOGLE INDEXING API");
  console.log(`   Total URLs: ${urls.length}`);
  console.log(`   Submitting today: ${quotaUrls.length} (quota: ${GOOGLE_DAILY_QUOTA}/day)`);
  if (urls.length > GOOGLE_DAILY_QUOTA) {
    const daysNeeded = Math.ceil(urls.length / GOOGLE_DAILY_QUOTA);
    console.log(`   ⏰ All ${urls.length} URLs will take ~${daysNeeded} days`);
    console.log(`   💡 Run with --start=${startIndex + GOOGLE_DAILY_QUOTA} tomorrow`);
  }

  const batchSize = 50;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < quotaUrls.length; i += batchSize) {
    const batch = quotaUrls.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(quotaUrls.length / batchSize);
    process.stdout.write(`   Batch ${batchNum}/${totalBatches}: ${batch.length} URLs... `);

    try {
      const response = await fetch(REINDEX_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ urls: batch }),
      });

      const data = await response.json();
      const s = data.successful || 0;
      const f = data.failed || 0;
      successCount += s;
      failCount += f;
      console.log(`✅ ${s} ok, ❌ ${f} failed`);
    } catch (err) {
      console.log(`❌ Error: ${err}`);
      failCount += batch.length;
    }

    if (i + batchSize < quotaUrls.length) {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  console.log(`   Summary: ✅ ${successCount} success, ❌ ${failCount} failed`);
}

// ── IndexNow — Bing + Yandex (10k/request, unlimited) ─────────────────────

async function submitToIndexNow(urls: string[]) {
  const apiKey = process.env.INDEXING_API_KEY;
  if (!apiKey) {
    console.error("⚠️  Missing INDEXING_API_KEY — skipping IndexNow");
    return;
  }

  console.log("\n🟢 INDEXNOW (Bing + Yandex)");
  console.log(`   Submitting ${urls.length} URLs...`);

  // IndexNow supports 10k per request, batch if more
  const batchSize = 10000;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;

    if (urls.length > batchSize) {
      console.log(`   Batch ${batchNum}: ${batch.length} URLs...`);
    }

    try {
      const response = await fetch(INDEXNOW_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({ urls: batch }),
      });

      const data = await response.json();
      if (data.results) {
        for (const r of data.results) {
          console.log(`   ${r.success ? "✅" : "❌"} ${r.engine}: ${r.message}`);
        }
      }
    } catch (err) {
      console.error(`   ❌ IndexNow failed: ${err}`);
    }
  }
}

// ── WebSub — Real-time push to Google ──────────────────────────────────────

async function pingWebSub() {
  const apiKey = process.env.INDEXING_API_KEY;
  if (!apiKey) {
    console.error("⚠️  Missing INDEXING_API_KEY — skipping WebSub");
    return;
  }

  console.log("\n🟣 WEBSUB (PubSubHubbub)");
  console.log("   Pinging Google hub to re-crawl RSS feed...");

  try {
    const response = await fetch(WEBSUB_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    const data = await response.json();
    if (data.results) {
      for (const r of data.results) {
        console.log(`   ${r.success ? "✅" : "❌"} ${r.hub}: ${r.message}`);
      }
    }
  } catch (err) {
    console.error(`   ❌ WebSub ping failed: ${err}`);
  }
}

// ── Sitemap Ping ───────────────────────────────────────────────────────────

async function pingSitemap() {
  console.log("\n🔔 SITEMAP PING");
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);

  for (const engine of ["Google", "Bing"]) {
    const pingUrl =
      engine === "Google"
        ? `https://www.google.com/ping?sitemap=${sitemapUrl}`
        : `https://www.bing.com/ping?sitemap=${sitemapUrl}`;

    try {
      const response = await fetch(pingUrl);
      console.log(`   ${response.ok ? "✅" : "❌"} ${engine}: HTTP ${response.status}`);
    } catch (err) {
      console.error(`   ❌ ${engine} ping failed: ${err}`);
    }
  }
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();

  console.log("═══════════════════════════════════════════════════════════════");
  console.log("  Friends Factory Cafe — Batch Indexing System (v2)");
  console.log("  6 Methods: Google API + IndexNow + Sitemap + RSS + WebSub");
  console.log("═══════════════════════════════════════════════════════════════");

  let urls = await getAllUrls();
  console.log(`\n📊 Total site URLs: ${urls.length}`);

  // Apply start/limit filters
  if (opts.start > 0) {
    console.log(`   Starting from index: ${opts.start}`);
    urls = urls.slice(opts.start);
  }
  if (opts.limit > 0) {
    console.log(`   Limiting to: ${opts.limit} URLs`);
    urls = urls.slice(0, opts.limit);
  }
  console.log(`   URLs to process: ${urls.length}`);

  const startTime = Date.now();

  if (opts.only) {
    // Run only specific method
    switch (opts.only) {
      case "google": await submitToGoogle(urls, opts.start); break;
      case "indexnow": await submitToIndexNow(urls); break;
      case "sitemap": await pingSitemap(); break;
      case "websub": await pingWebSub(); break;
    }
  } else {
    // Run all methods
    if (!opts.skipGoogle) await submitToGoogle(urls, opts.start);
    if (!opts.skipIndexnow) await submitToIndexNow(urls);
    await pingWebSub();
    await pingSitemap();
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n═══════════════════════════════════════════════════════════════");
  console.log(`  ✅ Done in ${duration}s`);
  if (urls.length > GOOGLE_DAILY_QUOTA && !opts.skipGoogle && opts.only !== "indexnow") {
    console.log(`  ⏰ Google: Run again tomorrow with --start=${opts.start + GOOGLE_DAILY_QUOTA}`);
  }
  console.log("═══════════════════════════════════════════════════════════════\n");
}

main().catch(console.error);
