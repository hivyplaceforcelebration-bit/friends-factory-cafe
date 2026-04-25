import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "open-air-rooftop-vadodara")!;

export const metadata: Metadata = {
  title: `Open Air Rooftop Vadodara | Fresh Air & City Lights`,
  description: `Experience the best open air rooftop venue in Vadodara. Enjoy fresh breezes, city lights, and romantic atmosphere for couples.`,
  alternates: { canonical: "https://friendsfactorycafe.com/open-air-rooftop-vadodara" },
  openGraph: {
    title: `Open Air Rooftop Vadodara | Fresh Air & City Lights`,
    description: `Experience the best open air rooftop venue in Vadodara. Enjoy fresh breezes, city lights, and romantic atmosphere for couples.`,
    url: "https://friendsfactorycafe.com/open-air-rooftop-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Open Air Rooftop Vadodara | Fresh Air & City Lights`,
    description: `Experience the best open air rooftop venue in Vadodara. Enjoy fresh breezes, city lights, and romantic atmosphere for couples.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
