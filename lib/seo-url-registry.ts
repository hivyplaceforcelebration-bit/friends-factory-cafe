/**
 * SEO URL Registry - Central registry of all site URLs
 * Used by sitemap system, internal linking, and Google Indexing API
 * Automatically discovers all pages from ffc-config
 */

import {
  serviceCategories,
  vadodaraAreas,
  packages,
  blogPosts,
  ServiceCategory,
  ServiceKeyword,
  AreaConfig,
} from "@/lib/ffc-config";
import { getAllExpandedKeywords } from "@/lib/keyword-expansion";

export const BASE_URL = "https://friendsfactorycafe.com";

export interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  /** Page type for internal linking categorization */
  type: "home" | "static" | "service" | "package" | "keyword" | "area" | "blog";
  /** Display title for internal links */
  title: string;
  /** Parent service slug (for keyword pages) */
  serviceSlug?: string;
  /** Niche/category for grouping related pages */
  niche?: string;
  /** Meta description for RSS feed */
  description?: string;
}

/** Static pages configuration */
const staticPages = [
  { path: "/about", title: "About Us", priority: 0.8, freq: "monthly" as const },
  { path: "/contact", title: "Contact Us", priority: 0.9, freq: "monthly" as const },
  { path: "/menu", title: "Menu", priority: 0.8, freq: "weekly" as const },
  { path: "/packages", title: "Celebration Packages", priority: 0.95, freq: "weekly" as const },
  { path: "/services", title: "Our Services", priority: 0.9, freq: "weekly" as const },
  { path: "/virtual-tour", title: "Virtual Tour", priority: 0.7, freq: "monthly" as const },
  { path: "/areas", title: "Areas We Serve", priority: 0.8, freq: "weekly" as const },
];

/**
 * Get all URLs on the site, sorted by priority
 * This is the single source of truth for all page URLs
 */
export function getAllSiteUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString();
  const urls: SitemapUrl[] = [];

  // Homepage
  urls.push({
    url: BASE_URL,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
    type: "home",
    title: "Friends Factory Cafe - Home",
    niche: "home",
  });

  // Static pages
  staticPages.forEach((page) => {
    urls.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
      type: "static",
      title: page.title,
      niche: "info",
    });
  });

  // Service category pages
  serviceCategories.forEach((service) => {
    urls.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      type: "service",
      title: service.name,
      niche: service.slug,
    });
  });

  // Package detail pages
  packages.forEach((pkg) => {
    urls.push({
      url: `${BASE_URL}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      type: "package",
      title: pkg.name,
      niche: "packages",
    });
  });

  // Keyword pages (main SEO pages)
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      urls.push({
        url: `${BASE_URL}/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
        type: "keyword",
        title: keyword.title,
        serviceSlug: service.slug,
        niche: service.slug,
      });
    });
  });

  // Area pages
  vadodaraAreas.forEach((area) => {
    urls.push({
      url: `${BASE_URL}/${area.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
      type: "area",
      title: `Celebrations in ${area.name}`,
      niche: "areas",
    });
  });

  // Blog posts
  blogPosts.forEach((post) => {
    urls.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
      type: "blog",
      title: post.title,
      niche: "blog",
    });
  });

  // Expanded keyword pages (~2,800 new long-tail pages)
  getAllExpandedKeywords().forEach((ek) => {
    urls.push({
      url: `${BASE_URL}/${ek.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: ek.dimension === "area-keyword" || ek.dimension === "area-service" ? 0.7 : 0.75,
      type: "keyword",
      title: ek.title,
      serviceSlug: ek.parentServiceSlug,
      niche: ek.parentServiceSlug,
      description: ek.metaDescription,
    });
  });

  return urls;
}

/**
 * Get URLs split into chunks of given size for paginated sitemaps
 */
export function getSitemapChunks(chunkSize: number = 100): SitemapUrl[][] {
  const allUrls = getAllSiteUrls();
  const chunks: SitemapUrl[][] = [];

  for (let i = 0; i < allUrls.length; i += chunkSize) {
    chunks.push(allUrls.slice(i, i + chunkSize));
  }

  return chunks;
}

/**
 * Get total number of sitemap files needed
 */
export function getSitemapCount(chunkSize: number = 100): number {
  const allUrls = getAllSiteUrls();
  return Math.ceil(allUrls.length / chunkSize);
}

/**
 * Get related pages for internal linking
 * Returns pages in same niche + top pages from other niches
 */
export function getRelatedPages(
  currentUrl: string,
  options: {
    sameNicheCount?: number;
    otherNicheCount?: number;
    includeTopPages?: boolean;
  } = {}
): SitemapUrl[] {
  const { sameNicheCount = 6, otherNicheCount = 4, includeTopPages = true } = options;
  const allUrls = getAllSiteUrls();
  const current = allUrls.find((u) => u.url === currentUrl);
  if (!current) return [];

  const related: SitemapUrl[] = [];

  // Same niche pages (excluding current)
  const sameNiche = allUrls
    .filter((u) => u.niche === current.niche && u.url !== currentUrl)
    .slice(0, sameNicheCount);
  related.push(...sameNiche);

  // Top pages from other niches
  if (includeTopPages) {
    const topPages = allUrls
      .filter((u) => u.niche !== current.niche && u.type !== "blog" && u.url !== currentUrl)
      .sort((a, b) => b.priority - a.priority)
      .slice(0, otherNicheCount);
    related.push(...topPages);
  }

  return related;
}

/**
 * Get top service pages for footer/nav internal linking
 */
export function getTopServicePages(count: number = 8): SitemapUrl[] {
  const allUrls = getAllSiteUrls();
  return allUrls
    .filter((u) => u.type === "service" || u.type === "package")
    .sort((a, b) => b.priority - a.priority)
    .slice(0, count);
}

/**
 * Get pages in the same service category
 */
export function getSameServicePages(serviceSlug: string, excludeSlug?: string): SitemapUrl[] {
  const allUrls = getAllSiteUrls();
  return allUrls.filter(
    (u) => u.serviceSlug === serviceSlug && u.url !== `${BASE_URL}/${excludeSlug}`
  );
}
