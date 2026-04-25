import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "godh-bharai-venue-vadodara")!;

export const metadata: Metadata = {
  title: `Godh Bharai Venue Vadodara | Traditional Setup`,
  description: `Find the perfect godh bharai venue in Vadodara. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/godh-bharai-venue-vadodara" },
  openGraph: {
    title: `Godh Bharai Venue Vadodara | Traditional Setup`,
    description: `Find the perfect godh bharai venue in Vadodara. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/godh-bharai-venue-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Godh Bharai Venue Vadodara | Traditional Setup`,
    description: `Find the perfect godh bharai venue in Vadodara. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
