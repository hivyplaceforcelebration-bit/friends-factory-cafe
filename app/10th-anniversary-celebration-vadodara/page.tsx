import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "10th-anniversary-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `10th Anniversary Celebration Vadodara | Decade of Love`,
  description: `Mark a decade of love with 10th anniversary celebration in Vadodara. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/10th-anniversary-celebration-vadodara" },
  openGraph: {
    title: `10th Anniversary Celebration Vadodara | Decade of Love`,
    description: `Mark a decade of love with 10th anniversary celebration in Vadodara. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/10th-anniversary-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `10th Anniversary Celebration Vadodara | Decade of Love`,
    description: `Mark a decade of love with 10th anniversary celebration in Vadodara. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
