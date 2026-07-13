import type { APIRoute } from "astro";

import { keywordPages, siteConfig, vadodaraAreas } from "../lib/config";

const serviceKeywords = [
  "candlelight-dinner",
  "birthday-surprise",
  "anniversary-dinner",
  "proposal-setup",
  "date-night",
  "romantic-dinner",
];

const staticPaths = [
  "/",
  "/about/",
  "/blog/",
  "/contact/",
  "/menu/",
  "/packages/",
  "/virtual-tour/",
];

function toUrl(pathname: string) {
  return new URL(pathname, siteConfig.website).href;
}

function buildSitemapXml(urls: string[]) {
  const uniqueUrls = Array.from(new Set(urls));

  const entries = uniqueUrls.map((url) => {
    return [
      "  <url>",
      `    <loc>${url}</loc>`,
      "    <changefreq>weekly</changefreq>",
      "  </url>",
    ].join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
  ].join("\n");
}

export const GET: APIRoute = async () => {
  const urls = [
    ...staticPaths.map(toUrl),
    ...keywordPages.map((page) => toUrl(`/${page.slug}/`)),
    ...vadodaraAreas.flatMap((area) =>
      serviceKeywords.map((keyword) => toUrl(`/${area.slug}-${keyword}/`)),
    ),
  ];

  return new Response(buildSitemapXml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
