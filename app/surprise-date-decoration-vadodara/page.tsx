import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Decoration Vadodara | Beautiful Setup`,
  description: `Beautiful surprise date decoration in Vadodara with flowers and candles. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-decoration-vadodara" },
  openGraph: {
    title: `Surprise Date Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful surprise date decoration in Vadodara with flowers and candles. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/surprise-date-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful surprise date decoration in Vadodara with flowers and candles. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
