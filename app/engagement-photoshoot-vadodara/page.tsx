import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "engagement-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Engagement Photoshoot Vadodara | Beautiful Venue`,
  description: `Book an engagement photoshoot location in Vadodara with beautiful venue. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/engagement-photoshoot-vadodara" },
  openGraph: {
    title: `Engagement Photoshoot Vadodara | Beautiful Venue`,
    description: `Book an engagement photoshoot location in Vadodara with beautiful venue. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/engagement-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Engagement Photoshoot Vadodara | Beautiful Venue`,
    description: `Book an engagement photoshoot location in Vadodara with beautiful venue. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
