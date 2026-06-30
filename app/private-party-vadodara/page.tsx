import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "private-party-vadodara")!;

export const metadata: Metadata = {
  title: "Private Party Vadodara | 100% Private Celebration Venue",
  description:
    "Book the best private party venue in Vadodara for birthdays, anniversaries, and proposals. 100% private rooftop & glass house setups starting ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/private-party-vadodara" },
  openGraph: {
    title: "Private Party Vadodara | 100% Private Celebration Venue",
    description:
      "Book the best private party venue in Vadodara for birthdays, anniversaries, and proposals. 100% private rooftop & glass house setups starting ₹4,700.",
    url: "https://friendsfactorycafe.com/private-party-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Party Vadodara | 100% Private Celebration Venue",
    description:
      "Book the best private party venue in Vadodara for birthdays, anniversaries, and proposals. 100% private rooftop & glass house setups starting ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
