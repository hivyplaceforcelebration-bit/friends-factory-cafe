import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Photoshoot Vadodara | Romantic Shots`,
  description: `Book a pre-wedding photoshoot in Vadodara with romantic settings. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-photoshoot-vadodara" },
  openGraph: {
    title: `Pre-Wedding Photoshoot Vadodara | Romantic Shots`,
    description: `Book a pre-wedding photoshoot in Vadodara with romantic settings. Make every moment count!`,
    url: "https://friendsfactorycafe.com/pre-wedding-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Photoshoot Vadodara | Romantic Shots`,
    description: `Book a pre-wedding photoshoot in Vadodara with romantic settings. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
