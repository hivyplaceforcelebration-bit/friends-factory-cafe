import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "baby-announcement-party-vadodara")!;

export const metadata: Metadata = {
  title: `Baby Announcement Party Vadodara | Celebration`,
  description: `Host a baby announcement party in Vadodara with beautiful decorations. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/baby-announcement-party-vadodara" },
  openGraph: {
    title: `Baby Announcement Party Vadodara | Celebration`,
    description: `Host a baby announcement party in Vadodara with beautiful decorations. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/baby-announcement-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Baby Announcement Party Vadodara | Celebration`,
    description: `Host a baby announcement party in Vadodara with beautiful decorations. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
