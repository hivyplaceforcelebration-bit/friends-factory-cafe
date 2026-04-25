import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "engagement-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Engagement Proposal Vadodara | Ring Ceremony Setup`,
  description: `Plan an engagement proposal in Vadodara with ring ceremony setup and romantic decorations. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/engagement-proposal-vadodara" },
  openGraph: {
    title: `Engagement Proposal Vadodara | Ring Ceremony Setup`,
    description: `Plan an engagement proposal in Vadodara with ring ceremony setup and romantic decorations. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/engagement-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Engagement Proposal Vadodara | Ring Ceremony Setup`,
    description: `Plan an engagement proposal in Vadodara with ring ceremony setup and romantic decorations. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
