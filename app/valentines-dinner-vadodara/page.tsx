import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Dinner Vadodara 2026 | Romantic Restaurant`,
  description: `Book romantic Valentine's Day dinner in Vadodara 2026. Candlelight dinner with special menu. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-dinner-vadodara" },
  openGraph: {
    title: `Valentine's Day Dinner Vadodara 2026 | Romantic Restaurant`,
    description: `Book romantic Valentine's Day dinner in Vadodara 2026. Candlelight dinner with special menu. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/valentines-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Dinner Vadodara 2026 | Romantic Restaurant`,
    description: `Book romantic Valentine's Day dinner in Vadodara 2026. Candlelight dinner with special menu. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
