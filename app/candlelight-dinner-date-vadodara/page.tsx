import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-date-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Dinner Date Vadodara | Romantic Night`,
  description: `Book a candlelight dinner date in Vadodara for a romantic night. Private rooftop venue. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-dinner-date-vadodara" },
  openGraph: {
    title: `Candlelight Dinner Date Vadodara | Romantic Night`,
    description: `Book a candlelight dinner date in Vadodara for a romantic night. Private rooftop venue. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/candlelight-dinner-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Dinner Date Vadodara | Romantic Night`,
    description: `Book a candlelight dinner date in Vadodara for a romantic night. Private rooftop venue. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
