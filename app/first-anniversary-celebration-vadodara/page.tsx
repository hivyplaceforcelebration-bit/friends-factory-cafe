import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "first-anniversary-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `First Anniversary Celebration Vadodara | Special Milestone`,
  description: `Celebrate your first anniversary in Vadodara with a special romantic setup. Private rooftop venue. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/first-anniversary-celebration-vadodara" },
  openGraph: {
    title: `First Anniversary Celebration Vadodara | Special Milestone`,
    description: `Celebrate your first anniversary in Vadodara with a special romantic setup. Private rooftop venue. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/first-anniversary-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `First Anniversary Celebration Vadodara | Special Milestone`,
    description: `Celebrate your first anniversary in Vadodara with a special romantic setup. Private rooftop venue. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
