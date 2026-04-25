'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items with keyword-rich names
export const galleryItems: GalleryItem[] = [
  // Featured Images
  { type: 'image', src: '/images/gallery/rooftop-romantic-setup-vadodara-1.webp', alt: 'Romantic rooftop setup in Vadodara', title: 'Romantic Rooftop', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.webp', alt: 'Candlelight dinner in Vadodara', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-setup-vadodara-1.webp', alt: 'Romantic dinner setup Vadodara', title: 'Evening Romance', featured: false },
  { type: 'video', src: '/videos/birthday-celebration-video-vadodara-1.mp4', alt: 'Birthday celebration video Vadodara', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-decoration-vadodara-1.webp', alt: 'Birthday surprise decoration Vadodara', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-celebration-vadodara-1.webp', alt: 'Anniversary celebration Vadodara', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/videos/anniversary-celebration-video-vadodara-1.mp4', alt: 'Anniversary celebration video Vadodara', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/images/gallery/romantic-table-decoration-vadodara-1.webp', alt: 'Romantic table decoration Vadodara', title: 'Table Decor', featured: false },
  { type: 'image', src: '/images/gallery/birthday-balloon-decoration-vadodara-1.webp', alt: 'Birthday balloon decoration Vadodara', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-dinner-setup-vadodara-1.webp', alt: 'Anniversary dinner setup Vadodara', title: 'Anniversary Dinner', featured: false },
  { type: 'video', src: '/videos/rooftop-celebration-reel-vadodara-1.mp4', alt: 'Rooftop celebration reel Vadodara', title: 'Rooftop Vibes', featured: false },
  { type: 'image', src: '/images/gallery/romantic-ambiance-cafe-vadodara-1.webp', alt: 'Romantic ambiance cafe Vadodara', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/couple-celebration-vadodara-1.webp', alt: 'Couple celebration Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/evening-romantic-celebration-vadodara-1.webp', alt: 'Evening romantic celebration Vadodara', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/birthday-reel-vadodara-1.mp4', alt: 'Birthday reel Vadodara', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/images/gallery/glass-house-dinner-vadodara-1.webp', alt: 'Glass house dinner Vadodara', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/night-romantic-setup-vadodara-1.webp', alt: 'Night romantic setup Vadodara', title: 'Night Setup', featured: false },
  { type: 'video', src: '/videos/romantic-moments-reel-vadodara-1.mp4', alt: 'Romantic moments reel Vadodara', title: 'Romantic Reel', featured: false },
  { type: 'image', src: '/images/gallery/proposal-setup-vadodara-1.webp', alt: 'Proposal setup Vadodara', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/images/gallery/day-celebration-vadodara-1.webp', alt: 'Day celebration Vadodara', title: 'Day Celebration', featured: false },
  { type: 'video', src: '/videos/anniversary-dinner-video-vadodara-1.mp4', alt: 'Anniversary dinner video Vadodara', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/images/gallery/surprise-party-vadodara-1.webp', alt: 'Surprise party Vadodara', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/images/gallery/romantic-dinner-date-vadodara-1.webp', alt: 'Romantic dinner date Vadodara', title: 'Dinner Date', featured: false },
  { type: 'video', src: '/videos/birthday-surprise-video-vadodara-1.mp4', alt: 'Birthday surprise video Vadodara', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/valentines-day-celebration-vadodara-1.webp', alt: 'Valentines day celebration Vadodara', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/images/gallery/valentines-dinner-vadodara-1.webp', alt: 'Valentines dinner Vadodara', title: 'Valentine Dinner', featured: false },
  { type: 'video', src: '/videos/valentines-celebration-video-vadodara-1.mp4', alt: 'Valentines celebration video Vadodara', title: 'Valentine Video', featured: false },
  { type: 'image', src: '/images/gallery/valentines-romantic-setup-vadodara-1.webp', alt: 'Valentines romantic setup Vadodara', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-girlfriend-vadodara-1.webp', alt: 'Birthday surprise for girlfriend Vadodara', title: 'Girlfriend Surprise', featured: false },
  { type: 'video', src: '/videos/baby-moments-video-vadodara-1.mp4', alt: 'Baby moments video Vadodara', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-boyfriend-vadodara-1.webp', alt: 'Birthday surprise for boyfriend Vadodara', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/birthday-room-decoration-vadodara-1.webp', alt: 'Birthday room decoration Vadodara', title: 'Room Decoration', featured: false },
  { type: 'video', src: '/videos/pre-wedding-couple-video-vadodara-1.mp4', alt: 'Pre-wedding couple video Vadodara', title: 'Pre-Wedding Video', featured: false },
  { type: 'image', src: '/images/gallery/couple-birthday-party-vadodara-1.webp', alt: 'Couple birthday party Vadodara', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/images/gallery/surprise-date-vadodara-1.webp', alt: 'Surprise date Vadodara', title: 'Surprise Date', featured: false },
  { type: 'video', src: '/videos/pre-wedding-shoot-video-vadodara-1.mp4', alt: 'Pre-wedding shoot video Vadodara', title: 'Pre-Wedding Shoot', featured: false },
  { type: 'image', src: '/images/gallery/couple-moment-vadodara-1.webp', alt: 'Couple moment Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-photoshoot-vadodara-1.webp', alt: 'Pre-wedding photoshoot Vadodara', title: 'Pre-Wedding Photo', featured: false },
  { type: 'video', src: '/videos/romantic-dinner-video-vadodara-1.mp4', alt: 'Romantic dinner video Vadodara', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-shoot-vadodara-1.webp', alt: 'Pre-wedding shoot Vadodara', title: 'Photo Shoot', featured: false },
  { type: 'image', src: '/images/gallery/baby-shower-decoration-vadodara-1.webp', alt: 'Baby shower decoration Vadodara', title: 'Baby Shower', featured: false },
  { type: 'video', src: '/videos/proposal-video-vadodara-1.mp4', alt: 'Proposal video Vadodara', title: 'Proposal Video', featured: false },
  { type: 'image', src: '/images/gallery/baby-moments-celebration-vadodara-1.webp', alt: 'Baby moments celebration Vadodara', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-for-couples-vadodara-1.webp', alt: 'Candlelight dinner for couples Vadodara', title: 'Couple Dinner', featured: false },
  { type: 'video', src: '/videos/couple-celebration-video-vadodara-1.mp4', alt: 'Couple celebration video Vadodara', title: 'Celebration Video', featured: false },
  { type: 'image', src: '/images/gallery/rooftop-dinner-vadodara-1.webp', alt: 'Rooftop dinner Vadodara', title: 'Rooftop Dinner', featured: false },
  { type: 'image', src: '/images/gallery/private-dining-vadodara-1.webp', alt: 'Private dining Vadodara', title: 'Private Dining', featured: false },
  { type: 'image', src: '/images/gallery/romantic-venue-vadodara-1.webp', alt: 'Romantic venue Vadodara', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/images/gallery/celebration-venue-vadodara-1.webp', alt: 'Celebration venue Vadodara', title: 'Celebration Venue', featured: false },
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Vadodara
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              All ({photoCount + videoCount})
            </Button>
            <Button 
              variant={activeFilter === 'photos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('photos')}
              className={activeFilter === 'photos' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photos ({photoCount})
            </Button>
            <Button 
              variant={activeFilter === 'videos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('videos')}
              className={activeFilter === 'videos' 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'border-amber-300 text-amber-700 hover:bg-amber-50'}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos ({videoCount})
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-amber-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
