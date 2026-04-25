import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "romantic-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Dinner Vadodara | Perfect Evening`,
  description: `Plan a romantic dinner in Vadodara with candlelight and beautiful decorations. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-dinner-vadodara" },
  openGraph: {
    title: `Romantic Dinner Vadodara | Perfect Evening`,
    description: `Plan a romantic dinner in Vadodara with candlelight and beautiful decorations. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/romantic-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Dinner Vadodara | Perfect Evening`,
    description: `Plan a romantic dinner in Vadodara with candlelight and beautiful decorations. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
