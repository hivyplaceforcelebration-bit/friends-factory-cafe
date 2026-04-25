// ============================================================================
// Sitemap Ping Utility — Notify search engines when sitemap updates
// Pings Google & Bing to re-crawl the sitemap index
// ============================================================================

import { SEO_CONFIG } from "@/lib/seo-config";

interface PingResult {
  engine: string;
  success: boolean;
  status: number;
  message: string;
}

/**
 * Ping search engines to re-crawl the sitemap.
 * Google deprecated the ping endpoint in 2023, but Bing still supports it.
 * We ping both for maximum coverage.
 */
export async function pingSitemap(): Promise<PingResult[]> {
  const sitemapUrl = encodeURIComponent(`${SEO_CONFIG.siteUrl}/sitemap.xml`);

  const engines = [
    {
      name: "Google",
      url: `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    },
    {
      name: "Bing",
      url: `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
    },
  ];

  const results: PingResult[] = [];

  for (const engine of engines) {
    try {
      const response = await fetch(engine.url, { method: "GET" });
      results.push({
        engine: engine.name,
        success: response.ok,
        status: response.status,
        message: response.ok
          ? "Sitemap ping successful"
          : `HTTP ${response.status}`,
      });
    } catch (error) {
      results.push({
        engine: engine.name,
        success: false,
        status: 0,
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  return results;
}
