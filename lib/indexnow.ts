// ============================================================================
// IndexNow API Integration — Instant Bing/Yandex Indexing (FREE, no limits)
// Docs: https://www.indexnow.org/
// ============================================================================

import { SEO_CONFIG } from "@/lib/seo-config";
import { getAllSiteUrls } from "@/lib/seo-url-registry";

interface IndexNowResponse {
  success: boolean;
  engine: string;
  message: string;
  urlCount: number;
}

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
] as const;

/**
 * Submit URLs to IndexNow (Bing + Yandex + others)
 * Free, no authentication required — just a key file hosted on your site.
 * Limit: 10,000 URLs per request.
 */
export async function submitToIndexNow(
  urls: string[]
): Promise<IndexNowResponse[]> {
  const key = SEO_CONFIG.indexNowKey;
  const host = new URL(SEO_CONFIG.siteUrl).host;
  const keyLocation = `${SEO_CONFIG.siteUrl}/${key}.txt`;

  const results: IndexNowResponse[] = [];

  // Submit to all IndexNow engines
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host,
          key,
          keyLocation,
          urlList: urls.slice(0, 10000), // Max 10k per request
        }),
      });

      const engineName = new URL(endpoint).hostname;

      if (response.ok || response.status === 202) {
        results.push({
          success: true,
          engine: engineName,
          message: `Submitted ${urls.length} URLs successfully`,
          urlCount: urls.length,
        });
      } else {
        results.push({
          success: false,
          engine: engineName,
          message: `HTTP ${response.status}: ${response.statusText}`,
          urlCount: 0,
        });
      }
    } catch (error) {
      const engineName = new URL(endpoint).hostname;
      results.push({
        success: false,
        engine: engineName,
        message: error instanceof Error ? error.message : "Unknown error",
        urlCount: 0,
      });
    }
  }

  return results;
}

/**
 * Submit ALL site URLs to IndexNow
 */
export async function submitAllToIndexNow(): Promise<{
  total: number;
  results: IndexNowResponse[];
}> {
  const allUrls = getAllSiteUrls().map((u) => u.url);
  const results = await submitToIndexNow(allUrls);
  return { total: allUrls.length, results };
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitSingleToIndexNow(
  url: string
): Promise<IndexNowResponse[]> {
  return submitToIndexNow([url]);
}
