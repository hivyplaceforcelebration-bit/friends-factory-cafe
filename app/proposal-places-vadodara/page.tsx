import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-places-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Places Vadodara | Romantic Spots`,
  description: `Find the best proposal places in Vadodara. Enjoy romantic rooftop settings for your big question.`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-places-vadodara" },
  openGraph: {
    title: `Proposal Places Vadodara | Romantic Spots`,
    description: `Find the best proposal places in Vadodara. Enjoy romantic rooftop settings for your big question.`,
    url: "https://friendsfactorycafe.com/proposal-places-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Places Vadodara | Romantic Spots`,
    description: `Find the best proposal places in Vadodara. Enjoy romantic rooftop settings for your big question.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
