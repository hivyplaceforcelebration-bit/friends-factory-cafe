import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-setup-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Setup Vadodara | Romantic Arrangements`,
  description: `Book a romantic proposal setup in Vadodara. Beautiful decorations and private rooftop venue.`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-setup-vadodara" },
  openGraph: {
    title: `Proposal Setup Vadodara | Romantic Arrangements`,
    description: `Book a romantic proposal setup in Vadodara. Beautiful decorations and private rooftop venue.`,
    url: "https://friendsfactorycafe.com/proposal-setup-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Setup Vadodara | Romantic Arrangements`,
    description: `Book a romantic proposal setup in Vadodara. Beautiful decorations and private rooftop venue.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
