import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "hug-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Hug Day Celebration Vadodara 2026 | February 12th`,
  description: `Cozy Hug Day celebration in Vadodara on February 12th with warm ambiance. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/hug-day-celebration-vadodara" },
  openGraph: {
    title: `Hug Day Celebration Vadodara 2026 | February 12th`,
    description: `Cozy Hug Day celebration in Vadodara on February 12th with warm ambiance. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/hug-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Hug Day Celebration Vadodara 2026 | February 12th`,
    description: `Cozy Hug Day celebration in Vadodara on February 12th with warm ambiance. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
