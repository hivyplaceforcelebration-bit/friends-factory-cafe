import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("tandalja-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Tandalja, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Tandalja? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Tandalja, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration tandalja",
    "candlelight dinner tandalja",
    "birthday surprise tandalja vadodara",
    "couple cafe near tandalja",
    "anniversary celebration tandalja",
    "friends factory cafe tandalja",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/tandalja-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Tandalja, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Tandalja, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/tandalja-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Tandalja, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Tandalja, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
