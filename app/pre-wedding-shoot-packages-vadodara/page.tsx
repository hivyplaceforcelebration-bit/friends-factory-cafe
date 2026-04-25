import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-shoot-packages-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Shoot Packages Vadodara | All Inclusive`,
  description: `Explore pre-wedding shoot packages in Vadodara with decorations and setup. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-shoot-packages-vadodara" },
  openGraph: {
    title: `Pre-Wedding Shoot Packages Vadodara | All Inclusive`,
    description: `Explore pre-wedding shoot packages in Vadodara with decorations and setup. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/pre-wedding-shoot-packages-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Shoot Packages Vadodara | All Inclusive`,
    description: `Explore pre-wedding shoot packages in Vadodara with decorations and setup. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
