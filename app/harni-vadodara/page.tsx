import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("harni-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Harni, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Harni? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Harni, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration harni",
    "candlelight dinner harni",
    "birthday surprise harni vadodara",
    "couple cafe near harni",
    "anniversary celebration harni",
    "friends factory cafe harni",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/harni-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Harni, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Harni, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/harni-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Harni, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Harni, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
