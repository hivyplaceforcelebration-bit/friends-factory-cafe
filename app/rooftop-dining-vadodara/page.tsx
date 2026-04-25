import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-dining-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Dining Vadodara | Fine Dining Under the Stars`,
  description: `Experience exquisite rooftop dining in Vadodara. Gourmet cuisine, candlelit tables, and breathtaking views for an unforgettable evening.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-dining-vadodara" },
  openGraph: {
    title: `Rooftop Dining Vadodara | Fine Dining Under the Stars`,
    description: `Experience exquisite rooftop dining in Vadodara. Gourmet cuisine, candlelit tables, and breathtaking views for an unforgettable evening.`,
    url: "https://friendsfactorycafe.com/rooftop-dining-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Dining Vadodara | Fine Dining Under the Stars`,
    description: `Experience exquisite rooftop dining in Vadodara. Gourmet cuisine, candlelit tables, and breathtaking views for an unforgettable evening.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
