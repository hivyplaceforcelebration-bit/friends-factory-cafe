import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "romantic-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Photoshoot Vadodara | Intimate Setting`,
  description: `Plan a romantic photoshoot in Vadodara with intimate setting. Private rooftop venue. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-photoshoot-vadodara" },
  openGraph: {
    title: `Romantic Photoshoot Vadodara | Intimate Setting`,
    description: `Plan a romantic photoshoot in Vadodara with intimate setting. Private rooftop venue. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/romantic-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Photoshoot Vadodara | Intimate Setting`,
    description: `Plan a romantic photoshoot in Vadodara with intimate setting. Private rooftop venue. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
