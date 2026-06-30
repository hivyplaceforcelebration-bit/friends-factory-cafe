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
      "description": "Learn about Friends Factory Cafe — Vadodara's #1 romantic celebration venue for couples. Founded with a mission to create private, magical experiences for every milestone.",
      "url": "https://friendsfactorycafe.com/about",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com"
      },
      "about": {
        "@type": "LocalBusiness",
        "@id": "https://friendsfactorycafe.com/#business",
        "name": "Friends Factory Cafe",
        "description": "Premium romantic celebration venue in Vadodara for couples. Birthday surprises, candlelight dinners, anniversary celebrations, proposals & more. 500+ experiences hosted.",
        "url": "https://friendsfactorycafe.com",
        "telephone": "+91-7487888730",
        "email": "hello@friendsfactorycafe.com",
        "priceRange": "₹4,700 - ₹6,900",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
        "foundingDate": "2022",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 5,
          "maxValue": 15
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa",
          "addressLocality": "Gotri, Vadodara",
          "addressRegion": "Gujarat",
          "postalCode": "391101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.3072,
          "longitude": 73.1812
        },
        "hasMap": "https://maps.google.com/?q=Friends+Factory+Cafe+Vadodara",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "12:00",
          "closes": "23:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.instagram.com/friendsfactorycafe/",
          "https://www.facebook.com/friendsfactorycafe/"
        ]
      },
      "inLanguage": "en-IN"
    },
    // E-E-A-T: Founder/Person schema establishes authorship and expertise
    {
      "@type": "Person",
      "@id": "https://friendsfactorycafe.com/#founder",
      "name": "Friends Factory Cafe Team",
      "jobTitle": "Founders",
      "worksFor": {
        "@id": "https://friendsfactorycafe.com/#business"
      },
      "description": "The team behind Friends Factory Cafe has hosted 500+ romantic celebrations in Vadodara, specializing in private candlelight dinners, birthday surprises, marriage proposals, and anniversary setups.",
      "knowsAbout": [
        "Romantic celebrations",
        "Candlelight dinner setup",
        "Birthday surprise planning",
        "Marriage proposal setups",
        "Anniversary celebration design",
        "Vadodara venue management"
      ],
      "url": "https://friendsfactorycafe.com/about"
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
