import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-pre-wedding-shoot-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Pre-Wedding Shoot Vadodara | Romantic`,
  description: `Capture romantic candlelight pre-wedding shoot in Vadodara. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: `Candlelight Pre-Wedding Shoot Vadodara | Romantic`,
    description: `Capture romantic candlelight pre-wedding shoot in Vadodara. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/candlelight-pre-wedding-shoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Pre-Wedding Shoot Vadodara | Romantic`,
    description: `Capture romantic candlelight pre-wedding shoot in Vadodara. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
