import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-candlelight-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Outdoor Candlelight Dinner Vadodara | Under the Stars`,
  description: `Experience outdoor candlelight dinner in Vadodara under the stars. Private rooftop venue. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/outdoor-candlelight-dinner-vadodara" },
  openGraph: {
    title: `Outdoor Candlelight Dinner Vadodara | Under the Stars`,
    description: `Experience outdoor candlelight dinner in Vadodara under the stars. Private rooftop venue. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/outdoor-candlelight-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Outdoor Candlelight Dinner Vadodara | Under the Stars`,
    description: `Experience outdoor candlelight dinner in Vadodara under the stars. Private rooftop venue. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
