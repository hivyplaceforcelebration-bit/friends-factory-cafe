import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "special-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Special Dinner Vadodara | Memorable Evening`,
  description: `Book a special dinner for two in Vadodara with romantic ambiance. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/special-dinner-vadodara" },
  openGraph: {
    title: `Special Dinner Vadodara | Memorable Evening`,
    description: `Book a special dinner for two in Vadodara with romantic ambiance. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/special-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Special Dinner Vadodara | Memorable Evening`,
    description: `Book a special dinner for two in Vadodara with romantic ambiance. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
