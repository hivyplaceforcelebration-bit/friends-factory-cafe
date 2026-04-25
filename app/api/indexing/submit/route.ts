/**
 * API Route: Submit single URL to Google Indexing API
 * POST /api/indexing/submit
 * Body: { "url": "https://friendsfactorycafe.com/page-slug", "type": "URL_UPDATED" }
 */

import { NextRequest, NextResponse } from "next/server";
import { submitUrlToGoogle } from "@/lib/google-indexing";

export async function POST(request: NextRequest) {
  // Verify API key for security
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { url, type = "URL_UPDATED" } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Validate URL belongs to our domain
    if (!url.startsWith("https://friendsfactorycafe.com")) {
      return NextResponse.json({ error: "URL must be from friendsfactorycafe.com" }, { status: 400 });
    }

    const result = await submitUrlToGoogle(url, type);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
