import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "surprise-anniversary-party-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Anniversary Party Vadodara | Secret Celebration`,
  description: `Plan a surprise anniversary party in Vadodara with secret setup and romantic decorations. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-anniversary-party-vadodara" },
  openGraph: {
    title: `Surprise Anniversary Party Vadodara | Secret Celebration`,
    description: `Plan a surprise anniversary party in Vadodara with secret setup and romantic decorations. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/surprise-anniversary-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Anniversary Party Vadodara | Secret Celebration`,
    description: `Plan a surprise anniversary party in Vadodara with secret setup and romantic decorations. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
