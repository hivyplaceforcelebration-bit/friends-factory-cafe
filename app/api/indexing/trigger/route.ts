/**
 * Manual Indexing Trigger — Admin-only endpoint
 * POST /api/indexing/trigger
 * Requires: x-api-key header matching INDEXING_API_KEY
 *
 * Immediately submits URLs to Google Indexing API + IndexNow
 * Same logic as cron, but callable manually for immediate indexing
 */

import { NextRequest, NextResponse } from "next/server";
import { batchNotifyGoogleIndexing } from "@/lib/google-indexing";
import { submitToIndexNow } from "@/lib/indexnow";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  // Verify API key
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const allUrls = getAllSiteUrls()
      .sort((a, b) => b.priority - a.priority)
      .map((u) => u.url);

    const results: Record<string, unknown> = {
      timestamp: new Date().toISOString(),
      triggerType: "manual",
      totalSiteUrls: allUrls.length,
    };

    // 1. Google Indexing API (submit today's batch)
    const googleResult = await batchNotifyGoogleIndexing(allUrls);

    // Extract failed URLs for debugging
    const failedUrls = googleResult.results
      .filter((r) => r.status === "error")
      .map((r) => ({ url: r.url, message: r.message }));

    results.google = {
      submitted: googleResult.submitted,
      success: googleResult.success,
      failed: googleResult.errors,
      skipped: googleResult.skipped,
      failedUrls: failedUrls.length > 0 ? failedUrls : undefined,
      quotaRemaining: googleResult.quotaRemaining,
      duration: `${googleResult.duration}ms`,
    };

    // 2. IndexNow (Bing + Yandex, no daily limit)
    try {
      const indexNowResult = await submitToIndexNow(allUrls);
      results.indexNow = indexNowResult;
    } catch (err) {
      results.indexNow = { error: err instanceof Error ? err.message : "Failed" };
    }

    return NextResponse.json({ success: true, ...results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Trigger failed" },
      { status: 500 }
    );
  }
}
