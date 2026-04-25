import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "marriage-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Marriage Proposal Vadodara | Perfect Venue`,
  description: `Find the perfect marriage proposal venue in Vadodara. Enjoy private rooftop celebrations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/marriage-proposal-vadodara" },
  openGraph: {
    title: `Marriage Proposal Vadodara | Perfect Venue`,
    description: `Find the perfect marriage proposal venue in Vadodara. Enjoy private rooftop celebrations.`,
    url: "https://friendsfactorycafe.com/marriage-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Marriage Proposal Vadodara | Perfect Venue`,
    description: `Find the perfect marriage proposal venue in Vadodara. Enjoy private rooftop celebrations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
