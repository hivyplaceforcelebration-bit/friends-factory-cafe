import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "night-pre-wedding-shoot-vadodara")!;

export const metadata: Metadata = {
  title: `Night Pre-Wedding Shoot Vadodara | Candlelight`,
  description: `Plan a night pre-wedding shoot in Vadodara with candlelight. Private rooftop venue. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/night-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: `Night Pre-Wedding Shoot Vadodara | Candlelight`,
    description: `Plan a night pre-wedding shoot in Vadodara with candlelight. Private rooftop venue. Make every moment count!`,
    url: "https://friendsfactorycafe.com/night-pre-wedding-shoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Night Pre-Wedding Shoot Vadodara | Candlelight`,
    description: `Plan a night pre-wedding shoot in Vadodara with candlelight. Private rooftop venue. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
