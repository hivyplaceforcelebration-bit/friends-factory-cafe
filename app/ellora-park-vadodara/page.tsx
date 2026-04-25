import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("ellora-park-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Ellora Park, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Ellora Park? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Ellora Park, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration ellora park",
    "candlelight dinner ellora park",
    "birthday surprise ellora park vadodara",
    "couple cafe near ellora park",
    "anniversary celebration ellora park",
    "friends factory cafe ellora park",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/ellora-park-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Ellora Park, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Ellora Park, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/ellora-park-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Ellora Park, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Ellora Park, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
