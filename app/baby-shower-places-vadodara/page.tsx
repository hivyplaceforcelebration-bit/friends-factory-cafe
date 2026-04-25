import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "baby-shower-places-vadodara")!;

export const metadata: Metadata = {
  title: `Baby Shower Places Vadodara | Top Venues`,
  description: `Discover the best baby shower places in Vadodara. Enjoy intimate settings.`,
  alternates: { canonical: "https://friendsfactorycafe.com/baby-shower-places-vadodara" },
  openGraph: {
    title: `Baby Shower Places Vadodara | Top Venues`,
    description: `Discover the best baby shower places in Vadodara. Enjoy intimate settings.`,
    url: "https://friendsfactorycafe.com/baby-shower-places-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Baby Shower Places Vadodara | Top Venues`,
    description: `Discover the best baby shower places in Vadodara. Enjoy intimate settings.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
