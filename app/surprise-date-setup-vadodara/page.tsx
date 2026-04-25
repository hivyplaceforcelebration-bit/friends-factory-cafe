import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-setup-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Setup Vadodara | Beautiful Arrangements`,
  description: `Book a surprise date setup in Vadodara with beautiful arrangements. Private rooftop venue. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-setup-vadodara" },
  openGraph: {
    title: `Surprise Date Setup Vadodara | Beautiful Arrangements`,
    description: `Book a surprise date setup in Vadodara with beautiful arrangements. Private rooftop venue. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/surprise-date-setup-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Setup Vadodara | Beautiful Arrangements`,
    description: `Book a surprise date setup in Vadodara with beautiful arrangements. Private rooftop venue. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
