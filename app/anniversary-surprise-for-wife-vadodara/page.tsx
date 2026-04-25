import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-surprise-for-wife-vadodara")!;

export const metadata: Metadata = {
  title: `Anniversary Surprise for Wife Vadodara | Make Her Feel Special`,
  description: `Create a beautiful anniversary surprise for your wife in Vadodara with elegant decorations and romantic ambiance.`,
  alternates: { canonical: "https://friendsfactorycafe.com/anniversary-surprise-for-wife-vadodara" },
  openGraph: {
    title: `Anniversary Surprise for Wife Vadodara | Make Her Feel Special`,
    description: `Create a beautiful anniversary surprise for your wife in Vadodara with elegant decorations and romantic ambiance.`,
    url: "https://friendsfactorycafe.com/anniversary-surprise-for-wife-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "Friends Factory Cafe",
    images: [{ url: "https://friendsfactorycafe.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Anniversary Surprise for Wife Vadodara | Make Her Feel Special`,
    description: `Create a beautiful anniversary surprise for your wife in Vadodara with elegant decorations and romantic ambiance.`,
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
