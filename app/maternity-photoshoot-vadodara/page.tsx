import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "maternity-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Maternity Photoshoot Vadodara | Beautiful Backdrop`,
  description: `Book a maternity photoshoot location in Vadodara with beautiful backdrop. Create magical memories now!`,
  alternates: { canonical: "https://friendsfactorycafe.com/maternity-photoshoot-vadodara" },
  openGraph: {
    title: `Maternity Photoshoot Vadodara | Beautiful Backdrop`,
    description: `Book a maternity photoshoot location in Vadodara with beautiful backdrop. Create magical memories now!`,
    url: "https://friendsfactorycafe.com/maternity-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Maternity Photoshoot Vadodara | Beautiful Backdrop`,
    description: `Book a maternity photoshoot location in Vadodara with beautiful backdrop. Create magical memories now!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
