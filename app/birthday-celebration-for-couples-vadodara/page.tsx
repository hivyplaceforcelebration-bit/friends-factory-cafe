import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-celebration-for-couples-vadodara")!;

export const metadata: Metadata = {
  title: `Couple Birthday Celebration Vadodara | Private Venue`,
  description: `Celebrate your special day as a couple in Vadodara with exclusive birthday packages and romantic rooftop setups. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-celebration-for-couples-vadodara" },
  openGraph: {
    title: `Couple Birthday Celebration Vadodara | Private Venue`,
    description: `Celebrate your special day as a couple in Vadodara with exclusive birthday packages and romantic rooftop setups. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/birthday-celebration-for-couples-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Couple Birthday Celebration Vadodara | Private Venue`,
    description: `Celebrate your special day as a couple in Vadodara with exclusive birthday packages and romantic rooftop setups. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
