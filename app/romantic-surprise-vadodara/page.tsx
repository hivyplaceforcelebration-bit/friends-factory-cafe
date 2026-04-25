import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "romantic-surprise-vadodara")!;

export const metadata: Metadata = {
  title: `Romantic Surprise Vadodara | Unforgettable Moments`,
  description: `Plan a romantic surprise in Vadodara with decorations and intimate setting. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/romantic-surprise-vadodara" },
  openGraph: {
    title: `Romantic Surprise Vadodara | Unforgettable Moments`,
    description: `Plan a romantic surprise in Vadodara with decorations and intimate setting. Make every moment count!`,
    url: "https://friendsfactorycafe.com/romantic-surprise-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Romantic Surprise Vadodara | Unforgettable Moments`,
    description: `Plan a romantic surprise in Vadodara with decorations and intimate setting. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
