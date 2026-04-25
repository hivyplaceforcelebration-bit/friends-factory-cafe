import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("proposal")!;
const keyword = service.keywords.find(k => k.slug === "propose-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Propose Day Celebration Vadodara | February 8th`,
  description: `Celebrate Propose Day in Vadodara with romantic setup and special decorations. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/propose-day-celebration-vadodara" },
  openGraph: {
    title: `Propose Day Celebration Vadodara | February 8th`,
    description: `Celebrate Propose Day in Vadodara with romantic setup and special decorations. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/propose-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Propose Day Celebration Vadodara | February 8th`,
    description: `Celebrate Propose Day in Vadodara with romantic setup and special decorations. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
