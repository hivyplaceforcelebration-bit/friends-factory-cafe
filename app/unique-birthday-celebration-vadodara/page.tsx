import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "unique-birthday-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Unique Birthday Celebration Vadodara | Creative Ideas`,
  description: `Plan a unique birthday celebration in Vadodara with creative themes and personalized romantic setups. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/unique-birthday-celebration-vadodara" },
  openGraph: {
    title: `Unique Birthday Celebration Vadodara | Creative Ideas`,
    description: `Plan a unique birthday celebration in Vadodara with creative themes and personalized romantic setups. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/unique-birthday-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Unique Birthday Celebration Vadodara | Creative Ideas`,
    description: `Plan a unique birthday celebration in Vadodara with creative themes and personalized romantic setups. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
