import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Celebration Vadodara | Premium Venue with City Views`,
  description: `Book a stunning rooftop celebration in Vadodara. Premium private venue with panoramic city views, elegant decorations, and unforgettable ambiance for couples.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-celebration-vadodara" },
  openGraph: {
    title: `Rooftop Celebration Vadodara | Premium Venue with City Views`,
    description: `Book a stunning rooftop celebration in Vadodara. Premium private venue with panoramic city views, elegant decorations, and unforgettable ambiance for couples.`,
    url: "https://friendsfactorycafe.com/rooftop-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Celebration Vadodara | Premium Venue with City Views`,
    description: `Book a stunning rooftop celebration in Vadodara. Premium private venue with panoramic city views, elegant decorations, and unforgettable ambiance for couples.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
