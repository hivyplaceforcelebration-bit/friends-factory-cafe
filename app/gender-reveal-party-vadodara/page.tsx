import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "gender-reveal-party-vadodara")!;

export const metadata: Metadata = {
  title: `Gender Reveal Party Vadodara | Boy or Girl`,
  description: `Plan a gender reveal party in Vadodara with exciting setup. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/gender-reveal-party-vadodara" },
  openGraph: {
    title: `Gender Reveal Party Vadodara | Boy or Girl`,
    description: `Plan a gender reveal party in Vadodara with exciting setup. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/gender-reveal-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gender Reveal Party Vadodara | Boy or Girl`,
    description: `Plan a gender reveal party in Vadodara with exciting setup. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
