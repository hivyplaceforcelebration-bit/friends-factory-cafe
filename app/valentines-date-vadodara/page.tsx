import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-date-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Date Vadodara 2026 | Perfect Evening`,
  description: `Plan the perfect Valentine's Day date in Vadodara 2026. Romantic rooftop dinner. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-date-vadodara" },
  openGraph: {
    title: `Valentine's Day Date Vadodara 2026 | Perfect Evening`,
    description: `Plan the perfect Valentine's Day date in Vadodara 2026. Romantic rooftop dinner. Make every moment count!`,
    url: "https://friendsfactorycafe.com/valentines-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Date Vadodara 2026 | Perfect Evening`,
    description: `Plan the perfect Valentine's Day date in Vadodara 2026. Romantic rooftop dinner. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
