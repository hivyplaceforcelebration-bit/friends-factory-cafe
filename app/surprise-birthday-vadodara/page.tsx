import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "surprise-birthday-vadodara")!;

export const metadata: Metadata = {
  title: "Surprise Birthday Vadodara | Romantic Surprises for Couples",
  description:
    "Celebrate a surprise birthday in Vadodara with stunning balloon decorations, private dining, and mocktails. All-inclusive couple packages from ₹4,700.",
  alternates: { canonical: "https://friendsfactorycafe.com/surprise-birthday-vadodara" },
  openGraph: {
    title: "Surprise Birthday Vadodara | Romantic Surprises for Couples",
    description:
      "Celebrate a surprise birthday in Vadodara with stunning balloon decorations, private dining, and mocktails. All-inclusive couple packages from ₹4,700.",
    url: "https://friendsfactorycafe.com/surprise-birthday-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surprise Birthday Vadodara | Romantic Surprises for Couples",
    description:
      "Celebrate a surprise birthday in Vadodara with stunning balloon decorations, private dining, and mocktails. All-inclusive couple packages from ₹4,700.",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
