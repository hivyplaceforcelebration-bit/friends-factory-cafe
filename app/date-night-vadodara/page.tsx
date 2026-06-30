import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "date-night-vadodara")!;

export const metadata: Metadata = {
  title: "Date Night Vadodara | Romantic Candlelight Setup for Couples",
  description:
    "Plan a romantic date night in Vadodara. Private glass house and rooftop candlelight setup, music, and mocks starting ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/date-night-vadodara" },
  openGraph: {
    title: "Date Night Vadodara | Romantic Candlelight Setup for Couples",
    description:
      "Plan a romantic date night in Vadodara. Private glass house and rooftop candlelight setup, music, and mocks starting ₹4,700.",
    url: "https://friendsfactorycafe.com/date-night-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Night Vadodara | Romantic Candlelight Setup for Couples",
    description:
      "Plan a romantic date night in Vadodara. Private glass house and rooftop candlelight setup, music, and mocks starting ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
