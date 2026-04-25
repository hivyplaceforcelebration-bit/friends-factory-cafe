import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | Candle Light Dinner & Birthday Surprise Venue in Vadodara',
  description: 'Know about Vadodara\'s #1 romantic celebration venue for couples. We offer candle light dinners, birthday surprises, anniversary celebrations, proposals & pre-wedding shoots on a private rooftop & glass house.',
  keywords: 'about friends factory cafe, romantic cafe vadodara, couple cafe story, celebration venue vadodara',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/about',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "About Friends Factory Cafe",
      "description": "Learn about Friends Factory Cafe - Vadodara's premier romantic celebration venue for couples.",
      "url": "https://friendsfactorycafe.com/about",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com"
      },
      "about": {
        "@type": "LocalBusiness",
        "name": "Friends Factory Cafe",
        "description": "Premium romantic celebration venue in Vadodara for couples. Birthday surprises, candlelight dinners, anniversary celebrations, proposals & more.",
        "url": "https://friendsfactorycafe.com",
        "telephone": "+91 7487888730",
        "email": "hello@friendsfactorycafe.com",
        "priceRange": "₹4700 - ₹6900",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road",
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "postalCode": "391101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.3072,
          "longitude": 73.1812
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        },
        "sameAs": [
          "https://www.instagram.com/friendsfactorycafe/",
          "https://www.facebook.com/friendsfactorycafe/"
        ]
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://friendsfactorycafe.com/about" }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCAboutPage />
    </>
  );
}
