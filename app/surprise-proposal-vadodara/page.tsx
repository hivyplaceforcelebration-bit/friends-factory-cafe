import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "surprise-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Proposal Vadodara | Say Yes Moment`,
  description: `Plan a surprise proposal in Vadodara with secret setup and romantic decorations. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-proposal-vadodara" },
  openGraph: {
    title: `Surprise Proposal Vadodara | Say Yes Moment`,
    description: `Plan a surprise proposal in Vadodara with secret setup and romantic decorations. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/surprise-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Proposal Vadodara | Say Yes Moment`,
    description: `Plan a surprise proposal in Vadodara with secret setup and romantic decorations. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
