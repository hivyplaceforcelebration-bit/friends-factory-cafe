// ============================================================================
// Google Indexing API Integration — Production-Grade for 3,000+ Pages
// Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY env vars
// Features: JWT auth, quota management, batch processing, progress tracking
// Quota: 200 publish requests/day (Google limit)
// ============================================================================

import { SEO_CONFIG } from "@/lib/seo-config";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

// ── Types ──────────────────────────────────────────────────────────────────

export interface IndexingResponse {
  success: boolean;
  url: string;
  message: string;
  status: "success" | "error" | "skipped";
  /** HTTP status code from Google API */
  httpStatus?: number;
  /** Timestamp of submission */
  submittedAt?: string;
}

export interface BatchResult {
  total: number;
  submitted: number;
  success: number;
  errors: number;
  skipped: number;
  /** Remaining daily quota (approximate) */
  quotaRemaining: number;
  results: IndexingResponse[];
  /** Time taken in ms */
  duration: number;
}

export interface QuotaInfo {
  dailyLimit: number;
  used: number;
  remaining: number;
  resetsAt: string;
}

// ── Quota Tracker (Supabase-backed for serverless reliability) ─────────────

const DAILY_QUOTA = 200; // Google Indexing API free tier

// In-memory cache with 5-minute TTL (fallback if DB unavailable)
let cachedQuota: { data: QuotaInfo; expiresAt: number } | null = null;

async function getQuotaFromDb(): Promise<QuotaInfo | null> {
  try {
    const { createAdminClient } = await import("@/lib/supabase/admin");
    const admin = createAdminClient();
    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await admin
      .from("google_indexing_quota")
      .select("used_count")
      .eq("date", today)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows, which is fine for first request of the day
      console.error("Failed to fetch quota from DB:", error);
      return null;
    }

    const used = data?.used_count ?? 0;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    return {
      dailyLimit: DAILY_QUOTA,
      used,
      remaining: Math.max(0, DAILY_QUOTA - used),
      resetsAt: tomorrow.toISOString(),
    };
  } catch (error) {
    console.error("Error reading quota from DB, falling back to cache:", error);
    return null;
  }
}

async function getQuota(): Promise<QuotaInfo> {
  // Check cache first (5 minute TTL)
  if (cachedQuota && Date.now() < cachedQuota.expiresAt) {
    return cachedQuota.data;
  }

  const dbQuota = await getQuotaFromDb();
  if (dbQuota) {
    cachedQuota = { data: dbQuota, expiresAt: Date.now() + 300_000 };
    return dbQuota;
  }

  // Fallback: return today's quota with 0 used
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const fallbackQuota: QuotaInfo = {
    dailyLimit: DAILY_QUOTA,
    used: 0,
    remaining: DAILY_QUOTA,
    resetsAt: tomorrow.toISOString(),
  };

  cachedQuota = { data: fallbackQuota, expiresAt: Date.now() + 300_000 };
  return fallbackQuota;
}

async function consumeQuota(count: number): Promise<void> {
  try {
    const { createAdminClient } = await import("@/lib/supabase/admin");
    const admin = createAdminClient();
    const today = new Date().toISOString().split("T")[0];

    // Upsert: increment used_count or create new row
    const { error } = await admin.from("google_indexing_quota").upsert(
      {
        date: today,
        used_count: count, // Will be incremented via trigger or handled here
      },
      { onConflict: "date" }
    );

    if (error) {
      console.error("Failed to consume quota in DB:", error);
      // Still continue — quota enforcement will be approximate if DB fails
      return;
    }

    // Invalidate cache so next getQuota() refreshes from DB
    cachedQuota = null;
  } catch (error) {
    console.error("Error consuming quota:", error);
  }
}

export { getQuota };

// ── Logging (fire-and-forget to google_indexing_log table) ────────────────

async function logIndexingResult(result: IndexingResponse): Promise<void> {
  try {
    const { createAdminClient } = await import("@/lib/supabase/admin");
    const admin = createAdminClient();

    const today = new Date().toISOString().split("T")[0];
    const batchDay = parseInt(today.replace(/-/g, ""));

    await admin.from("google_indexing_log").insert({
      url: result.url,
      status: result.status,
      http_status: result.httpStatus,
      error_message: result.status === "error" ? result.message : null,
      batch_day: batchDay,
    });
  } catch (error) {
    // Silently fail — logging errors shouldn't break indexing
    console.error("Failed to log indexing result to DB:", error);
  }
}

