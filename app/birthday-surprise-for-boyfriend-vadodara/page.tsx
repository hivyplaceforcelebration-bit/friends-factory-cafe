import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-for-boyfriend-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Surprise for Boyfriend Vadodara | Unforgettable Celebration`,
  description: `Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-surprise-for-boyfriend-vadodara" },
  openGraph: {
    title: `Birthday Surprise for Boyfriend Vadodara | Unforgettable Celebration`,
    description: `Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/birthday-surprise-for-boyfriend-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Surprise for Boyfriend Vadodara | Unforgettable Celebration`,
    description: `Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
