import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-party-places-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Party Places Vadodara | Romantic Venues`,
  description: `Find the best birthday party places in Vadodara for couples. Enjoy private rooftop celebrations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-party-places-vadodara" },
  openGraph: {
    title: `Birthday Party Places Vadodara | Romantic Venues`,
    description: `Find the best birthday party places in Vadodara for couples. Enjoy private rooftop celebrations.`,
    url: "https://friendsfactorycafe.com/birthday-party-places-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Party Places Vadodara | Romantic Venues`,
    description: `Find the best birthday party places in Vadodara for couples. Enjoy private rooftop celebrations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
