/**
 * Complete Sitemap — /sitemap.xml
 * Returns a single sitemap with all ~3,100 URLs.
 * Well within Google's 50,000 URL / 50MB limit per sitemap.
 */

import { getAllSiteUrls } from "@/lib/seo-url-registry";

export async function GET() {
  const allUrls = getAllSiteUrls();

  const urlEntries = allUrls
    .map(
      (entry) =>
        `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
