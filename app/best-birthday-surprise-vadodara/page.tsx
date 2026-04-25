import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "best-birthday-surprise-vadodara")!;

export const metadata: Metadata = {
  title: `Best Birthday Surprise Vadodara | Top Rated`,
  description: `Looking for the best birthday surprise in Vadodara? Enjoy premium decorations and romantic setups.`,
  alternates: { canonical: "https://friendsfactorycafe.com/best-birthday-surprise-vadodara" },
  openGraph: {
    title: `Best Birthday Surprise Vadodara | Top Rated`,
    description: `Looking for the best birthday surprise in Vadodara? Enjoy premium decorations and romantic setups.`,
    url: "https://friendsfactorycafe.com/best-birthday-surprise-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Birthday Surprise Vadodara | Top Rated`,
    description: `Looking for the best birthday surprise in Vadodara? Enjoy premium decorations and romantic setups.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
