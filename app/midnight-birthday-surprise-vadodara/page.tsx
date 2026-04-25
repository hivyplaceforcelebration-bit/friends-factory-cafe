import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "midnight-birthday-surprise-vadodara")!;

export const metadata: Metadata = {
  title: `Midnight Birthday Surprise Vadodara | 12 AM Celebration`,
  description: `Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/midnight-birthday-surprise-vadodara" },
  openGraph: {
    title: `Midnight Birthday Surprise Vadodara | 12 AM Celebration`,
    description: `Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/midnight-birthday-surprise-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Midnight Birthday Surprise Vadodara | 12 AM Celebration`,
    description: `Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
