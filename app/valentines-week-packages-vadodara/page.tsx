import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-week-packages-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Week Packages Vadodara 2026 | All 7 Days`,
  description: `Special Valentine's Week packages in Vadodara 2026 for all 7 days. Rose Day to Valentine's Day celebrations. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-week-packages-vadodara" },
  openGraph: {
    title: `Valentine's Week Packages Vadodara 2026 | All 7 Days`,
    description: `Special Valentine's Week packages in Vadodara 2026 for all 7 days. Rose Day to Valentine's Day celebrations. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/valentines-week-packages-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Week Packages Vadodara 2026 | All 7 Days`,
    description: `Special Valentine's Week packages in Vadodara 2026 for all 7 days. Rose Day to Valentine's Day celebrations. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
