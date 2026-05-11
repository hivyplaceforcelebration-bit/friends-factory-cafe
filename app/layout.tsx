import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { SocialProofNotifications } from "@/components/social-proof-notifications";
import { Suspense } from "react";
import { ReferralTracker } from "@/components/referral-tracker";
// EvergreenCountdownTimer removed from global layout - now only shown on landing page
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D97706", // Amber-600 for FFC
};

export const metadata: Metadata = {
  metadataBase: new URL("https://friendsfactorycafe.com"),
  title: {
    default: "Candle Light Dinner, Birthday Surprise, Date Night, Anniversary & Proposal Celebration in Vadodara",
    template: "%s",
  },
  description:
    "Vadodara's #1 romantic celebration venue for couples. Book candle light dinners, birthday surprises, anniversary celebrations, surprise date nights, proposals & pre-wedding shoots on a private rooftop & glass house. Starting ₹4,700. Call +91 74878 88730.",
  keywords: [
    "friends factory cafe",
    "friends factory cafe vadodara",
    "romantic cafe vadodara",
    "couples only cafe vadodara",
    "candlelight dinner vadodara",
    "birthday surprise vadodara",
    "anniversary celebration vadodara",
    "romantic proposal vadodara",
    "rooftop dinner vadodara",
    "private dining vadodara",
    "romantic restaurant vadodara",
    "couple cafe gotri",
    "date night vadodara",
    "pre-wedding photoshoot vadodara",
    "surprise party vadodara",
    "romantic venue gujarat",
    "birthday surprise for boyfriend vadodara",
    "birthday surprise for girlfriend vadodara",
    "candlelight dinner for couples vadodara",
    "romantic dinner vadodara",
    "proposal setup vadodara",
    "anniversary dinner vadodara",
    "valentines day vadodara",
    "glass house cafe vadodara"
  ],
  authors: [{ name: "Friends Factory Cafe", url: "https://friendsfactorycafe.com" }],
  creator: "Friends Factory Cafe",
  publisher: "Friends Factory Cafe",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "https://friendsfactorycafe.com/feed.xml",
    },
  },
  category: "Restaurant",
  classification: "Romantic Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://friendsfactorycafe.com",
    siteName: "Friends Factory Cafe",
    title: "Candle Light Dinner, Birthday Surprise & Romantic Celebrations in Vadodara",
    description: "Vadodara's #1 romantic celebration venue. Candle light dinners, birthday surprises, anniversary celebrations, proposals & pre-wedding shoots. Private rooftop & glass house. Starting ₹4,700.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Friends Factory Cafe - Best Romantic Celebrations in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candle Light Dinner, Birthday Surprise & Romantic Celebrations in Vadodara",
    description: "Vadodara's #1 romantic celebration venue. Candle light dinners, birthday surprises, proposals & more! Starting ₹4,700.",
    images: ["/og-image.png"],
    creator: "@friendsfactorycafe",
    site: "@friendsfactorycafe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": "22.3072;73.1812",
    "ICBM": "22.3072, 73.1812",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://friendsfactorycafe.com/#business",
      "name": "Friends Factory Cafe",
      "alternateName": "Friends Factory Cafe Vadodara",
      "description": "Best romantic celebration venue in Vadodara, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. 100% private rooftop & glass house experiences.",
      "url": "https://friendsfactorycafe.com",
      "telephone": "+91-7487888730",
      "email": "hello@friendsfactorycafe.com",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://friendsfactorycafe.com/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.webp",
        "https://friendsfactorycafe.com/images/gallery/birthday-surprise-decoration-vadodara-1.webp",
        "https://friendsfactorycafe.com/images/gallery/glass-house-dinner-vadodara-1.webp"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa",
        "addressLocality": "Gotri",
        "addressRegion": "Gujarat",
        "postalCode": "391101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3072",
        "longitude": "73.1812"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/friendsfactorycafe/",
        "https://www.facebook.com/friendsfactorycafe/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Forever Us LoveFrame Rooftop",
              "description": "Premium rooftop celebration with elegant photo frame setup, cake included",
              "url": "https://friendsfactorycafe.com/packages/forever-us-loveframe-rooftop"
            },
            "price": "6900",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Eternal Love Rooftop Celebration",
              "description": "Rooftop celebration with stylish canopy and romantic décor, cake included",
              "url": "https://friendsfactorycafe.com/packages/eternal-love-rooftop-celebration"
            },
            "price": "6500",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golden Promise Glass House",
              "description": "Luxurious glass house celebration with golden fairy lights, cake included",
              "url": "https://friendsfactorycafe.com/packages/golden-promise-glass-house"
            },
            "price": "6000",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Timeless Bond Glass House",
              "description": "Elegant glass house with minimalist white theme and flower arrangements",
              "url": "https://friendsfactorycafe.com/packages/timeless-bond-glass-house"
            },
            "price": "5700",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sweet Together Glass House",
              "description": "Cozy glass house with sweet theme and balloon arrangements",
              "url": "https://friendsfactorycafe.com/packages/sweet-together-glass-house"
            },
            "price": "5500",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Moonlit Romance Experience",
              "description": "Moonlit rooftop celebration with dreamy décor and silver accents",
              "url": "https://friendsfactorycafe.com/packages/moonlit-romance-experience"
            },
            "price": "5100",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Promise Creative Area",
              "description": "Festive tent setup rooftop celebration with curtains and balloons",
              "url": "https://friendsfactorycafe.com/packages/the-promise-creative-area"
            },
            "price": "4700",
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pure Love Glass House",
              "description": "Pure white themed glass house with rose petals and candle pathway",
              "url": "https://friendsfactorycafe.com/packages/pure-love-glass-house"
            },
            "price": "4700",
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://friendsfactorycafe.com/#website",
      "url": "https://friendsfactorycafe.com",
      "name": "Friends Factory Cafe",
      "description": "Best romantic celebration venue in Vadodara",
      "publisher": {
        "@id": "https://friendsfactorycafe.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://friendsfactorycafe.com/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://friendsfactorycafe.com/#organization",
      "name": "Friends Factory Cafe",
      "url": "https://friendsfactorycafe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://friendsfactorycafe.com/images/gallery/friends-factory-cafe-logo-1.webp",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7487888730",
        "contactType": "reservations",
        "areaServed": "Vadodara",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://friendsfactorycafe.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://friendsfactorycafe.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://friendsfactorycafe.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://friendsfactorycafe.com/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2357920771285041');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2357920771285041&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17868092300"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17868092300');
          `}
        </Script>
        {/* End Google Ads */}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SocialProofNotifications />
          <Suspense fallback={null}>
            <ReferralTracker />
          </Suspense>

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
