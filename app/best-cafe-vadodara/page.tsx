import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "best-cafe-vadodara")!;

export const metadata: Metadata = {
  title: "Best Cafe in Vadodara | Top Rated Couple Celebration Spot",
  description:
    "Book the best cafe in Vadodara for intimate couple celebrations. 100% private booking, 4.8-star Google rating, and custom decoration setups.",
  alternates: { canonical: "https://friendsfactorycafe.com/best-cafe-vadodara" },
  openGraph: {
    title: "Best Cafe in Vadodara | Top Rated Couple Celebration Spot",
    description:
      "Book the best cafe in Vadodara for intimate couple celebrations. 100% private booking, 4.8-star Google rating, and custom decoration setups.",
    url: "https://friendsfactorycafe.com/best-cafe-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cafe in Vadodara | Top Rated Couple Celebration Spot",
    description:
      "Book the best cafe in Vadodara for intimate couple celebrations. 100% private booking, 4.8-star Google rating, and custom decoration setups.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
