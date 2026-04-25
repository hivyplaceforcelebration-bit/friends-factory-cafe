import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-celebration-ideas-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Celebration Ideas Vadodara | Creative Plans`,
  description: `Find creative anniversary celebration ideas in Vadodara. From candlelight dinners to rooftop surprises. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-celebration-ideas-vadodara" },
  openGraph: {
    title: `Anniversary Celebration Ideas Vadodara | Creative Plans`,
    description: `Find creative anniversary celebration ideas in Vadodara. From candlelight dinners to rooftop surprises. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/anniversary-celebration-ideas-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Celebration Ideas Vadodara | Creative Plans`,
    description: `Find creative anniversary celebration ideas in Vadodara. From candlelight dinners to rooftop surprises. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
