// ✅ SERVER COMPONENT — No 'use client'. Fully SSR for Google indexing.
import Link from "next/link";

export interface FAQ { q: string; a: string }
export interface PageData {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  canonical: string;
  intro: string;
  highlights: string[];
  sections: { heading: string; content: string }[];
  process: { step: string; detail: string }[];
  faqs: FAQ[];
  testimonial: { name: string; area: string; text: string; stars: number };
  cta: string;
  serviceCategory: string;
}

function Stars({ n }: { n: number }) {
  return <span aria-label={`${n} stars`}>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

export default function NewSEOPage({ data }: { data: PageData }) {
  const BASE = "https://friendsfactorycafe.com";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBizSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Friends Factory Cafe",
    description: data.metaDesc,
    url: data.canonical,
    telephone: "+91-7487888730",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa, Sevasi - Canal Rd, Gotri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "391101",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 22.3219, longitude: 73.1682 },
    openingHours: "Mo-Su 12:00-23:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "320" },
    image: `${BASE}/og-image.png`,
    sameAs: [
      "https://www.instagram.com/friendsfactorycafe/",
      "https://www.facebook.com/friendsfactorycafe/",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: data.serviceCategory, item: `${BASE}/${data.slug.split("-vadodara")[0]}` },
      { "@type": "ListItem", position: 3, name: data.h1, item: data.canonical },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-amber-50 border-b border-amber-100 px-4 py-2 text-sm text-amber-700">
        <ol className="flex flex-wrap gap-1 max-w-5xl mx-auto">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li className="mx-1 text-amber-400">/</li>
          <li><Link href="/services" className="hover:underline">{data.serviceCategory}</Link></li>
          <li className="mx-1 text-amber-400">/</li>
          <li className="font-medium text-amber-900">{data.h1}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-200 text-sm font-medium uppercase tracking-widest mb-3">Friends Factory Cafe · Vadodara</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{data.h1}</h1>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">{data.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/917487888730"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
            >
              Book on WhatsApp
            </Link>
            <Link
              href="/book-now"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-amber-700 transition-colors"
            >
              View Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Friends Factory Cafe?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.highlights.map((h, i) => (
              <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">{i + 1}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Context */}
      {data.sections && data.sections.length > 0 && (
        <section className="py-10 px-4 bg-amber-50 space-y-8">
          <div className="max-w-3xl mx-auto">
            {data.sections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? "mt-8" : ""}>
                <h2 className="text-2xl font-bold text-amber-800 mb-4">{section.heading}</h2>
                <div className="text-gray-700 leading-relaxed text-base whitespace-pre-line">{section.content}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.process.map((p, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">{i + 1}</div>
                <h3 className="font-bold text-gray-800 mb-2">{p.step}</h3>
                <p className="text-gray-600 text-sm">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-amber-800 mb-6">What Our Guests Say</h2>
          <blockquote className="bg-white rounded-2xl shadow-md p-8 border border-amber-100">
            <p className="text-amber-400 text-2xl mb-3"><Stars n={data.testimonial.stars} /></p>
            <p className="text-gray-700 italic text-base leading-relaxed mb-4">"{data.testimonial.text}"</p>
            <cite className="not-italic">
              <span className="font-bold text-gray-800">{data.testimonial.name}</span>
              <span className="text-gray-500 text-sm"> · {data.testimonial.area}</span>
            </cite>
          </blockquote>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="cursor-pointer flex items-center justify-between p-5 font-semibold text-gray-800 hover:bg-amber-50 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-amber-500 font-bold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-amber-600 to-orange-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.cta}</h2>
          <p className="text-amber-100 mb-6">📍 Gotri, Vadodara &nbsp;|&nbsp; ☎ +91 74878 88730 &nbsp;|&nbsp; Starting ₹4,700</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/917487888730"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
            >
              📲 WhatsApp Us Now
            </Link>
            <Link
              href="/packages"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-amber-700 transition-colors"
            >
              See All Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
