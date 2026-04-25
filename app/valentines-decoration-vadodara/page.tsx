import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Decoration Vadodara 2026 | Romantic Setup`,
  description: `Beautiful Valentine's Day decoration in Vadodara 2026 with hearts, roses, and candles. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-decoration-vadodara" },
  openGraph: {
    title: `Valentine's Day Decoration Vadodara 2026 | Romantic Setup`,
    description: `Beautiful Valentine's Day decoration in Vadodara 2026 with hearts, roses, and candles. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/valentines-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Decoration Vadodara 2026 | Romantic Setup`,
    description: `Beautiful Valentine's Day decoration in Vadodara 2026 with hearts, roses, and candles. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
