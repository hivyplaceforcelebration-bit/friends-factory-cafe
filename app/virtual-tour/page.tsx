import { Metadata } from 'next';
import FFCVirtualTourPage from '@/components/ffc-virtual-tour-page';

export const metadata: Metadata = {
  title: 'Virtual Tour | Candle Light Dinner & Birthday Surprise Venue in Vadodara',
  description: 'Take a virtual tour of Vadodara\'s private rooftop & glass house celebration venue. See candle light dinner setups, birthday surprise decorations & romantic date night arrangements.',
  keywords: 'virtual tour friends factory cafe, romantic venue tour vadodara, couple cafe photos, celebration venue gallery',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/virtual-tour',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Virtual Tour | Friends Factory Cafe",
      "description": "Take a virtual tour of Friends Factory Cafe Vadodara. Explore our romantic rooftop setups, glass houses, and beautiful celebration spaces.",
      "url": "https://friendsfactorycafe.com/virtual-tour",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com"
      },
      "about": {
        "@type": "TouristAttraction",
        "name": "Friends Factory Cafe - Romantic Celebration Venue",
        "description": "Premium rooftop romantic celebration venue with glass houses, candlelight setups, and stunning city views in Vadodara.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
        { "@type": "ListItem", "position": 2, "name": "Virtual Tour", "item": "https://friendsfactorycafe.com/virtual-tour" }
      ]
    }
  ]
};

export default function VirtualTourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCVirtualTourPage />
    </>
  );
}
