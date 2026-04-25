/**
 * DYNAMIC [SLUG] PAGE
 * Handles all service category, keyword, and area pages for Friends Factory Cafe
 */

import { Metadata } from "next";
import { notFound } from "next/navigation";
import FFCAreaPage from "@/components/ffc-area-page";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import FFCServiceCategoryPage from "@/components/ffc-service-category-page";
import { 
  vadodaraAreas, 
  getAreaBySlug, 
  serviceCategories,
  getServiceBySlug,
  ServiceKeyword,
  ServiceCategory,
  siteConfig,
  packages,
  formatPrice
} from "@/lib/ffc-config";
import { getKeywordContent } from "@/lib/ffc-keyword-content";
import { generateKeywordPageContent } from "@/lib/ffc-unique-content";
import { getAreaContent } from "@/lib/ffc-area-content";
import { findExpandedKeyword, getAllExpandedSlugs, ExpandedKeyword } from "@/lib/keyword-expansion";

// Get all keyword slugs from all service categories
function getAllKeywords(): { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] {
  const keywords: { slug: string; keyword: ServiceKeyword; service: ServiceCategory }[] = [];
  
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      keywords.push({
        slug: keyword.slug,
        keyword,
        service
      });
    });
  });
  
  return keywords;
}

// Find keyword by slug
function findKeywordBySlug(slug: string): { keyword: ServiceKeyword; service: ServiceCategory } | undefined {
  const allKeywords = getAllKeywords();
  const found = allKeywords.find(k => k.slug === slug);
  if (found) {
    return { keyword: found.keyword, service: found.service };
  }
  return undefined;
}

// ISR: Revalidate pages every 12 hours for fresh content + fast loading
export const revalidate = 43200;

// Only allow pre-defined slugs — unknown slugs return 404 instead of dynamic render
export const dynamicParams = false;

// Generate static params for all possible routes
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add all service category pages
  serviceCategories.forEach((service) => {
    params.push({ slug: service.slug });
  });
  
  // Add all area pages
  vadodaraAreas.forEach((area) => {
    params.push({ slug: area.slug });
  });
  
  // Add all keyword pages from all services
  getAllKeywords().forEach(({ slug }) => {
    params.push({ slug });
  });
  
  // Add all expanded keyword pages (~2,800 new pages)
  getAllExpandedSlugs().forEach((slug) => {
    params.push({ slug });
  });
  
  return params;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's a service category page
  const serviceCategory = getServiceBySlug(slug);
  if (serviceCategory) {
    return {
      title: serviceCategory.metaTitle,
      description: serviceCategory.metaDescription,
      keywords: [
        serviceCategory.name.toLowerCase(),
        `${serviceCategory.name.toLowerCase()} vadodara`,
        `${serviceCategory.name.toLowerCase()} for couples`,
        `best ${serviceCategory.name.toLowerCase()} vadodara`,
        `friends factory cafe ${serviceCategory.name.toLowerCase()}`
      ],
      alternates: {
        canonical: `https://friendsfactorycafe.com/${serviceCategory.slug}`,
      },
      openGraph: {
        title: serviceCategory.metaTitle,
        description: serviceCategory.metaDescription,
        url: `https://friendsfactorycafe.com/${serviceCategory.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: serviceCategory.metaTitle,
        description: serviceCategory.metaDescription,
      },
    };
  }
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    const areaTitle = `Romantic Celebration in ${area.name}, Vadodara | Friends Factory Cafe`;
    const areaDescription = `Planning a birthday surprise, candlelight dinner or anniversary near ${area.name}? Friends Factory Cafe offers 100% private rooftop celebrations for couples in ${area.name}, Vadodara. All-inclusive packages from ₹4,700.`;
    
    return {
      title: areaTitle,
      description: areaDescription,
      keywords: [
        `romantic celebration ${area.name.toLowerCase()}`,
        `candlelight dinner ${area.name.toLowerCase()}`,
        `birthday surprise ${area.name.toLowerCase()} vadodara`,
        `couple cafe near ${area.name.toLowerCase()}`,
        `anniversary celebration ${area.name.toLowerCase()}`,
        `private dining ${area.name.toLowerCase()} vadodara`,
        `friends factory cafe ${area.name.toLowerCase()}`
      ],
      alternates: {
        canonical: `https://friendsfactorycafe.com/${area.slug}`,
      },
      openGraph: {
        title: areaTitle,
        description: `Premium private rooftop celebration venue for couples in ${area.name}, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!`,
        url: `https://friendsfactorycafe.com/${area.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: areaTitle,
        description: `Book romantic celebrations near ${area.name}, Vadodara. Private rooftop venue with stunning setups from ₹4,700.`,
      },
    };
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    const keywordTitle = keywordData.keyword.metaTitle;
    const keywordDescription = keywordData.keyword.metaDescription;
    
    return {
      title: keywordTitle,
      description: keywordDescription,
      keywords: [
        keywordData.keyword.title.toLowerCase(),
        `${keywordData.keyword.title.toLowerCase()} vadodara`,
        `${keywordData.service.name.toLowerCase()} vadodara`,
        `best ${keywordData.keyword.title.toLowerCase()} vadodara`,
        `${keywordData.service.name.toLowerCase()} near me vadodara`
      ],
      alternates: {
        canonical: `https://friendsfactorycafe.com/${keywordData.keyword.slug}`,
      },
      openGraph: {
        title: keywordTitle,
        description: keywordDescription,
        url: `https://friendsfactorycafe.com/${keywordData.keyword.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: keywordTitle,
        description: keywordDescription,
      },
    };
  }
  
  // Check if it's an expanded keyword page
  const expanded = findExpandedKeyword(slug);
  if (expanded) {
    return {
      title: expanded.metaTitle,
      description: expanded.metaDescription,
      keywords: [
        expanded.title.toLowerCase(),
        `${expanded.title.toLowerCase()} vadodara`,
        `${expanded.parentServiceName.toLowerCase()} vadodara`,
        `best ${expanded.parentServiceName.toLowerCase()} vadodara`,
      ],
      alternates: {
        canonical: `https://friendsfactorycafe.com/${expanded.slug}`,
      },
      openGraph: {
        title: expanded.metaTitle,
        description: expanded.metaDescription,
        url: `https://friendsfactorycafe.com/${expanded.slug}`,
        type: "website",
        locale: "en_IN",
        siteName: "Friends Factory Cafe",
      },
      twitter: {
        card: "summary_large_image",
        title: expanded.metaTitle,
        description: expanded.metaDescription,
      },
    };
  }
  
  return {
    title: "Page Not Found",
  };
}

