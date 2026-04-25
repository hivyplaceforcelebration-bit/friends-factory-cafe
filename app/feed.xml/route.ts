/**
 * RSS Feed — /feed.xml
 * Auto-generates RSS 2.0 feed from all site pages
 * Google crawls RSS feeds frequently — this speeds up discovery of new pages
 * Includes WebSub hub link for real-time push notifications
 */

import { getAllSiteUrls } from "@/lib/seo-url-registry";
import { SEO_CONFIG } from "@/lib/seo-config";

export async function GET() {
  const allUrls = getAllSiteUrls();
  const siteUrl = SEO_CONFIG.siteUrl;
  const siteName = SEO_CONFIG.siteName;

  // Sort by lastModified (newest first), take top 500 for feed performance
  const feedUrls = [...allUrls]
    .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
    .slice(0, 500);

  const now = new Date().toUTCString();

  const rssItems = feedUrls
    .map(
      (entry) => `    <item>
      <title><![CDATA[${entry.title}]]></title>
      <link>${entry.url}</link>
      <guid isPermaLink="true">${entry.url}</guid>
      <pubDate>${new Date(entry.lastModified).toUTCString()}</pubDate>
      <description><![CDATA[${entry.description || `${entry.title} — ${siteName}, Vadodara. Premium romantic celebration venue for couples. Book now!`}]]></description>
      <category>${entry.type}</category>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>Premium romantic celebration venue in Vadodara. Birthday surprises, candlelight dinners, proposals, anniversary celebrations &amp; more.</description>
    <language>en-in</language>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>Next.js</generator>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com" rel="hub" />
    <image>
      <url>${siteUrl}/icon-512x512.png</url>
      <title>${siteName}</title>
      <link>${siteUrl}</link>
    </image>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
