import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "glass-house-cafe-vadodara")!;

export const metadata: Metadata = {
  title: "Glass House Cafe Vadodara | Unique Indoor Romantic Ambiance",
  description:
    "Book our premium weather-proof glass house cafe in Vadodara. Private candlelight dinners, custom balloon decor, and starlit views.",
  alternates: { canonical: "https://friendsfactorycafe.com/glass-house-cafe-vadodara" },
  openGraph: {
    title: "Glass House Cafe Vadodara | Unique Indoor Romantic Ambiance",
    description:
      "Book our premium weather-proof glass house cafe in Vadodara. Private candlelight dinners, custom balloon decor, and starlit views.",
    url: "https://friendsfactorycafe.com/glass-house-cafe-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass House Cafe Vadodara | Unique Indoor Romantic Ambiance",
    description:
      "Book our premium weather-proof glass house cafe in Vadodara. Private candlelight dinners, custom balloon decor, and starlit views.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
