import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-vadodara")!;

export const metadata: Metadata = {
  title: "Candlelight Dinner Vadodara | Best Romantic Private Dining",
  description:
    "Book a romantic candlelight dinner in Vadodara. 100% private rooftop and glass house setups, delicious food, and music. Packages starting ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-dinner-vadodara" },
  openGraph: {
    title: "Candlelight Dinner Vadodara | Best Romantic Private Dining",
    description:
      "Book a romantic candlelight dinner in Vadodara. 100% private rooftop and glass house setups, delicious food, and music. Packages starting ₹4,700.",
    url: "https://friendsfactorycafe.com/candlelight-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candlelight Dinner Vadodara | Best Romantic Private Dining",
    description:
      "Book a romantic candlelight dinner in Vadodara. 100% private rooftop and glass house setups, delicious food, and music. Packages starting ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
