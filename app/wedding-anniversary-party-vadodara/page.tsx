import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "wedding-anniversary-party-vadodara")!;

export const metadata: Metadata = {
  title: `Wedding Anniversary Party Vadodara | Private Venue`,
  description: `Host a memorable wedding anniversary party in Vadodara with private venue and romantic decorations.`,
  alternates: { canonical: "https://friendsfactorycafe.com/wedding-anniversary-party-vadodara" },
  openGraph: {
    title: `Wedding Anniversary Party Vadodara | Private Venue`,
    description: `Host a memorable wedding anniversary party in Vadodara with private venue and romantic decorations.`,
    url: "https://friendsfactorycafe.com/wedding-anniversary-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Wedding Anniversary Party Vadodara | Private Venue`,
    description: `Host a memorable wedding anniversary party in Vadodara with private venue and romantic decorations.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
