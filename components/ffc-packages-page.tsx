'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { packages, formatPrice } from '@/lib/ffc-config';

export default function FFCPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 8 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 8 stunning romantic setups designed to make your celebration unforgettable
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`} className="group">
                <Card className="h-full rounded-2xl md:rounded-[28px] overflow-hidden bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_45px_-10px_rgba(217,119,6,0.24),inset_0_1.5px_0_rgba(255,255,255,1)] hover:border-white hover:-translate-y-2 transition-all duration-400 ease-out flex flex-col justify-between">
                  {/* Image */}
                  <div className="aspect-[4/3] md:aspect-square bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden rounded-t-[23px] md:rounded-t-[27px]">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    {/* Glossy specular lens sheen */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 via-white/5 to-transparent pointer-events-none z-10" />

                    {/* Setup Number highlighted properly */}
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-extrabold text-xs md:text-sm px-3.5 py-1.5 rounded-full shadow-[0_4px_14px_rgba(217,119,6,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] border border-amber-300/50 z-10 flex items-center gap-1.5 tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      Setup {index + 1}
                    </span>

                    {/* Setup 1 Royal Red Special Inclusions */}
                    {pkg.slug === "royal-red" && (
                      <span className="absolute bottom-3 left-3 right-3 bg-stone-900/90 backdrop-blur-md text-amber-200 border border-amber-400/40 shadow-[0_4px_14px_rgba(0,0,0,0.3)] font-semibold text-[11px] md:text-xs px-3 py-1.5 rounded-full z-10 flex items-center justify-center gap-1.5 text-center">
                        🍾 Champagne & 🎂 Cake Included
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-4 md:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="font-serif font-bold text-base md:text-xl mb-1.5 group-hover:text-amber-700 transition-colors line-clamp-1 text-stone-900 tracking-tight">
                        {pkg.name} {pkg.emoji}
                      </h2>
                      <p className="text-stone-600 text-xs md:text-sm line-clamp-2 mb-3 leading-relaxed">
                        {pkg.shortDescription}
                      </p>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-between pt-3 border-t border-amber-100/70 mt-auto">
                      <span className="text-lg md:text-2xl font-bold font-display text-amber-700">
                        {formatPrice(pkg.price)}
                      </span>
                      <span className="text-xs md:text-sm font-bold text-amber-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Book Experience →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Package</h2>
            <p className="text-gray-600">All our packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your evening" },
              { icon: "🍰", title: "Celebration Cake", desc: "Complimentary cake in select packages" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies throughout" },
              { icon: "🕯️", title: "Candle Setup", desc: "Warm candlelight ambiance" },
              { icon: "🎈", title: "Decorations", desc: "Beautiful thematic decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
