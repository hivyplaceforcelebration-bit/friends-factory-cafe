import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-room-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Room Decoration Vadodara | Balloon & Flower Setup`,
  description: `Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples. Private rooftop venue awaits!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-room-decoration-vadodara" },
  openGraph: {
    title: `Birthday Room Decoration Vadodara | Balloon & Flower Setup`,
    description: `Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples. Private rooftop venue awaits!`,
    url: "https://friendsfactorycafe.com/birthday-room-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Room Decoration Vadodara | Balloon & Flower Setup`,
    description: `Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples. Private rooftop venue awaits!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
