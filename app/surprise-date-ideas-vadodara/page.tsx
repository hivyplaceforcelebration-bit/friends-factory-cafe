import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Ideas Vadodara | Creative Plans`,
  description: `Find creative surprise date ideas in Vadodara. From rooftop dinners to candlelight setups. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-ideas-vadodara" },
  openGraph: {
    title: `Surprise Date Ideas Vadodara | Creative Plans`,
    description: `Find creative surprise date ideas in Vadodara. From rooftop dinners to candlelight setups. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/surprise-date-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Ideas Vadodara | Creative Plans`,
    description: `Find creative surprise date ideas in Vadodara. From rooftop dinners to candlelight setups. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
