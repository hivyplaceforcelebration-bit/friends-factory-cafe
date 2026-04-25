import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "special-date-vadodara")!;

export const metadata: Metadata = {
  title: `Special Date Vadodara | Memorable Moments`,
  description: `Plan a special date in Vadodara with romantic setup and decorations. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/special-date-vadodara" },
  openGraph: {
    title: `Special Date Vadodara | Memorable Moments`,
    description: `Plan a special date in Vadodara with romantic setup and decorations. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/special-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Special Date Vadodara | Memorable Moments`,
    description: `Plan a special date in Vadodara with romantic setup and decorations. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
