import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "pregnancy-reveal-vadodara")!;

export const metadata: Metadata = {
  title: `Pregnancy Reveal Vadodara | Surprise Setup`,
  description: `Plan a pregnancy reveal party in Vadodara with surprise setup. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/pregnancy-reveal-vadodara" },
  openGraph: {
    title: `Pregnancy Reveal Vadodara | Surprise Setup`,
    description: `Plan a pregnancy reveal party in Vadodara with surprise setup. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/pregnancy-reveal-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pregnancy Reveal Vadodara | Surprise Setup`,
    description: `Plan a pregnancy reveal party in Vadodara with surprise setup. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
