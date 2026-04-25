import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "pre-wedding-photography-vadodara")!;

export const metadata: Metadata = {
  title: `Pre-Wedding Photography Vadodara | Stunning Shots`,
  description: `Find the perfect pre-wedding photography location in Vadodara. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/pre-wedding-photography-vadodara" },
  openGraph: {
    title: `Pre-Wedding Photography Vadodara | Stunning Shots`,
    description: `Find the perfect pre-wedding photography location in Vadodara. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/pre-wedding-photography-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pre-Wedding Photography Vadodara | Stunning Shots`,
    description: `Find the perfect pre-wedding photography location in Vadodara. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
