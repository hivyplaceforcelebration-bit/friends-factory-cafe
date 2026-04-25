// ============================================================================
// WebSub (PubSubHubbub) — Real-time push notifications to Google
// Pings Google's hub when new content is published
// This is the FASTEST free indexing method — instant push
// ============================================================================

import { SEO_CONFIG } from "@/lib/seo-config";

const GOOGLE_HUB = "https://pubsubhubbub.appspot.com";
const FEED_URL = `${SEO_CONFIG.siteUrl}/feed.xml`;

interface WebSubResult {
  success: boolean;
  hub: string;
  message: string;
  httpStatus?: number;
}

/**
 * Ping Google's WebSub hub to notify about feed updates.
 * Google will immediately re-crawl your RSS feed and discover new pages.
 * Call this whenever new pages are added to the site.
 */
export async function pingWebSubHub(): Promise<WebSubResult> {
  try {
    const response = await fetch(GOOGLE_HUB, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "hub.mode": "publish",
        "hub.url": FEED_URL,
      }).toString(),
    });

    if (response.ok || response.status === 204) {
      return {
        success: true,
        hub: GOOGLE_HUB,
        message: "Successfully pinged Google WebSub hub",
        httpStatus: response.status,
      };
    } else {
      return {
        success: false,
        hub: GOOGLE_HUB,
        message: `HTTP ${response.status}: ${response.statusText}`,
        httpStatus: response.status,
      };
    }
  } catch (error) {
    return {
      success: false,
      hub: GOOGLE_HUB,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Ping all WebSub/PubSubHubbub hubs.
 * Currently only Google's hub, but extensible.
 */
export async function pingAllHubs(): Promise<WebSubResult[]> {
  const results: WebSubResult[] = [];
  results.push(await pingWebSubHub());
  return results;
}