// ==================== JSON-LD SCHEMA GENERATORS ====================

const BASE_URL = "https://friendsfactorycafe.com";

const localBusinessSchema = {
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "image": `${BASE_URL}/og-image.png`,
  "telephone": siteConfig.phone,
  "email": siteConfig.email,
  "url": BASE_URL,
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
  }
};

function generateServiceCategorySchema(service: ServiceCategory) {
  const url = `${BASE_URL}/${service.slug}`;
  
  // Build FAQ items from known patterns
  const defaultFaqs = [
    {
      question: `What ${service.name.toLowerCase()} services does Friends Factory Cafe offer?`,
      answer: `Friends Factory Cafe offers premium ${service.name.toLowerCase()} services in Vadodara including private rooftop celebrations, stunning decorations, romantic ambiance with fairy lights & candles, and packages starting from ₹${formatPrice(4700).replace('₹', '')}.`
    },
    {
      question: `How do I book a ${service.name.toLowerCase()} at Friends Factory Cafe?`,
      answer: `You can book via WhatsApp at ${siteConfig.phone}, call us directly, or fill out the booking form on our website. We recommend booking 2-3 days in advance, but same-day bookings are also available based on availability.`
    },
    {
      question: `What is included in your ${service.name.toLowerCase()} packages?`,
      answer: `All packages include private venue access, themed decorations, welcome drinks, snacks, background music of your choice, and 3 hours of exclusive celebration time. Select packages include complimentary cake. Prices range from ₹4,700 to ₹6,900.`
    },
    {
      question: `Is the ${service.name.toLowerCase()} venue private?`,
      answer: "Yes, 100%! Your celebration is completely private. No other guests will be present during your booking slot. It's just you and your partner in an exclusive romantic setting."
    },
    {
      question: `What are the timings for ${service.name.toLowerCase()}?`,
      answer: "We operate from 11 AM to 1 AM. Available time slots include Afternoon (11 AM - 2 PM), Evening (4 PM - 7 PM), Dinner (7 PM - 10 PM), and Late Night (10 PM - 1 AM)."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${service.name} in Vadodara`,
        "description": service.metaDescription,
        "url": url,
        "provider": localBusinessSchema,
        "areaServed": {
          "@type": "City",
          "name": "Vadodara",
          "containedInPlace": { "@type": "State", "name": "Gujarat" }
        },
        "serviceType": service.name,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "4700",
          "highPrice": "6900",
          "priceCurrency": "INR",
          "offerCount": packages.length.toString()
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.name} Packages`,
          "itemListElement": packages.slice(0, 4).map((pkg) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": pkg.name,
              "description": pkg.shortDescription,
              "url": `${BASE_URL}/packages/${pkg.slug}`
            },
            "price": pkg.price.toString(),
            "priceCurrency": "INR"
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": url }
        ]
      },
      {
        "@type": "WebPage",
        "name": service.metaTitle,
        "description": service.metaDescription,
        "url": url,
        "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": BASE_URL },
        "about": { "@type": "Thing", "name": `${service.name} in Vadodara` },
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "mainEntity": defaultFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "ItemList",
        "name": `${service.name} Keywords`,
        "itemListElement": service.keywords.slice(0, 10).map((kw, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": kw.title,
          "url": `${BASE_URL}/${kw.slug}`
        }))
      }
    ]
  };
}

