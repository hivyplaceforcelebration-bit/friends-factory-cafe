import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-proposal-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Proposal Vadodara | Stunning City Views`,
  description: `Plan a stunning rooftop proposal in Vadodara with city views and romantic decorations. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-proposal-vadodara" },
  openGraph: {
    title: `Rooftop Proposal Vadodara | Stunning City Views`,
    description: `Plan a stunning rooftop proposal in Vadodara with city views and romantic decorations. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/rooftop-proposal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Proposal Vadodara | Stunning City Views`,
    description: `Plan a stunning rooftop proposal in Vadodara with city views and romantic decorations. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
