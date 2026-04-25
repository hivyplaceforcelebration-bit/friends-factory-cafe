import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("rooftop-experience")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-party-venue-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Party Venue Vadodara | Private Events & Celebrations`,
  description: `Find the best rooftop party venue in Vadodara. Perfect for intimate parties, couple celebrations, and private events with stunning city skyline views.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-party-venue-vadodara" },
  openGraph: {
    title: `Rooftop Party Venue Vadodara | Private Events & Celebrations`,
    description: `Find the best rooftop party venue in Vadodara. Perfect for intimate parties, couple celebrations, and private events with stunning city skyline views.`,
    url: "https://friendsfactorycafe.com/rooftop-party-venue-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Party Venue Vadodara | Private Events & Celebrations`,
    description: `Find the best rooftop party venue in Vadodara. Perfect for intimate parties, couple celebrations, and private events with stunning city skyline views.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
