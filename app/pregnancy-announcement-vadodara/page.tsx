import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "pregnancy-announcement-vadodara")!;

export const metadata: Metadata = {
  title: `Pregnancy Announcement Vadodara | Special Celebration`,
  description: `Plan a special pregnancy announcement celebration in Vadodara. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/pregnancy-announcement-vadodara" },
  openGraph: {
    title: `Pregnancy Announcement Vadodara | Special Celebration`,
    description: `Plan a special pregnancy announcement celebration in Vadodara. Make every moment count!`,
    url: "https://friendsfactorycafe.com/pregnancy-announcement-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pregnancy Announcement Vadodara | Special Celebration`,
    description: `Plan a special pregnancy announcement celebration in Vadodara. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
