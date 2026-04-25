import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCPackageDetailPage from '@/components/ffc-package-detail-page';
import { packages, getPackageBySlug, siteConfig } from '@/lib/ffc-config';

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

const baseUrl = 'https://friendsfactorycafe.com';

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  
  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  const canonicalUrl = `${baseUrl}/packages/${pkg.slug}`;

  return {
    title: `${pkg.name} - ₹${pkg.price.toLocaleString('en-IN')} | Romantic Celebration Package in Vadodara`,
    description: `${pkg.shortDescription} Book ${pkg.name} for ₹${pkg.price.toLocaleString('en-IN')} in Vadodara. Perfect for ${pkg.perfectFor.join(', ')}. Private rooftop & glass house celebration.`,
    keywords: `${pkg.name}, ${pkg.perfectFor.join(', ')}, romantic celebration vadodara, friends factory cafe, candlelight dinner vadodara, birthday surprise vadodara`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${pkg.name} - ₹${pkg.price.toLocaleString('en-IN')} | Celebration Package Vadodara`,
      description: `${pkg.shortDescription} Perfect for ${pkg.perfectFor.slice(0, 3).join(', ')}.`,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${pkg.thumbnail}`,
          width: 1200,
          height: 630,
          alt: `${pkg.name} - Friends Factory Cafe Vadodara`,
        },
        ...pkg.images.slice(0, 3).map((img) => ({
          url: `${baseUrl}${img}`,
          width: 800,
          height: 600,
          alt: `${pkg.name} Gallery - Friends Factory Cafe`,
        })),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pkg.name} | Friends Factory Cafe Vadodara`,
      description: `${pkg.shortDescription}`,
      images: [`${baseUrl}${pkg.thumbnail}`],
    },
  };
}

// JSON-LD for each package page: Product + BreadcrumbList + ImageGallery + FAQPage
function PackageJsonLd({ slug }: { slug: string }) {
  const pkg = getPackageBySlug(slug);
  if (!pkg) return null;

  const canonicalUrl = `${baseUrl}/packages/${pkg.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Product/Service schema
      {
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: pkg.name,
        description: pkg.shortDescription,
        url: canonicalUrl,
        image: pkg.images.map((img) => `${baseUrl}${img}`),
        brand: {
          '@type': 'Brand',
          name: 'Friends Factory Cafe',
        },
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: 'INR',
          price: pkg.price,
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: 'Friends Factory Cafe',
            '@id': `${baseUrl}/#business`,
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        category: 'Romantic Celebration Package',
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Our Packages',
            item: `${baseUrl}/packages`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: pkg.name,
            item: canonicalUrl,
          },
        ],
      },
      // ImageGallery
      {
        '@type': 'ImageGallery',
        '@id': `${canonicalUrl}#gallery`,
        name: `${pkg.name} - Photo Gallery`,
        description: `Photos of ${pkg.name} setup at Friends Factory Cafe Vadodara`,
        url: canonicalUrl,
        numberOfItems: pkg.images.length,
        image: pkg.images.map((img, i) => ({
          '@type': 'ImageObject',
          url: `${baseUrl}${img}`,
          name: `${pkg.name} - Image ${i + 1}`,
          description: `${pkg.name} celebration setup at Friends Factory Cafe Vadodara`,
          contentUrl: `${baseUrl}${img}`,
        })),
      },
      // WebPage
      {
        '@type': 'WebPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: `${pkg.name} | Friends Factory Cafe Vadodara`,
        description: pkg.shortDescription,
        isPartOf: { '@id': `${baseUrl}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#product` },
        about: {
          '@type': 'Service',
          name: pkg.name,
          provider: { '@id': `${baseUrl}/#business` },
          areaServed: {
            '@type': 'City',
            name: 'Vadodara',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: pkg.name,
            itemListElement: pkg.features.map((feature) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: feature.replace(/[✨🍰🥂🎈💡🕯️🌅🎶🌸📸🤍🌹💡]/g, '').trim(),
              },
            })),
          },
        },
      },
      // FAQ schema for common questions
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is included in the ${pkg.name} package?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The ${pkg.name} package (₹${pkg.price.toLocaleString('en-IN')}) includes: ${pkg.features.map(f => f.replace(/[✨🍰🥂🎈💡🕯️🌅🎶🌸📸🤍🌹💡]/g, '').trim()).join(', ')}. Perfect for ${pkg.perfectFor.join(', ')}.`,
            },
          },
          {
            '@type': 'Question',
            name: `How much does the ${pkg.name} package cost?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `The ${pkg.name} package is priced at ₹${pkg.price.toLocaleString('en-IN')}. ${pkg.cakeIncluded ? 'A complimentary celebration cake is included.' : 'Celebration cake is available at ₹350 extra.'}`,
            },
          },
          {
            '@type': 'Question',
            name: `How to book the ${pkg.name} at Friends Factory Cafe?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can book the ${pkg.name} by calling +91 7487888730, messaging on WhatsApp, or using the booking form on this page. Advance booking is recommended for weekend slots.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cancellation policy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rescheduling must be informed at least one day prior. Events can be rescheduled within one month, subject to availability. No refund policy applicable.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <PackageJsonLd slug={slug} />
      <FFCPackageDetailPage package={pkg} />
    </>
  );
}
