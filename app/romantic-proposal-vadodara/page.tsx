import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "romantic-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Proposal Vadodara | Unforgettable Moment`,
  description: `Create an unforgettable romantic proposal in Vadodara with candlelight and decorations. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-proposal-vadodara" },
  openGraph: {
    title: `Romantic Proposal Vadodara | Unforgettable Moment`,
    description: `Create an unforgettable romantic proposal in Vadodara with candlelight and decorations. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/romantic-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Proposal Vadodara | Unforgettable Moment`,
    description: `Create an unforgettable romantic proposal in Vadodara with candlelight and decorations. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
