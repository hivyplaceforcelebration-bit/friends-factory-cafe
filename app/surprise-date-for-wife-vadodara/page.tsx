import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-for-wife-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date for Wife Vadodara | Make Her Day`,
  description: `Create a surprise date for your wife in Vadodara with elegant setup. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-for-wife-vadodara" },
  openGraph: {
    title: `Surprise Date for Wife Vadodara | Make Her Day`,
    description: `Create a surprise date for your wife in Vadodara with elegant setup. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/surprise-date-for-wife-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date for Wife Vadodara | Make Her Day`,
    description: `Create a surprise date for your wife in Vadodara with elegant setup. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
