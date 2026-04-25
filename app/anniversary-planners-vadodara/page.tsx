import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-planners-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Planners Vadodara | Professional Service`,
  description: `Professional anniversary planners in Vadodara. We handle everything from decorations to dining. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-planners-vadodara" },
  openGraph: {
    title: `Anniversary Planners Vadodara | Professional Service`,
    description: `Professional anniversary planners in Vadodara. We handle everything from decorations to dining. Make every moment count!`,
    url: "https://friendsfactorycafe.com/anniversary-planners-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Planners Vadodara | Professional Service`,
    description: `Professional anniversary planners in Vadodara. We handle everything from decorations to dining. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
