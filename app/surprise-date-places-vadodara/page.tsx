import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-places-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Places Vadodara | Romantic Venues`,
  description: `Find the best surprise date places in Vadodara. Enjoy private rooftop celebrations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-places-vadodara" },
  openGraph: {
    title: `Surprise Date Places Vadodara | Romantic Venues`,
    description: `Find the best surprise date places in Vadodara. Enjoy private rooftop celebrations.`,
    url: "https://friendsfactorycafe.com/surprise-date-places-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Places Vadodara | Romantic Venues`,
    description: `Find the best surprise date places in Vadodara. Enjoy private rooftop celebrations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
