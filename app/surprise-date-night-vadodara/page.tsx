import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-night-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Night Vadodara | Magical Evening`,
  description: `Plan a magical surprise date night in Vadodara with candlelight and music. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-night-vadodara" },
  openGraph: {
    title: `Surprise Date Night Vadodara | Magical Evening`,
    description: `Plan a magical surprise date night in Vadodara with candlelight and music. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/surprise-date-night-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Night Vadodara | Magical Evening`,
    description: `Plan a magical surprise date night in Vadodara with candlelight and music. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
