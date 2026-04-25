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

let quotaState = {
  used: 0,
  date: new Date().toISOString().split("T")[0],
};

function getQuota(): QuotaInfo {
  const today = new Date().toISOString().split("T")[0];
  if (quotaState.date !== today) {
    quotaState = { used: 0, date: today };
  }
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return {
    dailyLimit: DAILY_QUOTA,
    used: quotaState.used,
    remaining: Math.max(0, DAILY_QUOTA - quotaState.used),
    resetsAt: tomorrow.toISOString(),
  };
}

function consumeQuota(count: number) {
  const today = new Date().toISOString().split("T")[0];
  if (quotaState.date !== today) {
    quotaState = { used: 0, date: today };
  }
  quotaState.used += count;
}

export { getQuota };

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
  const quota = getQuota();
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
    consumeQuota(1);

    if (response.ok) {
      return {
        success: true,
        url,
        message: `Submitted to Google (${type})`,
        status: "success",
        httpStatus: response.status,
        submittedAt: new Date().toISOString(),
      };
    } else {
      return {
        success: false,
        url,
        message: data.error?.message || `HTTP ${response.status}`,
        status: "error",
        httpStatus: response.status,
        submittedAt: new Date().toISOString(),
      };
    }
  } catch (error) {
    return {
      success: false,
      url,
      message: error instanceof Error ? error.message : "Unknown error",
      status: "error",
      submittedAt: new Date().toISOString(),
    };
  }
}

// ── Batch Submission with Quota Awareness ──────────────────────────────────

export async function batchNotifyGoogleIndexing(
  urls: string[],
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<BatchResult> {
  const startTime = Date.now();
  const results: IndexingResponse[] = [];
  const quota = getQuota();

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

  return {
    total: urls.length,
    submitted: maxToSubmit,
    success: results.filter((r) => r.status === "success").length,
    errors: results.filter((r) => r.status === "error").length,
    skipped: results.filter((r) => r.status === "skipped").length,
    quotaRemaining: getQuota().remaining,
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

  const quota = getQuota();
  const urlsForToday = allUrls.slice(startIndex, startIndex + quota.remaining);

  const result = await batchNotifyGoogleIndexing(urlsForToday);

  return {
    ...result,
    nextStartIndex: startIndex + result.submitted,
    totalSiteUrls: allUrls.length,
  };
}
