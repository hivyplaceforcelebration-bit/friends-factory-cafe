import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-sunset-dinner-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Sunset Dinner Vadodara | Golden Hour Romance`,
  description: `Book a magical rooftop sunset dinner in Vadodara. Watch the golden hour with your partner while enjoying romantic dinner. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-sunset-dinner-vadodara" },
  openGraph: {
    title: `Rooftop Sunset Dinner Vadodara | Golden Hour Romance`,
    description: `Book a magical rooftop sunset dinner in Vadodara. Watch the golden hour with your partner while enjoying romantic dinner. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/rooftop-sunset-dinner-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Sunset Dinner Vadodara | Golden Hour Romance`,
    description: `Book a magical rooftop sunset dinner in Vadodara. Watch the golden hour with your partner while enjoying romantic dinner. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
