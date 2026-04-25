import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("pre-wedding-shoot")!;
const keyword = service.keywords.find(k => k.slug === "couple-photoshoot-vadodara")!;

export const metadata: Metadata = {
  title: `Couple Photoshoot Vadodara | Beautiful Backdrops`,
  description: `Book a couple photoshoot in Vadodara with beautiful backdrops. Packages from ₹4,700.`,
  alternates: { canonical: "https://friendsfactorycafe.com/couple-photoshoot-vadodara" },
  openGraph: {
    title: `Couple Photoshoot Vadodara | Beautiful Backdrops`,
    description: `Book a couple photoshoot in Vadodara with beautiful backdrops. Packages from ₹4,700.`,
    url: "https://friendsfactorycafe.com/couple-photoshoot-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Couple Photoshoot Vadodara | Beautiful Backdrops`,
    description: `Book a couple photoshoot in Vadodara with beautiful backdrops. Packages from ₹4,700.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
