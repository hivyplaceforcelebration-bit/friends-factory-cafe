import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-restaurants-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Dinner Restaurants Vadodara | Top Picks`,
  description: `Find the best candlelight dinner restaurants in Vadodara. Enjoy private rooftop dining.`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-dinner-restaurants-vadodara" },
  openGraph: {
    title: `Candlelight Dinner Restaurants Vadodara | Top Picks`,
    description: `Find the best candlelight dinner restaurants in Vadodara. Enjoy private rooftop dining.`,
    url: "https://friendsfactorycafe.com/candlelight-dinner-restaurants-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Dinner Restaurants Vadodara | Top Picks`,
    description: `Find the best candlelight dinner restaurants in Vadodara. Enjoy private rooftop dining.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
