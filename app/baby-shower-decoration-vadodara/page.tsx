import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "baby-shower-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Baby Shower Decoration Vadodara | Beautiful Setup`,
  description: `Beautiful baby shower decoration in Vadodara with balloons and flowers. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/baby-shower-decoration-vadodara" },
  openGraph: {
    title: `Baby Shower Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful baby shower decoration in Vadodara with balloons and flowers. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/baby-shower-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Baby Shower Decoration Vadodara | Beautiful Setup`,
    description: `Beautiful baby shower decoration in Vadodara with balloons and flowers. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
