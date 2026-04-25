import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("ajwa-road-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Ajwa Road, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Ajwa Road? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Ajwa Road, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration ajwa road",
    "candlelight dinner ajwa road",
    "birthday surprise ajwa road vadodara",
    "couple cafe near ajwa road",
    "anniversary celebration ajwa road",
    "friends factory cafe ajwa road",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/ajwa-road-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Ajwa Road, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Ajwa Road, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/ajwa-road-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Ajwa Road, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Ajwa Road, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
