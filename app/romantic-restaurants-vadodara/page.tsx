import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "romantic-restaurants-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Restaurants Vadodara | Couple-Friendly`,
  description: `Discover the best romantic restaurants in Vadodara for couples. Enjoy candlelight dinners.`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-restaurants-vadodara" },
  openGraph: {
    title: `Romantic Restaurants Vadodara | Couple-Friendly`,
    description: `Discover the best romantic restaurants in Vadodara for couples. Enjoy candlelight dinners.`,
    url: "https://friendsfactorycafe.com/romantic-restaurants-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Restaurants Vadodara | Couple-Friendly`,
    description: `Discover the best romantic restaurants in Vadodara for couples. Enjoy candlelight dinners.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
