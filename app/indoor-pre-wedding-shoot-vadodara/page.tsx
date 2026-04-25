import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "indoor-pre-wedding-shoot-vadodara")!;

export const metadata: Metadata = {
  title: `Indoor Pre-Wedding Shoot Vadodara | Glass House`,
  description: `Experience indoor pre-wedding shoot in Vadodara with private rooftop setup glass house.`,
  alternates: { canonical: "https://friendsfactorycafe.com/indoor-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: `Indoor Pre-Wedding Shoot Vadodara | Glass House`,
    description: `Experience indoor pre-wedding shoot in Vadodara with private rooftop setup glass house.`,
    url: "https://friendsfactorycafe.com/indoor-pre-wedding-shoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Indoor Pre-Wedding Shoot Vadodara | Glass House`,
    description: `Experience indoor pre-wedding shoot in Vadodara with private rooftop setup glass house.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
