import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "romantic-anniversary-date-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Anniversary Date Vadodara | Perfect Evening`,
  description: `Plan a romantic anniversary date in Vadodara with candlelight dinner and beautiful decorations. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-anniversary-date-vadodara" },
  openGraph: {
    title: `Romantic Anniversary Date Vadodara | Perfect Evening`,
    description: `Plan a romantic anniversary date in Vadodara with candlelight dinner and beautiful decorations. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/romantic-anniversary-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Anniversary Date Vadodara | Perfect Evening`,
    description: `Plan a romantic anniversary date in Vadodara with candlelight dinner and beautiful decorations. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
