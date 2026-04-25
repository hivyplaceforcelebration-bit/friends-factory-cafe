import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-restaurant-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Restaurant Vadodara | Romantic Dining Destination`,
  description: `Discover the best rooftop restaurant in Vadodara for couples. Enjoy romantic atmosphere, delicious food, and stunning open-air dining experience.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-restaurant-vadodara" },
  openGraph: {
    title: `Rooftop Restaurant Vadodara | Romantic Dining Destination`,
    description: `Discover the best rooftop restaurant in Vadodara for couples. Enjoy romantic atmosphere, delicious food, and stunning open-air dining experience.`,
    url: "https://friendsfactorycafe.com/rooftop-restaurant-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Restaurant Vadodara | Romantic Dining Destination`,
    description: `Discover the best rooftop restaurant in Vadodara for couples. Enjoy romantic atmosphere, delicious food, and stunning open-air dining experience.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
