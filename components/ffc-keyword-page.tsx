'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import SEOInternalLinking from '@/components/seo-internal-linking';
import { ServiceCategory, ServiceKeyword, packages, vadodaraAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateKeywordPageContent } from '@/lib/ffc-unique-content';
import { getKeywordContent, UniqueKeywordContent } from '@/lib/ffc-keyword-content';
import { findExpandedKeyword, getRelatedExpandedKeywords } from '@/lib/keyword-expansion';
import { generateExpandedContent } from '@/lib/expanded-content';

// ─── Color-scheme map (all class strings must be literal for Tailwind) ──────
const SCHEME = {
  amber:   { hero: 'bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700',   accentBg: 'bg-amber-50',   accentText: 'text-amber-600',   checkText: 'text-amber-600',   badgeCls: 'bg-amber-100 text-amber-700 border-amber-200',   ctaGrad: 'bg-gradient-to-br from-amber-600 to-orange-600',   btnCls: 'bg-amber-600 hover:bg-amber-700 text-white',   hoverBorder: 'hover:border-amber-300',   hoverText: 'group-hover:text-amber-600',   areaLink: 'bg-amber-50 hover:bg-amber-600 hover:text-white border-amber-200' },
  purple:  { hero: 'bg-gradient-to-br from-purple-700 via-violet-600 to-purple-800',  accentBg: 'bg-purple-50',  accentText: 'text-purple-600',  checkText: 'text-purple-600',  badgeCls: 'bg-purple-100 text-purple-700 border-purple-200',  ctaGrad: 'bg-gradient-to-br from-purple-700 to-violet-600',  btnCls: 'bg-purple-600 hover:bg-purple-700 text-white',  hoverBorder: 'hover:border-purple-300',  hoverText: 'group-hover:text-purple-600',  areaLink: 'bg-purple-50 hover:bg-purple-600 hover:text-white border-purple-200' },
  rose:    { hero: 'bg-gradient-to-br from-rose-600 via-pink-500 to-rose-700',        accentBg: 'bg-rose-50',    accentText: 'text-rose-600',    checkText: 'text-rose-600',    badgeCls: 'bg-rose-100 text-rose-700 border-rose-200',       ctaGrad: 'bg-gradient-to-br from-rose-600 to-pink-600',     btnCls: 'bg-rose-600 hover:bg-rose-700 text-white',     hoverBorder: 'hover:border-rose-300',    hoverText: 'group-hover:text-rose-600',    areaLink: 'bg-rose-50 hover:bg-rose-600 hover:text-white border-rose-200' },
  orange:  { hero: 'bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700',  accentBg: 'bg-orange-50',  accentText: 'text-orange-600',  checkText: 'text-orange-600',  badgeCls: 'bg-orange-100 text-orange-700 border-orange-200',  ctaGrad: 'bg-gradient-to-br from-orange-600 to-amber-600',   btnCls: 'bg-orange-600 hover:bg-orange-700 text-white',  hoverBorder: 'hover:border-orange-300',  hoverText: 'group-hover:text-orange-600',  areaLink: 'bg-orange-50 hover:bg-orange-600 hover:text-white border-orange-200' },
  indigo:  { hero: 'bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700', accentBg: 'bg-indigo-50',  accentText: 'text-indigo-600',  checkText: 'text-indigo-600',  badgeCls: 'bg-indigo-100 text-indigo-700 border-indigo-200',  ctaGrad: 'bg-gradient-to-br from-indigo-700 to-purple-600',  btnCls: 'bg-indigo-600 hover:bg-indigo-700 text-white',  hoverBorder: 'hover:border-indigo-300',  hoverText: 'group-hover:text-indigo-600',  areaLink: 'bg-indigo-50 hover:bg-indigo-600 hover:text-white border-indigo-200' },
  teal:    { hero: 'bg-gradient-to-br from-teal-600 via-emerald-500 to-teal-700',    accentBg: 'bg-teal-50',    accentText: 'text-teal-600',    checkText: 'text-teal-600',    badgeCls: 'bg-teal-100 text-teal-700 border-teal-200',       ctaGrad: 'bg-gradient-to-br from-teal-600 to-emerald-600',   btnCls: 'bg-teal-600 hover:bg-teal-700 text-white',     hoverBorder: 'hover:border-teal-300',    hoverText: 'group-hover:text-teal-600',    areaLink: 'bg-teal-50 hover:bg-teal-600 hover:text-white border-teal-200' },
  green:   { hero: 'bg-gradient-to-br from-green-700 via-emerald-600 to-green-800',  accentBg: 'bg-green-50',   accentText: 'text-green-600',   checkText: 'text-green-600',   badgeCls: 'bg-green-100 text-green-700 border-green-200',    ctaGrad: 'bg-gradient-to-br from-green-700 to-emerald-600',  btnCls: 'bg-green-600 hover:bg-green-700 text-white',    hoverBorder: 'hover:border-green-300',   hoverText: 'group-hover:text-green-600',   areaLink: 'bg-green-50 hover:bg-green-600 hover:text-white border-green-200' },
  blue:    { hero: 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700',     accentBg: 'bg-blue-50',    accentText: 'text-blue-600',    checkText: 'text-blue-600',    badgeCls: 'bg-blue-100 text-blue-700 border-blue-200',       ctaGrad: 'bg-gradient-to-br from-blue-700 to-indigo-600',   btnCls: 'bg-blue-600 hover:bg-blue-700 text-white',     hoverBorder: 'hover:border-blue-300',    hoverText: 'group-hover:text-blue-600',    areaLink: 'bg-blue-50 hover:bg-blue-600 hover:text-white border-blue-200' },
  emerald: { hero: 'bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-800', accentBg: 'bg-emerald-50', accentText: 'text-emerald-600', checkText: 'text-emerald-600', badgeCls: 'bg-emerald-100 text-emerald-700 border-emerald-200', ctaGrad: 'bg-gradient-to-br from-emerald-700 to-teal-600', btnCls: 'bg-emerald-600 hover:bg-emerald-700 text-white', hoverBorder: 'hover:border-emerald-300', hoverText: 'group-hover:text-emerald-600', areaLink: 'bg-emerald-50 hover:bg-emerald-600 hover:text-white border-emerald-200' },
  pink:    { hero: 'bg-gradient-to-br from-pink-600 via-rose-500 to-pink-700',       accentBg: 'bg-pink-50',    accentText: 'text-pink-600',    checkText: 'text-pink-600',    badgeCls: 'bg-pink-100 text-pink-700 border-pink-200',       ctaGrad: 'bg-gradient-to-br from-pink-600 to-rose-600',     btnCls: 'bg-pink-600 hover:bg-pink-700 text-white',     hoverBorder: 'hover:border-pink-300',    hoverText: 'group-hover:text-pink-600',    areaLink: 'bg-pink-50 hover:bg-pink-600 hover:text-white border-pink-200' },
  sky:     { hero: 'bg-gradient-to-br from-sky-600 via-blue-500 to-sky-700',         accentBg: 'bg-sky-50',     accentText: 'text-sky-600',     checkText: 'text-sky-600',     badgeCls: 'bg-sky-100 text-sky-700 border-sky-200',          ctaGrad: 'bg-gradient-to-br from-sky-600 to-blue-600',      btnCls: 'bg-sky-600 hover:bg-sky-700 text-white',       hoverBorder: 'hover:border-sky-300',     hoverText: 'group-hover:text-sky-600',     areaLink: 'bg-sky-50 hover:bg-sky-600 hover:text-white border-sky-200' },
  cyan:    { hero: 'bg-gradient-to-br from-cyan-600 via-sky-500 to-cyan-700',        accentBg: 'bg-cyan-50',    accentText: 'text-cyan-600',    checkText: 'text-cyan-600',    badgeCls: 'bg-cyan-100 text-cyan-700 border-cyan-200',       ctaGrad: 'bg-gradient-to-br from-cyan-600 to-sky-600',      btnCls: 'bg-cyan-600 hover:bg-cyan-700 text-white',     hoverBorder: 'hover:border-cyan-300',    hoverText: 'group-hover:text-cyan-600',    areaLink: 'bg-cyan-50 hover:bg-cyan-600 hover:text-white border-cyan-200' },
  violet:  { hero: 'bg-gradient-to-br from-violet-700 via-purple-600 to-violet-800', accentBg: 'bg-violet-50',  accentText: 'text-violet-600',  checkText: 'text-violet-600',  badgeCls: 'bg-violet-100 text-violet-700 border-violet-200',  ctaGrad: 'bg-gradient-to-br from-violet-700 to-purple-600',  btnCls: 'bg-violet-600 hover:bg-violet-700 text-white',  hoverBorder: 'hover:border-violet-300',  hoverText: 'group-hover:text-violet-600',  areaLink: 'bg-violet-50 hover:bg-violet-600 hover:text-white border-violet-200' },
  red:     { hero: 'bg-gradient-to-br from-red-700 via-rose-600 to-red-800',         accentBg: 'bg-red-50',     accentText: 'text-red-600',     checkText: 'text-red-600',     badgeCls: 'bg-red-100 text-red-700 border-red-200',          ctaGrad: 'bg-gradient-to-br from-red-700 to-rose-600',      btnCls: 'bg-red-600 hover:bg-red-700 text-white',       hoverBorder: 'hover:border-red-300',     hoverText: 'group-hover:text-red-600',     areaLink: 'bg-red-50 hover:bg-red-600 hover:text-white border-red-200' },
};
type SchemeKey = keyof typeof SCHEME;

interface KeywordPageProps {
  service: ServiceCategory;
  keyword: ServiceKeyword;
}

export default function FFCKeywordPage({ service, keyword }: KeywordPageProps) {
  // Get related packages
  const relatedPackages = packages.slice(0, 4);

  // Check if this is an expanded keyword
  const expandedKw = findExpandedKeyword(keyword.slug);

  // Get related keywords (excluding current)
  const baseRelatedKeywords = service.keywords.filter(k => k.slug !== keyword.slug).slice(0, 6);

  // For expanded keywords, also get related expanded keyword links
  const relatedExpanded = expandedKw ? getRelatedExpandedKeywords(keyword.slug, 6) : [];

  // Combine: 3 base + up to 6 expanded for expanded pages; all base for regular pages
  const relatedKeywords = expandedKw
    ? [
        ...baseRelatedKeywords.slice(0, 3).map(k => ({ slug: k.slug, title: k.title })),
        ...relatedExpanded.map(ek => ({ slug: ek.slug, title: ek.title })),
      ].slice(0, 9)
    : baseRelatedKeywords.map(k => ({ slug: k.slug, title: k.title }));

  // TRY to get truly unique handcrafted content first
  const handcraftedContent = getKeywordContent(keyword.slug);

  // For expanded keywords, use dimension-aware content; otherwise generic generator
  const generatedContent = expandedKw
    ? generateExpandedContent(expandedKw, service, keyword)
    : generateKeywordPageContent(service, keyword);

  // Pick color scheme from expanded content (fallback to amber for base pages)
  const schemeKey: SchemeKey = (generatedContent.colorScheme as SchemeKey) ?? 'amber';
  const cs = SCHEME[schemeKey] ?? SCHEME.amber;

  // Use handcrafted content if available, otherwise use generated
  const hasUniqueContent = !!handcraftedContent;

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className={`${cs.accentBg} py-4`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className={`text-gray-500 hover:${cs.accentText.replace('text-','text-')}`}>Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className={`text-gray-500 hover:${cs.accentText}`}>Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href={`/${service.slug}`} className={`text-gray-500 hover:${cs.accentText}`}>{service.name}</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className={`${cs.accentText} font-medium`}>{keyword.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${cs.hero} text-white py-8 md:py-16 lg:py-20`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {service.emoji} Friends Factory Cafe
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {keyword.h1}
              </h1>
              <p className="hidden md:block text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {hasUniqueContent ? handcraftedContent!.heroSubtitle : `Create magical ${keyword.title.toLowerCase()} moments at Friends Factory Cafe. Premium romantic celebration venue with stunning setups and unforgettable experiences.`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={keyword.title} 
                  className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="hidden md:flex mt-8 flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[7rem]">{service.emoji}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className={`lg:hidden ${cs.accentBg} py-4`}>
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={keyword.title} />
        </div>
      </section>

      {/* Packages Section - Shown Early */}
      <section className={`py-12 ${cs.accentBg}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif text-center">
            {keyword.title} Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {relatedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-100 group bg-white">
                  <div className="aspect-video relative overflow-hidden">
                    <Image src={pkg.thumbnail} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className={`font-semibold mb-1 ${cs.hoverText} transition-colors`}>
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {pkg.shortDescription}
                    </p>
                    <p className={`text-lg font-bold ${cs.accentText}`}>
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button className={cs.btnCls}>
                View All Packages <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} at Friends Factory Cafe
                </h2>
                
                {/* Introduction - from unique content */}
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {hasUniqueContent ? handcraftedContent!.introduction : generatedContent.introduction}
                </div>

                <div className={`${cs.accentBg} rounded-xl p-6 mb-8`}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className={`h-5 w-5 ${cs.accentText}`} />
                    What's Included in Your {keyword.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {(hasUniqueContent ? handcraftedContent!.features : [
                      "3 Mesmerizing Hours of Private Celebration",
                      "Welcome Drink & Celebration Cake (select packages)",
                      "Romantic Decorations & Setup",
                      "Candle-Lit Ambiance",
                      "Soft Romantic Music",
                      "Photo-Ready Backdrop",
                      "Delicious Café-Style Food",
                      "Panoramic City Views"
                    ]).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${cs.checkText} flex-shrink-0`} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic content sections */}
                {(hasUniqueContent ? handcraftedContent!.sections : generatedContent.sections).map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* Process Section - only for handcrafted content */}
                {hasUniqueContent && handcraftedContent!.process && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">How to Book Your {keyword.title}</h3>
                    <div className="space-y-4">
                      {handcraftedContent!.process.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{step.step}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-4 ${cs.accentText}`}>
                  Why Choose Friends Factory Cafe for {keyword.title}?
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {(hasUniqueContent ? handcraftedContent!.whyChooseUs : generatedContent.whyChooseUs).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 ${cs.checkText} flex-shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className={`h-5 w-5 ${cs.accentText}`} />
                    Available Time Slots
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Lunch</p>
                      <p className="text-gray-600 text-sm">12:00 PM - 3:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Evening</p>
                      <p className="text-gray-600 text-sm">4:00 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Dinner</p>
                      <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Late Night</p>
                      <p className="text-gray-600 text-sm">10:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className={`${cs.accentBg} rounded-xl p-6 mb-8`}>
                  <h3 className="text-xl font-bold mb-4">💬 What Couples Say About {keyword.title}</h3>
                  {hasUniqueContent ? (
                    <div className="space-y-3">
                      <p className="text-gray-600 italic">"{handcraftedContent!.testimonial.text}"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">— {handcraftedContent!.testimonial.name}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-600 text-sm">{handcraftedContent!.testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-600 italic whitespace-pre-line">
                      {generatedContent.testimonialContent}
                    </div>
                  )}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={keyword.title} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Keywords */}
      <section className={`py-16 ${cs.accentBg}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Related {service.name} Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedKeywords.map((kw) => (
              <Link 
                key={kw.slug}
                href={`/${kw.slug}`}
              >
                <Card className={`border-gray-100 ${cs.hoverBorder} hover:shadow-md transition-all group`}>
                  <CardContent className="p-4">
                    <h3 className={`font-medium ${cs.hoverText} transition-colors flex items-center justify-between`}>
                      {kw.title}
                      <ChevronRight className={`h-4 w-4 text-gray-400 ${cs.hoverText}`} />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className={`mb-4 ${cs.badgeCls}`}>
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-2xl font-bold mb-4 font-serif">
              {keyword.title} Across Vadodara
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {vadodaraAreas.slice(0, 12).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className={`px-4 py-2 rounded-full text-gray-700 transition-colors text-sm ${cs.areaLink}`}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 ${cs.accentBg}`}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs about {keyword.title}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {(hasUniqueContent ? handcraftedContent!.faqs : generatedContent.faqContent).map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-amber-100 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${cs.ctaGrad} text-white`}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready for Your {keyword.title}?
          </h2>
          <p className="text-white/90 mb-8 whitespace-pre-line">
            {hasUniqueContent ? handcraftedContent!.closingText : generatedContent.closingCta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton 
              pageTitle={keyword.title} 
              className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6" 
            />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${keyword.title} Gallery`} maxItems={8} />

      {/* SEO Internal Linking */}
      <SEOInternalLinking
        currentSlug={keyword.slug}
        serviceSlug={service.slug}
        pageType="keyword"
        expandedRelated={relatedExpanded.map(ek => ({ slug: ek.slug, title: ek.title }))}
      />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
