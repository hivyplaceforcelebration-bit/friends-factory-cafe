import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-venues-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Venues Vadodara | Private Spaces`,
  description: `Discover the best proposal venues in Vadodara for couples. Enjoy intimate rooftop settings.`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-venues-vadodara" },
  openGraph: {
    title: `Proposal Venues Vadodara | Private Spaces`,
    description: `Discover the best proposal venues in Vadodara for couples. Enjoy intimate rooftop settings.`,
    url: "https://friendsfactorycafe.com/proposal-venues-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Venues Vadodara | Private Spaces`,
    description: `Discover the best proposal venues in Vadodara for couples. Enjoy intimate rooftop settings.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
