import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-restaurants-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Restaurants Vadodara | Romantic Dining`,
  description: `Find the best anniversary restaurants in Vadodara for romantic dining. Enjoy candlelight dinners.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-restaurants-vadodara" },
  openGraph: {
    title: `Anniversary Restaurants Vadodara | Romantic Dining`,
    description: `Find the best anniversary restaurants in Vadodara for romantic dining. Enjoy candlelight dinners.`,
    url: "https://friendsfactorycafe.com/anniversary-restaurants-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Restaurants Vadodara | Romantic Dining`,
    description: `Find the best anniversary restaurants in Vadodara for romantic dining. Enjoy candlelight dinners.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
