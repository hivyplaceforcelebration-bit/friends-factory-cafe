import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "surprise-birthday-party-vadodara")!;

export const metadata: Metadata = {
  title: `Surprise Birthday Party Vadodara | Private Celebration`,
  description: `Plan a surprise birthday party in Vadodara with romantic setup and private ambiance. Private rooftop venue. Book now for an exclusive experience!`,
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-birthday-party-vadodara" },
  openGraph: {
    title: `Surprise Birthday Party Vadodara | Private Celebration`,
    description: `Plan a surprise birthday party in Vadodara with romantic setup and private ambiance. Private rooftop venue. Book now for an exclusive experience!`,
    url: "https://friendsfactorycafe.com/surprise-birthday-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Surprise Birthday Party Vadodara | Private Celebration`,
    description: `Plan a surprise birthday party in Vadodara with romantic setup and private ambiance. Private rooftop venue. Book now for an exclusive experience!`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
