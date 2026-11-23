import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const TravelInspiration: React.FC = () => {
  return (
    <section id="inspiration" className="py-16 lg:py-20 bg-white border-b border-stone-200/80">
      <Container>
        <SectionHeading
          kicker="Visual Inspiration"
          title="Where Curiosity Leads"
          subdeck="A glimpse of tranquil horizons, ocean terraces, and evocative destinations to inspire your next personalized itinerary."
          alignment="center"
        />

        {/* Sophisticated Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mt-12">
          {/* Dominant Featured Landscape Frame (7 cols) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] bg-stone-100 shadow-subtle">
            <img
              src="/images/hero-island-aerial.jpg"
              alt="Aerial perspective of lush tropical coastline and crystalline turquoise waters"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 text-white max-w-lg">
              <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-gold-300 font-medium block mb-1.5">
                Coastal Sanctuary
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
                Pristine coastlines and tranquil island breezes.
              </h3>
              <p className="text-sm sm:text-base text-slate-100 font-sans mt-2 font-normal hidden sm:block">
                Inspirational imagery of untouched horizons where time slows down.
              </p>
            </div>
          </div>

          {/* Two Complementary Editorial Frames (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Top Frame: Overwater dock and lagoon */}
            <div className="relative rounded-2xl overflow-hidden group h-[220px] sm:h-[260px] bg-stone-100 shadow-subtle flex-1">
              <img
                src="/images/hero-overwater-dock.jpg"
                alt="Secluded wooden walkway over crystal turquoise waters"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-300 font-medium block mb-1">
                  Secluded Calm
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                  Unhurried mornings by the water.
                </h4>
              </div>
            </div>

            {/* Bottom Frame: Oceanfront villa terrace */}
            <div className="relative rounded-2xl overflow-hidden group h-[220px] sm:h-[260px] bg-stone-100 shadow-subtle flex-1">
              <img
                src="/images/hero-luxury-villa.jpg"
                alt="Sunlit oceanfront pool and coastal resort terrace"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-300 font-medium block mb-1">
                  Private Gatherings
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                  Terraces framed by panoramic ocean views.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Disclaimer Caption */}
        <p className="text-center text-xs text-stone-500 font-sans mt-8 italic">
          * Imagery presented for visual inspiration and atmosphere. Specific destinations and stays are individually curated during consultation with Lanae.
        </p>
      </Container>
    </section>
  );
};
