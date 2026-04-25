import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Decoration Vadodara | Romantic Setup`,
  description: `Beautiful anniversary decoration in Vadodara with flowers, balloons, and romantic themes. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-decoration-vadodara" },
  openGraph: {
    title: `Anniversary Decoration Vadodara | Romantic Setup`,
    description: `Beautiful anniversary decoration in Vadodara with flowers, balloons, and romantic themes. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/anniversary-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Decoration Vadodara | Romantic Setup`,
    description: `Beautiful anniversary decoration in Vadodara with flowers, balloons, and romantic themes. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
