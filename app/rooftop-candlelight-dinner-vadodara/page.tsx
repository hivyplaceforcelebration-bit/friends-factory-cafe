import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-candlelight-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Candlelight Dinner Vadodara | City Views`,
  description: `Experience rooftop candlelight dinner in Vadodara with stunning city views. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-candlelight-dinner-vadodara" },
  openGraph: {
    title: `Rooftop Candlelight Dinner Vadodara | City Views`,
    description: `Experience rooftop candlelight dinner in Vadodara with stunning city views. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/rooftop-candlelight-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Candlelight Dinner Vadodara | City Views`,
    description: `Experience rooftop candlelight dinner in Vadodara with stunning city views. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
