import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "unique-pre-wedding-shoot-vadodara")!;

export const metadata: Metadata = {
  title: `Unique Pre-Wedding Shoot Vadodara | Creative Setup`,
  description: `Find unique pre-wedding shoot ideas in Vadodara with creative setups. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/unique-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: `Unique Pre-Wedding Shoot Vadodara | Creative Setup`,
    description: `Find unique pre-wedding shoot ideas in Vadodara with creative setups. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/unique-pre-wedding-shoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Unique Pre-Wedding Shoot Vadodara | Creative Setup`,
    description: `Find unique pre-wedding shoot ideas in Vadodara with creative setups. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
