import React from 'react';
import { INQUIRY_ANCHOR } from '../../config/brand';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-navy-950">
      {/* High-Resolution Luxury Destination Photography with Gentle Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-resort-terrace.jpg"
          alt="Luxury beachfront resort terrace overlooking turquoise ocean and swaying palms"
          className="w-full h-full object-cover object-center animate-hero-zoom"
          loading="eager"
        />
        {/* Directional Light Scrim: Darker on bottom and left for typography, open on top-right for vibrant sea and daylight */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/25 to-transparent" />
      </div>

      {/* Spacer for Sticky Navbar */}
      <div className="h-20 sm:h-24" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12 lg:py-16">
        <div className="max-w-3xl">
          {/* Editorial Eyebrow (Entrance Delay: 100ms) */}
          <div className="inline-flex items-center gap-3 mb-5 opacity-0 animate-fade-up animation-delay-100">
            <span className="w-8 h-px bg-gold-400" />
            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-gold-300 drop-shadow-sm">
              Personalized Travel Planning with Lanae
            </p>
          </div>

          {/* Magazine-Scale Typographic Headline (Entrance Delay: 250ms) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.04] tracking-tight drop-shadow-md text-balance opacity-0 animate-fade-up animation-delay-250">
            Dream it. Plan it.
            <span className="block font-serif italic text-gold-200 mt-2 sm:mt-3">
              Travel Your Way.
            </span>
          </h1>

          {/* Core Service Narrative (Entrance Delay: 450ms) */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-sans font-normal text-slate-100/95 leading-relaxed max-w-2xl drop-shadow-sm opacity-0 animate-fade-up animation-delay-450">
            Thoughtfully crafted itineraries tailored around your personal pace and style. From
            secluded romantic escapes and celebratory group journeys to relaxed family vacations,
            Lanae designs every detail exclusively for you.
          </p>

          {/* Dual Action Buttons (Entrance Delay: 650ms) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto opacity-0 animate-fade-up animation-delay-650">
            <Button
              href={INQUIRY_ANCHOR}
              variant="gold"
              size="lg"
              className="text-center justify-center font-bold tracking-wider"
            >
              Start Your Trip Inquiry
            </Button>
            <Button
              href="#categories"
              variant="outline-light"
              size="lg"
              className="text-center justify-center font-medium tracking-wide"
            >
              Explore 5 Curated Styles
            </Button>
          </div>
        </div>
      </div>

      {/* Minimalist Editorial Scroll Indicator */}
      <div className="relative z-10 w-full pb-8 sm:pb-10 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group focus:outline-none"
          aria-label="Scroll to introduction"
        >
          <span className="text-[11px] uppercase tracking-[0.22em] font-sans font-medium mb-2 opacity-80 group-hover:opacity-100">
            Discover
          </span>
          <div className="w-px h-8 bg-white/25 relative overflow-hidden rounded-full">
            <div className="w-px h-3.5 bg-gold-300 absolute top-0 animate-scroll-cue rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
};
