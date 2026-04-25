import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "couple-date-vadodara")!;

export const metadata: Metadata = {
  title: `Couple Date Vadodara | Romantic Evening`,
  description: `Enjoy a couple date experience in Vadodara with romantic ambiance. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/couple-date-vadodara" },
  openGraph: {
    title: `Couple Date Vadodara | Romantic Evening`,
    description: `Enjoy a couple date experience in Vadodara with romantic ambiance. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/couple-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Couple Date Vadodara | Romantic Evening`,
    description: `Enjoy a couple date experience in Vadodara with romantic ambiance. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
