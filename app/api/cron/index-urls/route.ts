/**
 * Vercel Cron Job: Auto-submit URLs to Google Indexing API + IndexNow
 * Runs daily at 6:00 AM IST (00:30 UTC)
 * Rotates through all 3000+ pages — 200/day — cycles every ~15 days automatically.
 * No manual intervention needed.
 */

import { NextRequest, NextResponse } from "next/server";
import { batchNotifyGoogleIndexing } from "@/lib/google-indexing";
import { submitToIndexNow } from "@/lib/indexnow";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

export const maxDuration = 60;

// Day 0 = April 25, 2026 (start=0). Rotates every ~15 days automatically.
const BASE_DATE = new Date("2026-04-25T00:00:00Z").getTime();
const DAILY_QUOTA = 200;

export async function GET(request: NextRequest) {
  // Verify Vercel cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Calculate today's start index based on days since base date
    const daysSinceBase = Math.floor((Date.now() - BASE_DATE) / 86_400_000);
    const allUrls = getAllSiteUrls()
      .sort((a, b) => b.priority - a.priority)
      .map((u) => u.url);
    const total = allUrls.length;
    const startIndex = (daysSinceBase * DAILY_QUOTA) % total;
    const batch = allUrls.slice(startIndex, startIndex + DAILY_QUOTA);
    // Handle wrap-around at end of cycle
    const wrappedBatch =
      batch.length < DAILY_QUOTA
        ? [...batch, ...allUrls.slice(0, DAILY_QUOTA - batch.length)]
        : batch;

    const results: Record<string, unknown> = {
      timestamp: new Date().toISOString(),
      daysSinceBase,
      startIndex,
      totalSiteUrls: total,
    };

    // 1. Google Indexing API (200/day rotating through all pages)
    const googleResult = await batchNotifyGoogleIndexing(wrappedBatch);
    results.google = {
      submitted: googleResult.submitted,
      success: googleResult.success,
      failed: googleResult.errors,
      skipped: googleResult.skipped,
      nextStartIndex: (startIndex + DAILY_QUOTA) % total,
    };

    // 2. IndexNow (Bing + Yandex, no daily limit — submit today's batch only)
    try {
      const indexNowResult = await submitToIndexNow(wrappedBatch);
      results.indexNow = indexNowResult;
    } catch (err) {
      results.indexNow = { error: err instanceof Error ? err.message : "Failed" };
    }

    return NextResponse.json({ success: true, ...results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Cron job failed" },
      { status: 500 }
    );
  }
}
