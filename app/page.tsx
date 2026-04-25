/**
 * MAIN PAGE - FRIENDS FACTORY CAFE VADODARA
 * The main home page for Friends Factory Cafe - Vadodara
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for Friends Factory Cafe
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Candle Light Dinner, Birthday Surprise, Date Night, Anniversary & Proposal Celebration in Vadodara`,
    description: `Vadodara's #1 romantic celebration venue for couples. Book candle light dinners, birthday surprises, anniversary celebrations, surprise date nights, proposals & pre-wedding shoots on a private rooftop & glass house. Starting ₹4,700. Call +91 74878 88730.`,
    keywords: [
      'friends factory cafe vadodara',
      'romantic celebration vadodara',
      'candlelight dinner vadodara',
      'birthday surprise vadodara',
      'anniversary celebration vadodara',
      'couples only cafe vadodara',
      'rooftop dinner vadodara',
      'private dining vadodara'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Romantic Celebrations`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}