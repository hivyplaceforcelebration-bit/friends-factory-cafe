/**
 * SEO Internal Linking Component
 * Automatically generates related links for each page:
 * - Related services (same niche)
 * - Cross-niche top services
 * - Homepage link
 * - Area pages
 * 
 * Optimized for large-scale SEO websites
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Star, ArrowRight } from 'lucide-react';
import { 
  serviceCategories, 
  vadodaraAreas, 
  packages, 
  siteConfig 
} from '@/lib/ffc-config';

interface InternalLinkingProps {
  /** Current page slug (used to exclude from links) */
  currentSlug: string;
  /** Service category slug this page belongs to */
  serviceSlug?: string;
  /** Page niche: 'keyword' | 'area' | 'service' | 'package' */
  pageType: 'keyword' | 'area' | 'service' | 'package' | 'blog';
  /** Show area links */
  showAreas?: boolean;
  /** Show package links */
  showPackages?: boolean;
  /** Max related keywords to show */
  maxRelatedKeywords?: number;
  /** Max areas to show */
  maxAreas?: number;
  /** Pre-computed related expanded keywords (passed from server component) */
  expandedRelated?: { slug: string; title: string }[];
}

export default function SEOInternalLinking({
  currentSlug,
  serviceSlug,
  pageType,
  showAreas = true,
  showPackages = true,
  maxRelatedKeywords = 8,
  maxAreas = 10,
  expandedRelated = [],
}: InternalLinkingProps) {
  // Get current service category
  const currentService = serviceCategories.find((s) => s.slug === serviceSlug);

  // Related keywords from same service (same niche)
  const sameNicheKeywords = currentService
    ? currentService.keywords
        .filter((k) => k.slug !== currentSlug)
        .slice(0, maxRelatedKeywords)
    : [];

  // Cross-niche: top keywords from other services
  const crossNicheKeywords = serviceCategories
    .filter((s) => s.slug !== serviceSlug)
    .flatMap((s) => s.keywords.slice(0, 2))
    .slice(0, 6);

  // Top service category pages
  const topServices = serviceCategories
    .filter((s) => s.slug !== serviceSlug)
    .slice(0, 6);

  // Area pages (randomized subset for variety)
  const areaLinks = vadodaraAreas
    .filter((a) => a.slug !== currentSlug)
    .slice(0, maxAreas);

  // Top packages
  const topPackages = packages.slice(0, 4);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Related Services - Same Niche */}
        {sameNicheKeywords.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Related {currentService?.name} Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {sameNicheKeywords.map((keyword) => (
                <Link
                  key={keyword.slug}
                  href={`/${keyword.slug}`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-amber-700 line-clamp-1">
                    {keyword.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Expanded Keywords */}
        {expandedRelated.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {expandedRelated.map((ek) => (
                <Link
                  key={ek.slug}
                  href={`/${ek.slug}`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-amber-700 line-clamp-2">
                    {ek.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Niche Services */}
        {crossNicheKeywords.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Explore More Celebrations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {crossNicheKeywords.map((keyword) => (
                <Link
                  key={keyword.slug}
                  href={`/${keyword.slug}`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-amber-700 line-clamp-1">
                    {keyword.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Top Service Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
            Our Celebration Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all"
            >
              <span className="text-lg">🏠</span>
              <span className="text-sm font-medium text-amber-800">
                {siteConfig.name}
              </span>
            </Link>
            {topServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="text-lg">{service.emoji}</span>
                <span className="text-sm text-gray-700 group-hover:text-amber-700 line-clamp-1">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Packages */}
        {showPackages && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Popular Packages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {topPackages.map((pkg) => (
                <Link
                  key={pkg.slug}
                  href={`/packages/${pkg.slug}`}
                  className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <div className="font-medium text-sm text-gray-900 group-hover:text-amber-700 line-clamp-1">
                    {pkg.emoji} {pkg.name}
                  </div>
                  <div className="text-xs text-amber-600 mt-1">
                    Starting ₹{pkg.price.toLocaleString('en-IN')}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Area Pages */}
        {showAreas && areaLinks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Serving All Vadodara Areas
            </h2>
            <div className="flex flex-wrap gap-2">
              {areaLinks.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-gray-200 text-xs text-gray-600 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 transition-all"
                >
                  <MapPin className="h-3 w-3" />
                  {area.name}
                </Link>
              ))}
              <Link
                href="/areas"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-100 rounded-full border border-amber-300 text-xs text-amber-700 font-medium hover:bg-amber-200 transition-all"
              >
                View All Areas <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