// ── Token Cache (reuse token for 50 minutes) ──────────────────────────────

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 10min buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 600_000) {
    return cachedToken.token;
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY environment variables. " +
      "See: https://developers.google.com/search/apis/indexing-api/v3/prereqs"
    );
  }

  const header = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" })
  ).toString("base64url");

  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  ).toString("base64url");

  const crypto = await import("crypto");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(privateKey, "base64url");

  const jwt = `${header}.${payload}.${signature}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    throw new Error(
      `Failed to get access token: ${tokenData.error_description || tokenData.error || "Unknown error"}`
    );
  }

  cachedToken = {
    token: tokenData.access_token,
    expiresAt: Date.now() + 3600_000, // 1 hour
  };

  return tokenData.access_token;
}

// ── Single URL Submission ──────────────────────────────────────────────────

export async function notifyGoogleIndexing(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<IndexingResponse> {
  const quota = await getQuota();
  if (quota.remaining <= 0) {
    return {
      success: false,
      url,
      message: `Daily quota exhausted (${DAILY_QUOTA}/day). Resets at ${quota.resetsAt}`,
      status: "skipped",
    };
  }

  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ url, type }),
      }
    );

    const data = await response.json();
    await consumeQuota(1);

    const result: IndexingResponse = response.ok
      ? {
          success: true,
          url,
          message: `Submitted to Google (${type})`,
          status: "success",
          httpStatus: response.status,
          submittedAt: new Date().toISOString(),
        }
      : {
          success: false,
          url,
          message: data.error?.message || `HTTP ${response.status}`,
          status: "error",
          httpStatus: response.status,
          submittedAt: new Date().toISOString(),
        };

    // Log to database (fire and forget)
    logIndexingResult(result).catch((err: unknown) =>
      console.error("Failed to log indexing result:", err)
    );

    return result;
  } catch (error) {
    const result: IndexingResponse = {
      success: false,
      url,
      message: error instanceof Error ? error.message : "Unknown error",
      status: "error",
      submittedAt: new Date().toISOString(),
    };

    logIndexingResult(result).catch((err: unknown) =>
      console.error("Failed to log indexing result:", err)
    );

    return result;
  }
}

// ── Batch Submission with Quota Awareness ──────────────────────────────────

export async function batchNotifyGoogleIndexing(
  urls: string[],
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<BatchResult> {
  const startTime = Date.now();
  const results: IndexingResponse[] = [];
  const quota = await getQuota();

  // Only submit up to remaining quota
  const maxToSubmit = Math.min(urls.length, quota.remaining);
  const urlsToSubmit = urls.slice(0, maxToSubmit);
  const skippedUrls = urls.slice(maxToSubmit);

  // Add skipped results
  for (const url of skippedUrls) {
    results.push({
      success: false,
      url,
      message: `Skipped — quota limit (${DAILY_QUOTA}/day). Will be submitted tomorrow.`,
      status: "skipped",
    });
  }

  // Process in batches of 10 with 1s delay between
  const batchSize = 10;
  for (let i = 0; i < urlsToSubmit.length; i += batchSize) {
    const batch = urlsToSubmit.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map((url) => notifyGoogleIndexing(url, type))
    );
    results.push(...batchResults);

    if (i + batchSize < urlsToSubmit.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  const finalQuota = await getQuota();
  return {
    total: urls.length,
    submitted: maxToSubmit,
    success: results.filter((r) => r.status === "success").length,
    errors: results.filter((r) => r.status === "error").length,
    skipped: results.filter((r) => r.status === "skipped").length,
    quotaRemaining: finalQuota.remaining,
    results,
    duration: Date.now() - startTime,
  };
}

// ── Convenience Aliases ────────────────────────────────────────────────────

/** Submit a single URL (used by /api/indexing/submit) */
export async function submitUrlToGoogle(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<IndexingResponse> {
  return notifyGoogleIndexing(url, type);
}

/** Submit a batch of URLs (used by /api/indexing/batch) */
export async function submitBatchToGoogle(
  urls: string[],
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<BatchResult> {
  return batchNotifyGoogleIndexing(urls, type);
}

/** Submit ALL site URLs — respects daily quota, prioritizes by page importance */
export async function submitAllUrlsToGoogle(): Promise<BatchResult> {
  // Sort by priority: homepage first, then packages, services, keywords, areas, blog
  const allUrls = getAllSiteUrls()
    .sort((a, b) => b.priority - a.priority)
    .map((u) => u.url);

  return batchNotifyGoogleIndexing(allUrls);
}

/**
 * Smart multi-day submission for 3,000+ pages.
 * Returns only the first N URLs that fit in today's quota.
 * Call daily until all URLs are submitted.
 * @param startIndex - Resume from this index (for multi-day runs)
 */
export async function submitUrlsWithQuota(
  startIndex: number = 0
): Promise<BatchResult & { nextStartIndex: number; totalSiteUrls: number }> {
  const allUrls = getAllSiteUrls()
    .sort((a, b) => b.priority - a.priority)
    .map((u) => u.url);

  const quota = await getQuota();
  const urlsForToday = allUrls.slice(startIndex, startIndex + quota.remaining);

  const result = await batchNotifyGoogleIndexing(urlsForToday);

  return {
    ...result,
    nextStartIndex: startIndex + result.submitted,
    totalSiteUrls: allUrls.length,
  };
}
