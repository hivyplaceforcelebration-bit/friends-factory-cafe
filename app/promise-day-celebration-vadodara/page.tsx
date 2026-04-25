import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "promise-day-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Promise Day Celebration Vadodara 2026 | February 11th`,
  description: `Celebrate Promise Day in Vadodara on February 11th with meaningful moments. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/promise-day-celebration-vadodara" },
  openGraph: {
    title: `Promise Day Celebration Vadodara 2026 | February 11th`,
    description: `Celebrate Promise Day in Vadodara on February 11th with meaningful moments. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/promise-day-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Promise Day Celebration Vadodara 2026 | February 11th`,
    description: `Celebrate Promise Day in Vadodara on February 11th with meaningful moments. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
