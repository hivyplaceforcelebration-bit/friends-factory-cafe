import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Proposal Vadodara | Romantic Ambiance`,
  description: `Plan a candlelight proposal in Vadodara with romantic ambiance and beautiful setup. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-proposal-vadodara" },
  openGraph: {
    title: `Candlelight Proposal Vadodara | Romantic Ambiance`,
    description: `Plan a candlelight proposal in Vadodara with romantic ambiance and beautiful setup. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/candlelight-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Proposal Vadodara | Romantic Ambiance`,
    description: `Plan a candlelight proposal in Vadodara with romantic ambiance and beautiful setup. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
