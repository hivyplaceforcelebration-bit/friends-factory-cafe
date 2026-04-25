import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCBlogPostPage from '@/components/ffc-blog-post-page';
import { getBlogBySlug, blogPosts } from '@/lib/ffc-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Friends Factory Cafe',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://friendsfactorycafe.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://friendsfactorycafe.com/blog/${post.slug}`,
      siteName: 'Friends Factory Cafe',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "url": `https://friendsfactorycafe.com/blog/${post.slug}`,
        "image": post.coverImage,
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
          "@type": "Organization",
          "name": "Friends Factory Cafe",
          "url": "https://friendsfactorycafe.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Friends Factory Cafe",
          "url": "https://friendsfactorycafe.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://friendsfactorycafe.com/og-image.png"
          }
        },
        "keywords": post.tags.join(', '),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://friendsfactorycafe.com/blog/${post.slug}`
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://friendsfactorycafe.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://friendsfactorycafe.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://friendsfactorycafe.com/blog/${post.slug}` }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FFCBlogPostPage post={post} />
    </>
  );
}
