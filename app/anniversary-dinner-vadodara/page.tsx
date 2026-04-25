import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Dinner Vadodara | Romantic Restaurant`,
  description: `Book a romantic anniversary dinner in Vadodara. Candlelight setup, special decorations, and intimate dining.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-dinner-vadodara" },
  openGraph: {
    title: `Anniversary Dinner Vadodara | Romantic Restaurant`,
    description: `Book a romantic anniversary dinner in Vadodara. Candlelight setup, special decorations, and intimate dining.`,
    url: "https://friendsfactorycafe.com/anniversary-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Dinner Vadodara | Romantic Restaurant`,
    description: `Book a romantic anniversary dinner in Vadodara. Candlelight setup, special decorations, and intimate dining.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
