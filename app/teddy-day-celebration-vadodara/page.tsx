import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "teddy-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Teddy Day Celebration Vadodara 2026 | February 10th`,
  description: `Cute Teddy Day celebration in Vadodara on February 10th with teddy decorations. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/teddy-day-celebration-vadodara" },
  openGraph: {
    title: `Teddy Day Celebration Vadodara 2026 | February 10th`,
    description: `Cute Teddy Day celebration in Vadodara on February 10th with teddy decorations. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/teddy-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Teddy Day Celebration Vadodara 2026 | February 10th`,
    description: `Cute Teddy Day celebration in Vadodara on February 10th with teddy decorations. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
