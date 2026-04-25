import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("old-padra-road-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Old Padra Road, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Old Padra Road? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Old Padra Road, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration old padra road",
    "candlelight dinner old padra road",
    "birthday surprise old padra road vadodara",
    "couple cafe near old padra road",
    "anniversary celebration old padra road",
    "friends factory cafe old padra road",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/old-padra-road-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Old Padra Road, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Old Padra Road, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/old-padra-road-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Old Padra Road, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Old Padra Road, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
