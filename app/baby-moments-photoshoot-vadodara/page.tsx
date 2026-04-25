import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "baby-moments-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Baby Moments Photoshoot Vadodara | Capture Joy`,
  description: `Capture baby moments with photoshoot in Vadodara. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/baby-moments-photoshoot-vadodara" },
  openGraph: {
    title: `Baby Moments Photoshoot Vadodara | Capture Joy`,
    description: `Capture baby moments with photoshoot in Vadodara. Make every moment count!`,
    url: "https://friendsfactorycafe.com/baby-moments-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Baby Moments Photoshoot Vadodara | Capture Joy`,
    description: `Capture baby moments with photoshoot in Vadodara. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
