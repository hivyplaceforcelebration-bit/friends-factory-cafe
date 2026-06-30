import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "couple-cafe-vadodara")!;

export const metadata: Metadata = {
  title: "Couple Cafe Vadodara | Private & Cozy Couple-Friendly Venue",
  description:
    "Discover the best couple cafe in Vadodara. 100% private glass house and rooftop seating for intimate dates, birthdays, and anniversaries.",
  alternates: { canonical: "https://friendsfactorycafe.com/couple-cafe-vadodara" },
  openGraph: {
    title: "Couple Cafe Vadodara | Private & Cozy Couple-Friendly Venue",
    description:
      "Discover the best couple cafe in Vadodara. 100% private glass house and rooftop seating for intimate dates, birthdays, and anniversaries.",
    url: "https://friendsfactorycafe.com/couple-cafe-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couple Cafe Vadodara | Private & Cozy Couple-Friendly Venue",
    description:
      "Discover the best couple cafe in Vadodara. 100% private glass house and rooftop seating for intimate dates, birthdays, and anniversaries.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
