import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "25th-anniversary-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `25th Anniversary Celebration Vadodara | Silver Jubilee`,
  description: `Celebrate your silver jubilee 25th anniversary in Vadodara with special decorations and romantic setup.`,
  alternates: { canonical: "https://friendsfactorycafe.com/25th-anniversary-celebration-vadodara" },
  openGraph: {
    title: `25th Anniversary Celebration Vadodara | Silver Jubilee`,
    description: `Celebrate your silver jubilee 25th anniversary in Vadodara with special decorations and romantic setup.`,
    url: "https://friendsfactorycafe.com/25th-anniversary-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `25th Anniversary Celebration Vadodara | Silver Jubilee`,
    description: `Celebrate your silver jubilee 25th anniversary in Vadodara with special decorations and romantic setup.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
