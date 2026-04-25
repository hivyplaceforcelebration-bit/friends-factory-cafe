import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-planners-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Surprise Planners Vadodara | Professional Setup`,
  description: `Expert birthday surprise planners in Vadodara. We handle decorations, cake, and everything. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-surprise-planners-vadodara" },
  openGraph: {
    title: `Birthday Surprise Planners Vadodara | Professional Setup`,
    description: `Expert birthday surprise planners in Vadodara. We handle decorations, cake, and everything. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/birthday-surprise-planners-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Surprise Planners Vadodara | Professional Setup`,
    description: `Expert birthday surprise planners in Vadodara. We handle decorations, cake, and everything. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
