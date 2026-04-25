import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candlelight-dinner")!;
const keyword = service.keywords.find(k => k.slug === "dinner-date-vadodara")!;

export const metadata: Metadata = {
  title: `Dinner Date Vadodara | Romantic Evening`,
  description: `Plan a perfect dinner date in Vadodara with romantic setup and delicious food. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/dinner-date-vadodara" },
  openGraph: {
    title: `Dinner Date Vadodara | Romantic Evening`,
    description: `Plan a perfect dinner date in Vadodara with romantic setup and delicious food. Make every moment count!`,
    url: "https://friendsfactorycafe.com/dinner-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Dinner Date Vadodara | Romantic Evening`,
    description: `Plan a perfect dinner date in Vadodara with romantic setup and delicious food. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
