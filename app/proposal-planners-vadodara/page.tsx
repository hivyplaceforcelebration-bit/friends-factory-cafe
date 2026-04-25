import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "proposal-planners-vadodara")!;

export const metadata: Metadata = {
  title: `Proposal Planners Vadodara | Professional Setup`,
  description: `Expert proposal planners in Vadodara. We create perfect moments for your special question. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/proposal-planners-vadodara" },
  openGraph: {
    title: `Proposal Planners Vadodara | Professional Setup`,
    description: `Expert proposal planners in Vadodara. We create perfect moments for your special question. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/proposal-planners-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proposal Planners Vadodara | Professional Setup`,
    description: `Expert proposal planners in Vadodara. We create perfect moments for your special question. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