function generateKeywordSchema(keyword: ServiceKeyword, service: ServiceCategory) {
  const url = `${BASE_URL}/${keyword.slug}`;
  
  // Get FAQ data the same way the component does
  const handcraftedContent = getKeywordContent(keyword.slug);
  const generatedContent = generateKeywordPageContent(service, keyword);
  const faqs = handcraftedContent ? handcraftedContent.faqs : generatedContent.faqContent;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": keyword.title,
        "description": keyword.metaDescription,
        "url": url,
        "provider": localBusinessSchema,
        "areaServed": {
          "@type": "City",
          "name": "Vadodara",
          "containedInPlace": { "@type": "State", "name": "Gujarat" }
        },
        "serviceType": keyword.title,
        "category": service.name,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "4700",
          "highPrice": "6900",
          "priceCurrency": "INR",
          "offerCount": packages.length.toString()
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": `${BASE_URL}/${service.slug}` },
          { "@type": "ListItem", "position": 4, "name": keyword.title, "item": url }
        ]
      },
      {
        "@type": "WebPage",
        "name": keyword.metaTitle,
        "description": keyword.metaDescription,
        "url": url,
        "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": BASE_URL },
        "breadcrumb": { "@type": "BreadcrumbList" },
        "about": { "@type": "Thing", "name": keyword.title },
        "inLanguage": "en-IN",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      },
      ...(faqs && faqs.length > 0 ? [{
        "@type": "FAQPage" as const,
        "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }] : [])
    ]
  };
}

function generateAreaSchema(area: { slug: string; name: string }) {
  const url = `${BASE_URL}/${area.slug}`;
  const areaContent = getAreaContent(area.slug);
  
  // Build FAQs from area content or defaults
  const defaultFaqs = [
    {
      question: `How do couples from ${area.name} reach Friends Factory Cafe?`,
      answer: `Friends Factory Cafe is conveniently located in Vadodara and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Contact us for exact directions.`
    },
    {
      question: "Do you offer pickup services?",
      answer: "Currently, we don't offer pickup services, but we can help guide you with the best routes from your location."
    },
    {
      question: "What are the booking options available?",
      answer: `Couples from ${area.name} can book via WhatsApp, phone call, or our online form. We recommend booking 2-3 days in advance for your preferred slot.`
    },
    {
      question: "Is the venue private?",
      answer: "Yes! Your celebration is 100% private. No other guests will be present during your booking slot."
    },
    {
      question: `What celebrations can couples from ${area.name} book?`,
      answer: "We offer birthday surprises, candlelight dinners, anniversary celebrations, proposal setups, pre-wedding shoots, and more. All packages include decorations, food, cake, and 3 hours of exclusive venue access."
    }
  ];
  
  const faqs = areaContent?.faqs || defaultFaqs;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `${siteConfig.name} - Serving ${area.name}`,
        "description": `Premium romantic celebration venue serving couples from ${area.name}, Vadodara. Birthday surprises, candlelight dinners, anniversaries & more.`,
        "url": url,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
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
        "areaServed": {
          "@type": "Place",
          "name": `${area.name}, Vadodara`
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Celebration Packages",
          "itemListElement": packages.slice(0, 4).map((pkg) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": pkg.name,
              "url": `${BASE_URL}/packages/${pkg.slug}`
            },
            "price": pkg.price.toString(),
            "priceCurrency": "INR"
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Areas", "item": `${BASE_URL}/areas` },
          { "@type": "ListItem", "position": 3, "name": area.name, "item": url }
        ]
      },
      {
        "@type": "WebPage",
        "name": `Romantic Celebrations in ${area.name}, Vadodara`,
        "description": `Book romantic celebrations, candlelight dinners, birthday surprises & anniversary parties in ${area.name}, Vadodara at Friends Factory Cafe.`,
        "url": url,
        "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": BASE_URL },
        "about": { "@type": "Place", "name": `${area.name}, Vadodara` },
        "inLanguage": "en-IN"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
}

