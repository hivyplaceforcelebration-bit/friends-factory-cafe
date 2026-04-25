import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-candlelight-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Candlelight Dinner Vadodara 2026 | Private Venue`,
  description: `Romantic Valentine's Day candlelight dinner in Vadodara 2026. Private rooftop venue. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-candlelight-dinner-vadodara" },
  openGraph: {
    title: `Valentine's Candlelight Dinner Vadodara 2026 | Private Venue`,
    description: `Romantic Valentine's Day candlelight dinner in Vadodara 2026. Private rooftop venue. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/valentines-candlelight-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Candlelight Dinner Vadodara 2026 | Private Venue`,
    description: `Romantic Valentine's Day candlelight dinner in Vadodara 2026. Private rooftop venue. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
