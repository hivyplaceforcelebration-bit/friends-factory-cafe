import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "rose-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Rose Day Celebration Vadodara 2026 | February 7th`,
  description: `Celebrate Rose Day in Vadodara on February 7th with your partner. Rose decorations, romantic ambiance. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/rose-day-celebration-vadodara" },
  openGraph: {
    title: `Rose Day Celebration Vadodara 2026 | February 7th`,
    description: `Celebrate Rose Day in Vadodara on February 7th with your partner. Rose decorations, romantic ambiance. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/rose-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rose Day Celebration Vadodara 2026 | February 7th`,
    description: `Celebrate Rose Day in Vadodara on February 7th with your partner. Rose decorations, romantic ambiance. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
