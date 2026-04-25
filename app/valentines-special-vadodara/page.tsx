import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("valentines-week")!;
const keyword = service.keywords.find(k => k.slug === "valentines-special-vadodara")!;

export const metadata: Metadata = {
  title: `Valentine's Day Special Vadodara 2026 | Unforgettable`,
  description: `Experience Valentine's Day special celebration in Vadodara 2026 with romantic packages. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/valentines-special-vadodara" },
  openGraph: {
    title: `Valentine's Day Special Vadodara 2026 | Unforgettable`,
    description: `Experience Valentine's Day special celebration in Vadodara 2026 with romantic packages. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/valentines-special-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Valentine's Day Special Vadodara 2026 | Unforgettable`,
    description: `Experience Valentine's Day special celebration in Vadodara 2026 with romantic packages. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
