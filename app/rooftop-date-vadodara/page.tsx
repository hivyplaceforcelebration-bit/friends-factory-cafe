import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("surprise-date")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-date-vadodara")!;

export const metadata: Metadata = {
  title: `Rooftop Date Vadodara | City Views`,
  description: `Experience a rooftop date in Vadodara with stunning city views. All-inclusive packages available.`,
  alternates: { canonical: "https://friendsfactorycafe.com/rooftop-date-vadodara" },
  openGraph: {
    title: `Rooftop Date Vadodara | City Views`,
    description: `Experience a rooftop date in Vadodara with stunning city views. All-inclusive packages available.`,
    url: "https://friendsfactorycafe.com/rooftop-date-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooftop Date Vadodara | City Views`,
    description: `Experience a rooftop date in Vadodara with stunning city views. All-inclusive packages available.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
