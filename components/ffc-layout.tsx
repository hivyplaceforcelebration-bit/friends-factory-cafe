'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/ffc-config';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Packages', href: '/packages' },
  { name: 'Menu', href: '/menu' },
  { name: 'About us', href: '/about' },
  { name: 'Virtual Tour', href: '/virtual-tour' },
  { name: 'Contact us', href: '/contact' },
];

const serviceLinks = [
  { name: 'Birthday Surprise', href: '/birthday-surprise' },
  { name: 'Anniversary', href: '/anniversary-celebration' },
  { name: 'Proposal', href: '/proposal' },
  { name: 'Candlelight Dinner', href: '/candlelight-dinner' },
  { name: 'Surprise Date', href: '/surprise-date' },
  { name: 'Pre-Wedding Shoot', href: '/pre-wedding-shoot' },
  { name: 'Baby Moments', href: '/baby-moments' },
  { name: "Valentine's Week", href: '/valentines-week' },
];

export function FFCHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-amber-100">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold text-amber-700 leading-tight">
              Friends
            </span>
            <span className="text-xl md:text-2xl font-serif font-bold text-amber-700 leading-tight">
              Factory
            </span>
            <span className="text-xl md:text-2xl font-serif font-bold text-amber-700 leading-tight">
              Cafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Vadodara location badge - desktop */}
            <a
              href="https://maps.google.com/?q=Friends+Factory+Cafe+Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-amber-100 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 fill-amber-500 text-amber-600" />
              Vadodara
            </a>
          </div>

          {/* Vadodara location badge - mobile only */}
          <a
            href="https://maps.google.com/?q=Friends+Factory+Cafe+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1 rounded-full text-xs font-bold hover:bg-amber-100 transition-colors"
          >
            <MapPin className="h-3 w-3 fill-amber-500 text-amber-600" />
            Vadodara
          </a>

          {/* Right Side - Phone & Actions */}
          <div className="flex items-center gap-4">
            {/* Phone CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Heart className="h-8 w-8 text-amber-500 fill-amber-500" />
              <div className="text-right">
                <p className="text-xs text-gray-500">Call and Book in Minutes</p>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg font-bold text-amber-600 hover:text-amber-700"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="font-serif font-bold text-amber-700 text-xl">
                      Friends Factory Cafe
                    </span>
                  </div>
                  
                  <nav className="flex-1 py-6">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    

                  </nav>
                  
                  <div className="border-t py-4">
                    <a 
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

// Curated footer keyword links — 18 highest-value pages only (no link-farm signal)
const footerKeywords = [
  { slug: "candlelight-dinner-vadodara", title: "Candlelight Dinner" },
  { slug: "birthday-party-vadodara", title: "Birthday Party" },
  { slug: "date-night-vadodara", title: "Date Night" },
  { slug: "couple-cafe-vadodara", title: "Couple Cafe" },
  { slug: "glass-house-cafe-vadodara", title: "Glass House Cafe" },
  { slug: "romantic-cafe-vadodara", title: "Romantic Cafe" },
  { slug: "best-cafe-vadodara", title: "Best Cafe Vadodara" },
  { slug: "birthday-surprise-for-boyfriend-vadodara", title: "Birthday Surprise for Boyfriend" },
  { slug: "birthday-surprise-for-girlfriend-vadodara", title: "Birthday Surprise for Girlfriend" },
  { slug: "proposal-setup-vadodara", title: "Proposal Setup" },
  { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner" },
  { slug: "anniversary-dinner-vadodara", title: "Anniversary Dinner" },
  { slug: "pre-wedding-photoshoot-vadodara", title: "Pre-Wedding Photoshoot" },
  { slug: "surprise-birthday-party-vadodara", title: "Surprise Birthday Party" },
  { slug: "private-proposal-vadodara", title: "Private Proposal" },
  { slug: "valentines-day-celebration-vadodara", title: "Valentine's Day" },
  { slug: "surprise-date-for-girlfriend-vadodara", title: "Surprise Date" },
  { slug: "rooftop-date-vadodara", title: "Rooftop Date" },
];

// Curated footer area links — top 10 areas only
const footerAreas = [
  { slug: "alkapuri-vadodara", name: "Alkapuri" },
  { slug: "akota-vadodara", name: "Akota" },
  { slug: "fatehgunj-vadodara", name: "Fatehgunj" },
  { slug: "sayajigunj-vadodara", name: "Sayajigunj" },
  { slug: "vasna-vadodara", name: "Vasna" },
  { slug: "gotri-vadodara", name: "Gotri" },
  { slug: "subhanpura-vadodara", name: "Subhanpura" },
  { slug: "manjalpur-vadodara", name: "Manjalpur" },
  { slug: "waghodia-road-vadodara", name: "Waghodia Road" },
  { slug: "race-course-vadodara", name: "Race Course" },
];

export function FFCFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
              Friends Factory Cafe
            </h3>
            <p className="text-gray-400 mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span className="text-gray-300">Couples Only Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-amber-400 font-medium hover:text-amber-300"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-amber-400 hover:text-amber-300"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-gray-300">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Links — 18 curated keywords (no expand/collapse — clean for Google) */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            Popular Services in Vadodara
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerKeywords.map((kw) => (
              <Link
                key={kw.slug}
                href={`/${kw.slug}`}
                className="text-xs text-gray-500 hover:text-amber-400 transition-colors"
              >
                {kw.title}
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block mt-3 text-xs text-amber-500 hover:text-amber-400 transition-colors"
          >
            → View All Services
          </Link>
        </div>

        {/* SEO Links — 10 curated areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            Areas We Serve in Vadodara
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footerAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="text-xs text-gray-500 hover:text-amber-400 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <Link
            href="/areas"
            className="inline-block mt-3 text-xs text-amber-500 hover:text-amber-400 transition-colors"
          >
            → View All Areas
          </Link>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Friends Factory Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
