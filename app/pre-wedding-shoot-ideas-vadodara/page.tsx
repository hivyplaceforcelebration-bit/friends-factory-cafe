import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-shoot-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Shoot Ideas Vadodara | Creative Concepts`,
  description: `Find creative pre-wedding shoot ideas in Vadodara with private rooftop setup with unique setups.`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-shoot-ideas-vadodara" },
  openGraph: {
    title: `Pre-Wedding Shoot Ideas Vadodara | Creative Concepts`,
    description: `Find creative pre-wedding shoot ideas in Vadodara with private rooftop setup with unique setups.`,
    url: "https://friendsfactorycafe.com/pre-wedding-shoot-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Shoot Ideas Vadodara | Creative Concepts`,
    description: `Find creative pre-wedding shoot ideas in Vadodara with private rooftop setup with unique setups.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
