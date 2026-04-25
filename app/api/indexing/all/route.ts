/**
 * API Route: Submit ALL site URLs to Google Indexing API
 * POST /api/indexing/all
 * No body required — submits all URLs from the site registry (quota-aware)
 * With 3,000+ pages, this will submit up to 200/day and report remaining
 */

import { NextRequest, NextResponse } from "next/server";
import { submitAllUrlsToGoogle, getQuota } from "@/lib/google-indexing";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const quota = getQuota();
    if (quota.remaining <= 0) {
      return NextResponse.json({
        error: "Daily quota exhausted",
        quota,
        message: `All ${quota.dailyLimit} submissions used today. Resets at ${quota.resetsAt}`,
      }, { status: 429 });
    }

    const result = await submitAllUrlsToGoogle();
    return NextResponse.json({
      ...result,
      quota: getQuota(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
