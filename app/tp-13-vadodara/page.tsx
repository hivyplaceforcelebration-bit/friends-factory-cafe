import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("tp-13-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in TP 13, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near TP 13? Friends Factory Cafe offers 100% private rooftop celebrations for couples in TP 13, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration tp 13",
    "candlelight dinner tp 13",
    "birthday surprise tp 13 vadodara",
    "couple cafe near tp 13",
    "anniversary celebration tp 13",
    "friends factory cafe tp 13",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/tp-13-vadodara" },
  openGraph: {
    title: "Romantic Celebration in TP 13, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in TP 13, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/tp-13-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in TP 13, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near TP 13, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
