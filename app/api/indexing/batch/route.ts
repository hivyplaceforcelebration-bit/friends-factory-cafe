/**
 * API Route: Batch submit URLs to Google Indexing API
 * POST /api/indexing/batch
 * Body: { "urls": ["https://friendsfactorycafe.com/page-1", ...], "type": "URL_UPDATED" }
 * Returns: quota-aware batch result with success/error/skipped counts
 */

import { NextRequest, NextResponse } from "next/server";
import { submitBatchToGoogle } from "@/lib/google-indexing";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { urls, type = "URL_UPDATED" } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "urls array is required" }, { status: 400 });
    }

    // Validate all URLs belong to our domain
    const invalidUrls = urls.filter((u: string) => !u.startsWith("https://friendsfactorycafe.com"));
    if (invalidUrls.length > 0) {
      return NextResponse.json(
        { error: "All URLs must be from friendsfactorycafe.com", invalidUrls },
        { status: 400 }
      );
    }

    const result = await submitBatchToGoogle(urls, type);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
