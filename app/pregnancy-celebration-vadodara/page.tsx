import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "pregnancy-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Pregnancy Celebration Vadodara | Special Moments`,
  description: `Plan a pregnancy celebration in Vadodara with special moments. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/pregnancy-celebration-vadodara" },
  openGraph: {
    title: `Pregnancy Celebration Vadodara | Special Moments`,
    description: `Plan a pregnancy celebration in Vadodara with special moments. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/pregnancy-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pregnancy Celebration Vadodara | Special Moments`,
    description: `Plan a pregnancy celebration in Vadodara with special moments. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
