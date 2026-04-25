import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-birthday-celebration-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Birthday Celebration Vadodara | Private Sky Venue`,
  description: `Celebrate birthdays on a beautiful rooftop in Vadodara. Enjoy private rooftop venue with decorations, cake, and magical city views.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-birthday-celebration-vadodara" },
  openGraph: {
    title: `Rooftop Birthday Celebration Vadodara | Private Sky Venue`,
    description: `Celebrate birthdays on a beautiful rooftop in Vadodara. Enjoy private rooftop venue with decorations, cake, and magical city views.`,
    url: "https://friendsfactorycafe.com/rooftop-birthday-celebration-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Birthday Celebration Vadodara | Private Sky Venue`,
    description: `Celebrate birthdays on a beautiful rooftop in Vadodara. Enjoy private rooftop venue with decorations, cake, and magical city views.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
