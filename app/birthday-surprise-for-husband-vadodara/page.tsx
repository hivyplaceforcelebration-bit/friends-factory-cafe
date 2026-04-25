import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-for-husband-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Surprise for Husband Vadodara | Romantic Celebration`,
  description: `Surprise your husband with a romantic birthday celebration in Vadodara. Stunning decorations, private venue & memorable moments. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-surprise-for-husband-vadodara" },
  openGraph: {
    title: `Birthday Surprise for Husband Vadodara | Romantic Celebration`,
    description: `Surprise your husband with a romantic birthday celebration in Vadodara. Stunning decorations, private venue & memorable moments. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/birthday-surprise-for-husband-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Surprise for Husband Vadodara | Romantic Celebration`,
    description: `Surprise your husband with a romantic birthday celebration in Vadodara. Stunning decorations, private venue & memorable moments. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
