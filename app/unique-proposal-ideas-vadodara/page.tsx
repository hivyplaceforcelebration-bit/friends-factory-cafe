import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "unique-proposal-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Unique Proposal Ideas Vadodara | Stand Out`,
  description: `Find unique proposal ideas in Vadodara to make your moment special. Private rooftop venue. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/unique-proposal-ideas-vadodara" },
  openGraph: {
    title: `Unique Proposal Ideas Vadodara | Stand Out`,
    description: `Find unique proposal ideas in Vadodara to make your moment special. Private rooftop venue. Make every moment count!`,
    url: "https://friendsfactorycafe.com/unique-proposal-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Unique Proposal Ideas Vadodara | Stand Out`,
    description: `Find unique proposal ideas in Vadodara to make your moment special. Private rooftop venue. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
