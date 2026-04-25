import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | Book Candle Light Dinner & Birthday Surprise in Vadodara',
  description: 'Get in touch to book candle light dinners, birthday surprises, anniversary celebrations, proposals & romantic date nights in Vadodara. Call +91 74878 88730.',
  keywords: 'contact friends factory cafe, book celebration vadodara, romantic venue contact, couple cafe vadodara contact',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/contact',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Friends Factory Cafe",
      "description": "Get in touch with Friends Factory Cafe Vadodara. Book your romantic celebration, ask questions, or visit us.",
      "url": "https://friendsfactorycafe.com/contact",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com"
      },
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Friends Factory Cafe",
        "telephone": "+91 7487888730",
        "email": "hello@friendsfactorycafe.com",
        "url": "https://friendsfactorycafe.com",
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
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 7487888730",
          "contactType": "reservations",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        }
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://friendsfactorycafe.com/contact" }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCContactPage />
    </>
  );
}
