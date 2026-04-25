import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("race-course-vadodara")!;

export const metadata: Metadata = {
  title: "Romantic Celebration in Race Course, Vadodara | Friends Factory Cafe",
  description: "Planning a birthday surprise, candlelight dinner or anniversary near Race Course? Friends Factory Cafe offers 100% private rooftop celebrations for couples in Race Course, Vadodara. All-inclusive packages from ₹4,700.",
  keywords: [
    "romantic celebration race course",
    "candlelight dinner race course",
    "birthday surprise race course vadodara",
    "couple cafe near race course",
    "anniversary celebration race course",
    "friends factory cafe race course",
  ],
  alternates: { canonical: "https://friendsfactorycafe.com/race-course-vadodara" },
  openGraph: {
    title: "Romantic Celebration in Race Course, Vadodara | Friends Factory Cafe",
    description: "Premium private rooftop celebration venue for couples in Race Course, Vadodara. Birthday surprises, candlelight dinners & more from ₹4,700!",
    url: "https://friendsfactorycafe.com/race-course-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Celebration in Race Course, Vadodara | Friends Factory Cafe",
    description: "Book romantic celebrations near Race Course, Vadodara. Private rooftop venue with stunning setups from ₹4,700.",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
