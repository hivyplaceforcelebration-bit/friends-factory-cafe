import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "terrace-dining-vadodara")!;

export const metadata: Metadata = {
  title: `Terrace Dining Vadodara | Al Fresco Romance`,
  description: `Enjoy romantic terrace dining in Vadodara. Al fresco experience with beautiful setups, great food, and intimate ambiance for couples.`,
  alternates: { canonical: "https://friendsfactorycafe.com/terrace-dining-vadodara" },
  openGraph: {
    title: `Terrace Dining Vadodara | Al Fresco Romance`,
    description: `Enjoy romantic terrace dining in Vadodara. Al fresco experience with beautiful setups, great food, and intimate ambiance for couples.`,
    url: "https://friendsfactorycafe.com/terrace-dining-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terrace Dining Vadodara | Al Fresco Romance`,
    description: `Enjoy romantic terrace dining in Vadodara. Al fresco experience with beautiful setups, great food, and intimate ambiance for couples.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
