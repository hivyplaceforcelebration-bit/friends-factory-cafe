import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "intimate-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Intimate Dinner Vadodara | Private Moments`,
  description: `Enjoy an intimate dinner setting in Vadodara with private ambiance. Private rooftop venue. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/intimate-dinner-vadodara" },
  openGraph: {
    title: `Intimate Dinner Vadodara | Private Moments`,
    description: `Enjoy an intimate dinner setting in Vadodara with private ambiance. Private rooftop venue. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/intimate-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Intimate Dinner Vadodara | Private Moments`,
    description: `Enjoy an intimate dinner setting in Vadodara with private ambiance. Private rooftop venue. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
