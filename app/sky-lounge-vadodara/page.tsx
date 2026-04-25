import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "sky-lounge-vadodara")!;

export const metadata: Metadata = {
  title: `Sky Lounge Vadodara | Elevated Romantic Experience`,
  description: `Visit the premium sky lounge in Vadodara. Elevated dining, panoramic views, and exclusive atmosphere for memorable celebrations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/sky-lounge-vadodara" },
  openGraph: {
    title: `Sky Lounge Vadodara | Elevated Romantic Experience`,
    description: `Visit the premium sky lounge in Vadodara. Elevated dining, panoramic views, and exclusive atmosphere for memorable celebrations.`,
    url: "https://friendsfactorycafe.com/sky-lounge-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Sky Lounge Vadodara | Elevated Romantic Experience`,
    description: `Visit the premium sky lounge in Vadodara. Elevated dining, panoramic views, and exclusive atmosphere for memorable celebrations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
