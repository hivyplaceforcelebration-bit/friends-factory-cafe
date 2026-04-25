import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Decoration Vadodara | Beautiful Setup`,
  description: `Beautiful proposal decoration in Vadodara with flowers, candles, and romantic themes. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-decoration-vadodara" },
  openGraph: {
    title: `Proposal Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful proposal decoration in Vadodara with flowers, candles, and romantic themes. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/proposal-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful proposal decoration in Vadodara with flowers, candles, and romantic themes. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
