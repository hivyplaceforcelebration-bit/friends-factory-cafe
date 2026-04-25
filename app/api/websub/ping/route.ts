/**
 * API Route: Ping WebSub hub to notify about new content
 * POST /api/websub/ping
 * Notifies Google to re-crawl RSS feed immediately
 */

import { NextRequest, NextResponse } from "next/server";
import { pingAllHubs } from "@/lib/websub";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const results = await pingAllHubs();
    return NextResponse.json({
      message: "WebSub hub pinged",
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
