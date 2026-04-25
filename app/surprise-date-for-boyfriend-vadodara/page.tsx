import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-for-boyfriend-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date for Boyfriend Vadodara | Romantic Setup`,
  description: `Plan a surprise date for your boyfriend in Vadodara with romantic setup. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-for-boyfriend-vadodara" },
  openGraph: {
    title: `Surprise Date for Boyfriend Vadodara | Romantic Setup`,
    description: `Plan a surprise date for your boyfriend in Vadodara with romantic setup. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/surprise-date-for-boyfriend-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date for Boyfriend Vadodara | Romantic Setup`,
    description: `Plan a surprise date for your boyfriend in Vadodara with romantic setup. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
