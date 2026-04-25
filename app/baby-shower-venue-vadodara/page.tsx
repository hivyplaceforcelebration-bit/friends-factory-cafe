import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "baby-shower-venue-vadodara")!;

export const metadata: Metadata = {
  title: `Baby Shower Venue Vadodara | Private Space`,
  description: `Find the best baby shower venue in Vadodara with private rooftop setup with private space.`,
  alternates: { canonical: "https://friendsfactorycafe.com/baby-shower-venue-vadodara" },
  openGraph: {
    title: `Baby Shower Venue Vadodara | Private Space`,
    description: `Find the best baby shower venue in Vadodara with private rooftop setup with private space.`,
    url: "https://friendsfactorycafe.com/baby-shower-venue-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Baby Shower Venue Vadodara | Private Space`,
    description: `Find the best baby shower venue in Vadodara with private rooftop setup with private space.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
