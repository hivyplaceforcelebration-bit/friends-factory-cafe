import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-packages-vadodara")!;

export const metadata: Metadata = {
  title: `Candlelight Dinner Packages Vadodara | All Inclusive`,
  description: `Explore candlelight dinner packages in Vadodara with food, decorations, and music. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/candlelight-dinner-packages-vadodara" },
  openGraph: {
    title: `Candlelight Dinner Packages Vadodara | All Inclusive`,
    description: `Explore candlelight dinner packages in Vadodara with food, decorations, and music. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/candlelight-dinner-packages-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Candlelight Dinner Packages Vadodara | All Inclusive`,
    description: `Explore candlelight dinner packages in Vadodara with food, decorations, and music. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
