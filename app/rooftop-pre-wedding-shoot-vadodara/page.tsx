import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-pre-wedding-shoot-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Pre-Wedding Shoot Vadodara | City Views`,
  description: `Experience rooftop pre-wedding shoot in Vadodara with stunning city views. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: `Rooftop Pre-Wedding Shoot Vadodara | City Views`,
    description: `Experience rooftop pre-wedding shoot in Vadodara with stunning city views. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/rooftop-pre-wedding-shoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Pre-Wedding Shoot Vadodara | City Views`,
    description: `Experience rooftop pre-wedding shoot in Vadodara with stunning city views. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