function generateExpandedKeywordSchema(expanded: ExpandedKeyword, service: ServiceCategory) {
  const url = `${BASE_URL}/${expanded.slug}`;
  const areaName = expanded.areaName;

  const faqs = [
    {
      question: `What is included in your ${expanded.title.toLowerCase()} packages?`,
      answer: `All packages include private venue access, themed decorations, welcome drinks, snacks, background music, and 3 hours of exclusive celebration time. Prices range from ₹4,700 to ₹6,900.`
    },
    {
      question: `How do I book ${expanded.title.toLowerCase()}?`,
      answer: `You can book via WhatsApp at ${siteConfig.phone}, call us directly, or fill the booking form on our website. We recommend booking 2-3 days in advance.`
    },
    {
      question: `Is the venue private for ${expanded.title.toLowerCase()}?`,
      answer: "Yes, 100% private! No other guests will be present during your booking slot. It's just you and your partner in an exclusive romantic setting."
    },
    {
      question: areaName
        ? `How far is Friends Factory Cafe from ${areaName}?`
        : `What are the timings for ${expanded.title.toLowerCase()}?`,
      answer: areaName
        ? `Friends Factory Cafe is conveniently located in Gotri, Vadodara and easily accessible from ${areaName}. Most couples reach us within 10-20 minutes by car or auto.`
        : "We operate from 11 AM to 1 AM. Available slots: Afternoon (11 AM-2 PM), Evening (4 PM-7 PM), Dinner (7 PM-10 PM), Late Night (10 PM-1 AM)."
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": expanded.title,
        "description": expanded.metaDescription,
        "url": url,
        "provider": localBusinessSchema,
        "areaServed": areaName
          ? { "@type": "Place", "name": `${areaName}, Vadodara` }
          : { "@type": "City", "name": "Vadodara", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
        "serviceType": expanded.title,
        "category": service.name,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "4700",
          "highPrice": "6900",
          "priceCurrency": "INR",
          "offerCount": packages.length.toString()
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": `${BASE_URL}/${service.slug}` },
          { "@type": "ListItem", "position": 4, "name": expanded.title, "item": url }
        ]
      },
      {
        "@type": "WebPage",
        "name": expanded.metaTitle,
        "description": expanded.metaDescription,
        "url": url,
        "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": BASE_URL },
        "about": { "@type": "Thing", "name": expanded.title },
        "inLanguage": "en-IN",
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
}

// Main page component
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if it's a service category page
  const serviceCategory = getServiceBySlug(slug);
  if (serviceCategory) {
    const schema = generateServiceCategorySchema(serviceCategory);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <FFCServiceCategoryPage service={serviceCategory} />
      </>
    );
  }
  
  // Check if it's an area page
  const area = getAreaBySlug(slug);
  if (area) {
    const schema = generateAreaSchema(area);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <FFCAreaPage area={area} />
      </>
    );
  }
  
  // Check if it's a keyword page
  const keywordData = findKeywordBySlug(slug);
  if (keywordData) {
    const schema = generateKeywordSchema(keywordData.keyword, keywordData.service);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <FFCKeywordPage service={keywordData.service} keyword={keywordData.keyword} />
      </>
    );
  }
  
  // Check if it's an expanded keyword page
  const expanded = findExpandedKeyword(slug);
  if (expanded) {
    const parentService = getServiceBySlug(expanded.parentServiceSlug);
    if (parentService) {
      // Create a virtual ServiceKeyword from expanded data
      const virtualKeyword: ServiceKeyword = {
        slug: expanded.slug,
        title: expanded.title,
        h1: expanded.h1,
        metaTitle: expanded.metaTitle,
        metaDescription: expanded.metaDescription,
      };
      const schema = generateExpandedKeywordSchema(expanded, parentService);
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <FFCKeywordPage service={parentService} keyword={virtualKeyword} />
        </>
      );
    }
  }
  
  // Not found
  notFound();
}
