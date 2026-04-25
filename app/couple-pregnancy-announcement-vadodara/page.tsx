import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "couple-pregnancy-announcement-vadodara")!;

export const metadata: Metadata = {
  title: `Couple Pregnancy Announcement Vadodara | Together`,
  description: `Plan a couple pregnancy announcement in Vadodara with romantic setup. Book your special moment today!`,
  alternates: { canonical: "https://friendsfactorycafe.com/couple-pregnancy-announcement-vadodara" },
  openGraph: {
    title: `Couple Pregnancy Announcement Vadodara | Together`,
    description: `Plan a couple pregnancy announcement in Vadodara with romantic setup. Book your special moment today!`,
    url: "https://friendsfactorycafe.com/couple-pregnancy-announcement-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Couple Pregnancy Announcement Vadodara | Together`,
    description: `Plan a couple pregnancy announcement in Vadodara with romantic setup. Book your special moment today!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
