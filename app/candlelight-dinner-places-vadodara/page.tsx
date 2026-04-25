import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-places-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Dinner Places Vadodara | Romantic Spots`,
  description: `Find the best candlelight dinner places in Vadodara. Enjoy private rooftop settings.`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-dinner-places-vadodara" },
  openGraph: {
    title: `Candlelight Dinner Places Vadodara | Romantic Spots`,
    description: `Find the best candlelight dinner places in Vadodara. Enjoy private rooftop settings.`,
    url: "https://friendsfactorycafe.com/candlelight-dinner-places-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Dinner Places Vadodara | Romantic Spots`,
    description: `Find the best candlelight dinner places in Vadodara. Enjoy private rooftop settings.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
