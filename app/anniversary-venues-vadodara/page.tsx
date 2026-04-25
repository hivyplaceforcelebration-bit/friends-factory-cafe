import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-venues-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Venues Vadodara | Couple-Friendly`,
  description: `Discover the best anniversary venues in Vadodara for couples. Enjoy private rooftop celebrations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-venues-vadodara" },
  openGraph: {
    title: `Anniversary Venues Vadodara | Couple-Friendly`,
    description: `Discover the best anniversary venues in Vadodara for couples. Enjoy private rooftop celebrations.`,
    url: "https://friendsfactorycafe.com/anniversary-venues-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Venues Vadodara | Couple-Friendly`,
    description: `Discover the best anniversary venues in Vadodara for couples. Enjoy private rooftop celebrations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
