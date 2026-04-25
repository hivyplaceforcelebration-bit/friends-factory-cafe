import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';
import { packages, formatPrice } from '@/lib/ffc-config';

export const metadata: Metadata = {
  title: 'Candle Light Dinner, Birthday Surprise & Celebration Packages in Vadodara',
  description: '8 unique romantic packages – candle light dinners, birthday surprises, anniversary celebrations, proposals & date nights. Private rooftop & glass house in Vadodara. Starting ₹4,700.',
  keywords: 'romantic packages vadodara, celebration packages, birthday surprise packages, candlelight dinner packages, friends factory cafe packages',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/packages',
  },
  openGraph: {
    title: 'Candle Light Dinner & Celebration Packages in Vadodara',
    description: '8 unique romantic celebration packages. Rooftop & glass house experiences starting from ₹4,700.',
    url: 'https://friendsfactorycafe.com/packages',
    type: 'website',
    images: [
      {
        url: 'https://friendsfactorycafe.com/packages/6900/Cover.webp',
        width: 1200,
        height: 630,
        alt: 'Friends Factory Cafe Packages - Romantic Celebration Packages Vadodara',
      },
    ],
  },
};

// JSON-LD: ItemList + BreadcrumbList for packages listing page
function PackagesJsonLd() {
  const baseUrl = 'https://friendsfactorycafe.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/packages#itemlist`,
        name: 'Romantic Celebration Packages - Friends Factory Cafe Vadodara',
        description: 'Choose from 8 unique romantic celebration packages at Friends Factory Cafe Vadodara.',
        numberOfItems: packages.length,
        itemListElement: packages.map((pkg, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: pkg.name,
          url: `${baseUrl}/packages/${pkg.slug}`,
          image: `${baseUrl}${pkg.thumbnail}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/packages#breadcrumb`,
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
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/packages`,
        url: `${baseUrl}/packages`,
        name: 'Romantic Celebration Packages - Friends Factory Cafe Vadodara',
        description: 'Explore 8 unique romantic celebration packages at Friends Factory Cafe Vadodara.',
        isPartOf: { '@id': `${baseUrl}/#website` },
        breadcrumb: { '@id': `${baseUrl}/packages#breadcrumb` },
        mainEntity: { '@id': `${baseUrl}/packages#itemlist` },
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

export default function PackagesPage() {
  return (
    <>
      <PackagesJsonLd />
      <FFCPackagesPage />
    </>
  );
}
