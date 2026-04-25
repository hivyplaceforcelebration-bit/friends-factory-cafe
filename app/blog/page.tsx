import { Metadata } from 'next';
import FFCBlogPage from '@/components/ffc-blog-page';

export const metadata: Metadata = {
  title: 'Blog | Candle Light Dinner Ideas & Birthday Surprise Tips in Vadodara',
  description: 'Discover candle light dinner ideas, birthday surprise tips, anniversary celebration guides & romantic date night inspiration in Vadodara.',
  keywords: 'celebration blog, birthday ideas vadodara, romantic date tips, proposal ideas, anniversary celebration guide',
  alternates: {
    canonical: 'https://friendsfactorycafe.com/blog',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "name": "Celebration Ideas & Tips | Friends Factory Cafe",
      "description": "Discover celebration tips, romantic date ideas, birthday surprise guides, and more.",
      "url": "https://friendsfactorycafe.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Friends Factory Cafe",
        "url": "https://friendsfactorycafe.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://friendsfactorycafe.com/og-image.png"
        }
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://friendsfactorycafe.com/blog" }
      ]
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCBlogPage />
    </>
  );
}
