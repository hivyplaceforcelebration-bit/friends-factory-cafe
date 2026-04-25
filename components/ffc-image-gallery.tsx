'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function FFCImageGallery({ images, name }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const lightboxTouchStart = useRef<number | null>(null);
  const lightboxTouchEnd = useRef<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToPrevImage = useCallback(() => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNextImage = useCallback(() => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Scroll thumbnail into view
  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[selectedImage] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') goToPrevImage();
        if (e.key === 'ArrowRight') goToNextImage();
        if (e.key === 'Escape') setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevImage, goToNextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Touch handlers for main image
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Touch handlers for lightbox
  const onLightboxTouchStart = (e: React.TouchEvent) => {
    lightboxTouchEnd.current = null;
    lightboxTouchStart.current = e.targetTouches[0].clientX;
  };

  const onLightboxTouchMove = (e: React.TouchEvent) => {
    lightboxTouchEnd.current = e.targetTouches[0].clientX;
  };

  const onLightboxTouchEnd = () => {
    if (!lightboxTouchStart.current || !lightboxTouchEnd.current) return;
    const distance = lightboxTouchStart.current - lightboxTouchEnd.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
    lightboxTouchStart.current = null;
    lightboxTouchEnd.current = null;
  };

  return (
    <>
      {/* Main Image */}
      <div
        className="aspect-[4/5] max-h-[60vh] sm:max-h-[65vh] md:max-h-none md:aspect-[3/4] lg:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden relative mb-3 md:mb-4 group cursor-pointer bg-gray-100"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={images[selectedImage]}
          alt={`${name} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority={selectedImage === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />

        {/* Zoom Indicator */}
        <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-black/50 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
          className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
          className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-medium">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip - Horizontal scroll */}
      <div className="relative">
        <div
          ref={thumbnailRef}
          className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-14 h-[70px] sm:w-16 sm:h-20 md:w-20 md:h-24 rounded-lg overflow-hidden relative cursor-pointer transition-all snap-start ${
                selectedImage === index
                  ? 'ring-2 ring-amber-500 ring-offset-1 opacity-100 scale-[1.02]'
                  : 'opacity-60 hover:opacity-90'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${name} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />

            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-3 right-3 md:top-6 md:right-6 z-[110] w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[110] bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Lightbox Image */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onLightboxTouchStart}
            onTouchMove={onLightboxTouchMove}
            onTouchEnd={onLightboxTouchEnd}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={images[selectedImage]}
                alt={`${name} - Full view ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* Lightbox Thumbnail Strip */}
          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-[110]">
            <div className="flex gap-1.5 md:gap-2 overflow-x-auto justify-center px-4 pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`flex-shrink-0 w-12 h-14 md:w-16 md:h-20 rounded-md overflow-hidden relative transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-black opacity-100 scale-105'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
