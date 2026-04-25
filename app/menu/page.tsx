import { Metadata } from 'next';
import FFCMenuPage from '@/components/ffc-menu-page';

export const metadata: Metadata = {
  title: 'Menu | Romantic Dinner & Celebration Food Menu in Vadodara',
  description: 'Explore our curated menu for candle light dinners, birthday surprises & romantic date nights in Vadodara. Welcome drinks, cheese fondue, snacks & desserts included in celebration packages.',
  keywords: 'friends factory cafe menu, romantic dinner menu vadodara, candlelight dinner food, couple cafe menu',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/menu',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MenuPage",
      "name": "Menu | Friends Factory Cafe",
      "description": "Explore our curated café-style menu crafted for romantic dates & private celebrations.",
      "url": "https://friendsfactorycafe.com/menu",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com"
      },
      "mainEntity": {
        "@type": "Menu",
        "name": "Friends Factory Cafe Menu",
        "description": "Curated café-style menu for romantic celebrations. Includes welcome drinks, cheese fondue, snacks, and desserts.",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Welcome Drinks",
            "description": "Refreshing welcome beverages included in all packages"
          },
          {
            "@type": "MenuSection",
            "name": "Starters & Snacks",
            "description": "Delicious starters & snacks for your celebration"
          },
          {
            "@type": "MenuSection",
            "name": "Main Course",
            "description": "Hearty main course options for your romantic dinner"
          },
          {
            "@type": "MenuSection",
            "name": "Desserts",
            "description": "Sweet treats including celebration cake"
          }
        ]
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
        { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://friendsfactorycafe.com/menu" }
      ]
    }
  ]
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCMenuPage />
    </>
  );
}
