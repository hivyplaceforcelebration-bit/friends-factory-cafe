import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-for-wife-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Surprise for Wife Vadodara | Make Her Feel Special`,
  description: `Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-surprise-for-wife-vadodara" },
  openGraph: {
    title: `Birthday Surprise for Wife Vadodara | Make Her Feel Special`,
    description: `Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/birthday-surprise-for-wife-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Surprise for Wife Vadodara | Make Her Feel Special`,
    description: `Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
