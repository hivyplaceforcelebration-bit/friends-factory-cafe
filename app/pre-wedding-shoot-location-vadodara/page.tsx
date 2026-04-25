import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-shoot-location-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Shoot Location Vadodara | Stunning Backdrops`,
  description: `Find the best pre-wedding shoot location in Vadodara with private rooftop setup with stunning backdrops.`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-shoot-location-vadodara" },
  openGraph: {
    title: `Pre-Wedding Shoot Location Vadodara | Stunning Backdrops`,
    description: `Find the best pre-wedding shoot location in Vadodara with private rooftop setup with stunning backdrops.`,
    url: "https://friendsfactorycafe.com/pre-wedding-shoot-location-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Shoot Location Vadodara | Stunning Backdrops`,
    description: `Find the best pre-wedding shoot location in Vadodara with private rooftop setup with stunning backdrops.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
