import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "chocolate-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Chocolate Day Celebration Vadodara 2026 | February 9th`,
  description: `Celebrate Chocolate Day in Vadodara on February 9th with sweet treats and romantic dinner. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/chocolate-day-celebration-vadodara" },
  openGraph: {
    title: `Chocolate Day Celebration Vadodara 2026 | February 9th`,
    description: `Celebrate Chocolate Day in Vadodara on February 9th with sweet treats and romantic dinner. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/chocolate-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Chocolate Day Celebration Vadodara 2026 | February 9th`,
    description: `Celebrate Chocolate Day in Vadodara on February 9th with sweet treats and romantic dinner. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
