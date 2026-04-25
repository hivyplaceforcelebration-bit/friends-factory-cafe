import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-balloon-decoration-vadodara")!;

export const metadata: Metadata = {
  title: `Birthday Balloon Decoration Vadodara | Creative Setups`,
  description: `Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more. Make every moment count!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-balloon-decoration-vadodara" },
  openGraph: {
    title: `Birthday Balloon Decoration Vadodara | Creative Setups`,
    description: `Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more. Make every moment count!`,
    url: "https://friendsfactorycafe.com/birthday-balloon-decoration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Birthday Balloon Decoration Vadodara | Creative Setups`,
    description: `Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more. Make every moment count!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
