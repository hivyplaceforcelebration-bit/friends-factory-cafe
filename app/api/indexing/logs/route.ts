/**
 * Indexing Logs — Admin-only endpoint
 * GET /api/indexing/logs?date=YYYY-MM-DD&status=error
 * Requires: x-api-key header matching INDEXING_API_KEY
 *
 * Returns failed URLs for debugging and monitoring
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: NextRequest) {
  // Verify API key
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.INDEXING_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get("date");
    const statusParam = searchParams.get("status");
    const limitParam = searchParams.get("limit") || "100";

    const admin = createAdminClient();
    let query = admin
      .from("google_indexing_log")
      .select("*")
      .order("submitted_at", { ascending: false })
      .limit(parseInt(limitParam));

    // Filter by date (YYYYMMDD format stored in batch_day)
    if (dateParam) {
      const batchDay = parseInt(dateParam.replace(/-/g, ""));
      query = query.eq("batch_day", batchDay);
    }

    // Filter by status
    if (statusParam && ["success", "error", "skipped"].includes(statusParam)) {
      query = query.eq("status", statusParam);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: `Failed to fetch logs: ${error.message}` },
        { status: 500 }
      );
    }

    const logs = data || [];
    const stats = {
      total: logs.length,
      success: logs.filter((l) => l.status === "success").length,
      error: logs.filter((l) => l.status === "error").length,
      skipped: logs.filter((l) => l.status === "skipped").length,
    };

    // Group errors by message
    const errorsByMessage = logs
      .filter((l) => l.status === "error")
      .reduce(
        (acc, log) => {
          const msg = log.error_message || "Unknown error";
          if (!acc[msg]) acc[msg] = { count: 0, examples: [] };
          acc[msg].count += 1;
          if (acc[msg].examples.length < 3) {
            acc[msg].examples.push(log.url);
          }
          return acc;
        },
        {} as Record<string, { count: number; examples: string[] }>
      );

    return NextResponse.json({
      date: dateParam || "all dates",
      stats,
      errorsByMessage,
      logs: logs.slice(0, 10), // First 10 logs for detail
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch logs" },
      { status: 500 }
    );
  }
}
