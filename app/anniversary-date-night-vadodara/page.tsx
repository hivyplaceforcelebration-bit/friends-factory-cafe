import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-date-night-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Date Night Vadodara | Romantic Evening`,
  description: `Plan a special anniversary date night in Vadodara with candlelight dinner and romantic music. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-date-night-vadodara" },
  openGraph: {
    title: `Anniversary Date Night Vadodara | Romantic Evening`,
    description: `Plan a special anniversary date night in Vadodara with candlelight dinner and romantic music. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/anniversary-date-night-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Date Night Vadodara | Romantic Evening`,
    description: `Plan a special anniversary date night in Vadodara with candlelight dinner and romantic music. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
