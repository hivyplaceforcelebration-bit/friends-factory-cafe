import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Ideas Vadodara | Creative Ways to Propose`,
  description: `Find creative proposal ideas in Vadodara. From rooftop proposals to candlelight setups. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-ideas-vadodara" },
  openGraph: {
    title: `Proposal Ideas Vadodara | Creative Ways to Propose`,
    description: `Find creative proposal ideas in Vadodara. From rooftop proposals to candlelight setups. Make every moment count!`,
    url: "https://friendsfactorycafe.com/proposal-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Ideas Vadodara | Creative Ways to Propose`,
    description: `Find creative proposal ideas in Vadodara. From rooftop proposals to candlelight setups. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
