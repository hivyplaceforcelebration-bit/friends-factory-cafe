import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-party-vadodara")!;

export const metadata: Metadata = {
  title: "Birthday Party Vadodara | Best Private Rooftop Cafe Venue",
  description:
    "Plan the ultimate birthday party in Vadodara for your partner. Private rooftop balloon decoration, cake, and mocks setup starting from ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/birthday-party-vadodara" },
  openGraph: {
    title: "Birthday Party Vadodara | Best Private Rooftop Cafe Venue",
    description:
      "Plan the ultimate birthday party in Vadodara for your partner. Private rooftop balloon decoration, cake, and mocks setup starting from ₹4,700.",
    url: "https://friendsfactorycafe.com/birthday-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Party Vadodara | Best Private Rooftop Cafe Venue",
    description:
      "Plan the ultimate birthday party in Vadodara for your partner. Private rooftop balloon decoration, cake, and mocks setup starting from ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
