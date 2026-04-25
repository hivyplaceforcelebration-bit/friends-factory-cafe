import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "private-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Private Proposal Vadodara | Intimate Venue`,
  description: `Book a private proposal setting in Vadodara with intimate venue and beautiful decorations. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/private-proposal-vadodara" },
  openGraph: {
    title: `Private Proposal Vadodara | Intimate Venue`,
    description: `Book a private proposal setting in Vadodara with intimate venue and beautiful decorations. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/private-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Private Proposal Vadodara | Intimate Venue`,
    description: `Book a private proposal setting in Vadodara with intimate venue and beautiful decorations. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
