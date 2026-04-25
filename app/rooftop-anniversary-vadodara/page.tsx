import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-anniversary-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Anniversary Vadodara | Romantic Open-Air Venue`,
  description: `Celebrate your anniversary on a romantic rooftop in Vadodara. our private rooftop venue provides elegant decorations, candlelight dinner, and starlit ambiance.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-anniversary-vadodara" },
  openGraph: {
    title: `Rooftop Anniversary Vadodara | Romantic Open-Air Venue`,
    description: `Celebrate your anniversary on a romantic rooftop in Vadodara. our private rooftop venue provides elegant decorations, candlelight dinner, and starlit ambiance.`,
    url: "https://friendsfactorycafe.com/rooftop-anniversary-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Anniversary Vadodara | Romantic Open-Air Venue`,
    description: `Celebrate your anniversary on a romantic rooftop in Vadodara. our private rooftop venue provides elegant decorations, candlelight dinner, and starlit ambiance.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
