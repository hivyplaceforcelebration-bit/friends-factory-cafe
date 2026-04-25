import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "unique-date-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Unique Date Ideas Vadodara | Stand Out`,
  description: `Find unique date ideas in Vadodara to make your evening special. Private rooftop venue. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/unique-date-ideas-vadodara" },
  openGraph: {
    title: `Unique Date Ideas Vadodara | Stand Out`,
    description: `Find unique date ideas in Vadodara to make your evening special. Private rooftop venue. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/unique-date-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Unique Date Ideas Vadodara | Stand Out`,
    description: `Find unique date ideas in Vadodara to make your evening special. Private rooftop venue. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
