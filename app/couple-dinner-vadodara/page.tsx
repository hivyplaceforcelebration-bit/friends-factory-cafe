import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "couple-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Couple Dinner Vadodara | Special Moments`,
  description: `Enjoy a special couple dinner experience in Vadodara with candlelight and music. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/couple-dinner-vadodara" },
  openGraph: {
    title: `Couple Dinner Vadodara | Special Moments`,
    description: `Enjoy a special couple dinner experience in Vadodara with candlelight and music. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/couple-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Couple Dinner Vadodara | Special Moments`,
    description: `Enjoy a special couple dinner experience in Vadodara with candlelight and music. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
