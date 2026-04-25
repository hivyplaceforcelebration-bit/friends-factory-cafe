import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-surprise-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Birthday Surprise Vadodara | Couple Celebration`,
  description: `Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-birthday-surprise-vadodara" },
  openGraph: {
    title: `Romantic Birthday Surprise Vadodara | Couple Celebration`,
    description: `Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/romantic-birthday-surprise-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Birthday Surprise Vadodara | Couple Celebration`,
    description: `Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
