import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("nyay-mandir-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Nyay Mandir, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Nyay Mandir? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Nyay Mandir, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration nyay mandir",
    "candlelight dinner nyay mandir",
    "birthday surprise nyay mandir vadodara",
    "couple cafe near nyay mandir",
    "anniversary celebration nyay mandir",
    "friends factory cafe nyay mandir",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/nyay-mandir-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Nyay Mandir, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Nyay Mandir, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/nyay-mandir-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Nyay Mandir, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Nyay Mandir, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
