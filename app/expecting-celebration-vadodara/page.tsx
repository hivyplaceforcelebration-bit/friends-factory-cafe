import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "expecting-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Expecting Celebration Vadodara | Joyful Moments`,
  description: `Celebrate expecting a baby in Vadodara with joyful decorations. Reserve your unforgettable evening!`,
  alternates: { canonical: "https://friendsfactorycafe.com/expecting-celebration-vadodara" },
  openGraph: {
    title: `Expecting Celebration Vadodara | Joyful Moments`,
    description: `Celebrate expecting a baby in Vadodara with joyful decorations. Reserve your unforgettable evening!`,
    url: "https://friendsfactorycafe.com/expecting-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Expecting Celebration Vadodara | Joyful Moments`,
    description: `Celebrate expecting a baby in Vadodara with joyful decorations. Reserve your unforgettable evening!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
