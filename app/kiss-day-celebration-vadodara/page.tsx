import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "kiss-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Kiss Day Celebration Vadodara 2026 | February 13th`,
  description: `Romantic Kiss Day celebration in Vadodara on February 13th with intimate setup. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/kiss-day-celebration-vadodara" },
  openGraph: {
    title: `Kiss Day Celebration Vadodara 2026 | February 13th`,
    description: `Romantic Kiss Day celebration in Vadodara on February 13th with intimate setup. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/kiss-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kiss Day Celebration Vadodara 2026 | February 13th`,
    description: `Romantic Kiss Day celebration in Vadodara on February 13th with intimate setup. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
