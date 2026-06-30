import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "romantic-cafe-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Cafe Vadodara | #1 Venue for Candlelight Dinners",
  description:
    "Visit Vadodara's top romantic cafe for couples. Private rooftop dining under the stars, custom setups, and mocktails from ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-cafe-vadodara" },
  openGraph: {
    title: "Romantic Cafe Vadodara | #1 Venue for Candlelight Dinners",
    description:
      "Visit Vadodara's top romantic cafe for couples. Private rooftop dining under the stars, custom setups, and mocktails from ₹4,700.",
    url: "https://friendsfactorycafe.com/romantic-cafe-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Cafe Vadodara | #1 Venue for Candlelight Dinners",
    description:
      "Visit Vadodara's top romantic cafe for couples. Private rooftop dining under the stars, custom setups, and mocktails from ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
