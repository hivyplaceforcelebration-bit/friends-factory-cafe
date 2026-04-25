import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-surprise-for-husband-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Surprise for Husband Vadodara | Special Setup`,
  description: `Plan a special anniversary surprise for your husband in Vadodara with romantic decorations and intimate celebration.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-surprise-for-husband-vadodara" },
  openGraph: {
    title: `Anniversary Surprise for Husband Vadodara | Special Setup`,
    description: `Plan a special anniversary surprise for your husband in Vadodara with romantic decorations and intimate celebration.`,
    url: "https://friendsfactorycafe.com/anniversary-surprise-for-husband-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Surprise for Husband Vadodara | Special Setup`,
    description: `Plan a special anniversary surprise for your husband in Vadodara with romantic decorations and intimate celebration.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
