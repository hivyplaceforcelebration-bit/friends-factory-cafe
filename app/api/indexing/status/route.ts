/**
 * API Route: Check indexing status and quota
 * GET /api/indexing/status
 * Returns: current quota usage, total URLs, indexing health
 */

import { NextRequest, NextResponse } from "next/server";
import { getQuota } from "@/lib/google-indexing";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const quota = getQuota();
  const allUrls = getAllSiteUrls();

  // Calculate how many days to submit all URLs
  const daysToComplete = Math.ceil(allUrls.length / quota.dailyLimit);

  // Group URLs by type
  const urlsByType: Record<string, number> = {};
  for (const url of allUrls) {
    urlsByType[url.type] = (urlsByType[url.type] || 0) + 1;
  }

  return NextResponse.json({
    site: "friendsfactorycafe.com",
    totalUrls: allUrls.length,
    urlsByType,
    googleIndexingApi: {
      ...quota,
      daysToSubmitAll: daysToComplete,
      note: `At ${quota.dailyLimit} URLs/day, all ${allUrls.length} pages will be submitted in ~${daysToComplete} days`,
    },
    indexNow: {
      status: "available",
      limit: "10,000 URLs per request",
      note: "Free, no quota limits. Covers Bing + Yandex.",
    },
    environment: {
      googleServiceAccount: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? "✅ configured" : "❌ missing",
      googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY ? "✅ configured" : "❌ missing",
      indexingApiKey: process.env.INDEXING_API_KEY ? "✅ configured" : "❌ missing",
      reindexApiKey: process.env.REINDEX_API_KEY ? "✅ configured" : "❌ missing",
    },
  });
}
