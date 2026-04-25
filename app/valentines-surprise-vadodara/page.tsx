import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-surprise-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Surprise Vadodara 2026 | Surprise Your Love`,
  description: `Plan a Valentine's Day surprise in Vadodara 2026 with decorations and special setup. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-surprise-vadodara" },
  openGraph: {
    title: `Valentine's Day Surprise Vadodara 2026 | Surprise Your Love`,
    description: `Plan a Valentine's Day surprise in Vadodara 2026 with decorations and special setup. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/valentines-surprise-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Surprise Vadodara 2026 | Surprise Your Love`,
    description: `Plan a Valentine's Day surprise in Vadodara 2026 with decorations and special setup. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
