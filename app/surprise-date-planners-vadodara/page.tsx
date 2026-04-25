import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "surprise-date-planners-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Date Planners Vadodara | Professional Setup`,
  description: `Expert surprise date planners in Vadodara. We create perfect moments. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-date-planners-vadodara" },
  openGraph: {
    title: `Surprise Date Planners Vadodara | Professional Setup`,
    description: `Expert surprise date planners in Vadodara. We create perfect moments. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/surprise-date-planners-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Date Planners Vadodara | Professional Setup`,
    description: `Expert surprise date planners in Vadodara. We create perfect moments. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
