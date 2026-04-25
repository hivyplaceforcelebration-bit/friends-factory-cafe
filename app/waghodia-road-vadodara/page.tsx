import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("waghodia-road-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Waghodia Road, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Waghodia Road? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Waghodia Road, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration waghodia road",
    "candlelight dinner waghodia road",
    "birthday surprise waghodia road vadodara",
    "couple cafe near waghodia road",
    "anniversary celebration waghodia road",
    "friends factory cafe waghodia road",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/waghodia-road-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Waghodia Road, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Waghodia Road, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/waghodia-road-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Waghodia Road, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Waghodia Road, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
