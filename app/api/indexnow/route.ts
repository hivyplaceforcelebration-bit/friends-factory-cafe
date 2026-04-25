/**
 * API Route: IndexNow submission
 * POST /api/indexnow — Submit URLs to Bing/Yandex via IndexNow
 * Body: { "urls": [...] } or { "all": true }
 */

import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow, submitAllToIndexNow } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Submit all site URLs
    if (body.all === true) {
      const result = await submitAllToIndexNow();
      return NextResponse.json(result);
    }

    // Submit specific URLs
    const { urls } = body;
    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Provide 'urls' array or { all: true }" },
        { status: 400 }
      );
    }

    // Validate URLs belong to our domain
    const invalidUrls = urls.filter(
      (u: string) => !u.startsWith("https://friendsfactorycafe.com")
    );
    if (invalidUrls.length > 0) {
      return NextResponse.json(
        { error: "All URLs must be from friendsfactorycafe.com", invalidUrls },
        { status: 400 }
      );
    }

    const results = await submitToIndexNow(urls);
    return NextResponse.json({ total: urls.length, results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
