import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-venues-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Venues Vadodara | Romantic Locations`,
  description: `Discover the best pre-wedding venues in Vadodara. Enjoy intimate rooftop settings.`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-venues-vadodara" },
  openGraph: {
    title: `Pre-Wedding Venues Vadodara | Romantic Locations`,
    description: `Discover the best pre-wedding venues in Vadodara. Enjoy intimate rooftop settings.`,
    url: "https://friendsfactorycafe.com/pre-wedding-venues-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Venues Vadodara | Romantic Locations`,
    description: `Discover the best pre-wedding venues in Vadodara. Enjoy intimate rooftop settings.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
