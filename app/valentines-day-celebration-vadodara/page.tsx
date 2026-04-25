import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Celebration Vadodara 2026 | Romantic Date`,
  description: `Plan the perfect Valentine's Day celebration in Vadodara 2026. Romantic candlelight dinner, decorations & private venue. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-day-celebration-vadodara" },
  openGraph: {
    title: `Valentine's Day Celebration Vadodara 2026 | Romantic Date`,
    description: `Plan the perfect Valentine's Day celebration in Vadodara 2026. Romantic candlelight dinner, decorations & private venue. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/valentines-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Celebration Vadodara 2026 | Romantic Date`,
    description: `Plan the perfect Valentine's Day celebration in Vadodara 2026. Romantic candlelight dinner, decorations & private venue. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
