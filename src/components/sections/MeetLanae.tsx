import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { INQUIRY_ANCHOR, BRAND_CONFIG } from '../../config/brand';
import { Compass, Sparkles } from 'lucide-react';

export const MeetLanae: React.FC = () => {
  return (
    <section id="meet-lanae" className="py-16 lg:py-20 bg-white border-b border-stone-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sophisticated Brand Artwork & Medallion Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[4/5] rounded-2xl bg-gradient-to-br from-alabaster via-white to-stone-50 border border-stone-200 shadow-subtle p-8 sm:p-10 flex flex-col items-center justify-between text-center relative overflow-hidden group">
              {/* Refined Gold Double-Hairline Editorial Border */}
              <div className="absolute inset-3 border border-gold-400/25 rounded-xl pointer-events-none" />
              <div className="absolute inset-4 border border-gold-400/10 rounded-lg pointer-events-none" />

              {/* Top Insignia Row */}
              <div className="w-full flex items-center justify-between relative z-10">
                <span className="text-xs uppercase font-sans tracking-[0.2em] font-semibold text-gold-700 bg-gold-50/80 px-3 py-1 rounded-full border border-gold-300/40">
                  Founder
                </span>
                <span className="text-xs font-sans text-stone-400 tracking-wider">
                  Est. Brand
                </span>
              </div>

              {/* Center Medallion: Compass Monogram & Signature Branding */}
              <div className="my-auto flex flex-col items-center space-y-5 relative z-10 py-6">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center text-gold-300 shadow-md">
                    <Compass className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.25] text-gold-400 group-hover:rotate-45 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gold-400 text-navy-950 flex items-center justify-center shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-3xl sm:text-4xl text-navy-900 font-normal tracking-tight">
                    Lanae
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-gold-700 font-sans">
                    Personal Travel Planner
                  </p>
                </div>

                <div className="w-10 h-px bg-gold-400/50" />

                <p className="font-serif italic text-base sm:text-lg text-stone-600 max-w-xs leading-snug">
                  "{BRAND_CONFIG.tagline}"
                </p>
              </div>

              {/* Bottom Editorial Plaque Caption */}
              <div className="w-full relative z-10 pt-3 border-t border-stone-200/60">
                <p className="text-xs text-stone-500 font-sans tracking-wide">
                  Personalized Planning • Direct Consultation
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Warm, Authentic Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-px bg-gold-500/60 inline-block" />
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-gold-600">
                Meet Your Travel Planner
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-navy-900 leading-[1.12] tracking-tight">
              Personalized planning with a
              <span className="block font-serif italic text-gold-600 mt-1">
                collaborative touch.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              Every memorable journey begins with an open conversation. As the founder of{' '}
              <strong className="text-navy-900 font-semibold">Travel Your Way</strong>, Lanae works
              directly with clients to remove the stress and hours of research that typically go into
              planning a vacation.
            </p>

            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              Whether you are organizing a group celebration, a quiet romantic retreat, a family
              holiday, or an ocean cruise, Lanae takes the time to understand your vision and
              translates it into an organized itinerary tailored to your timing, preferences, and companions.
            </p>

            {/* Direct Consultation Link */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button href={INQUIRY_ANCHOR} variant="primary" size="md" className="font-bold">
                Inquire with Lanae
              </Button>
              <a
                href="#categories"
                className="text-sm uppercase tracking-wider font-semibold text-stone-700 hover:text-navy-900 transition-colors py-2 flex items-center gap-1.5"
              >
                <span>Explore Travel Categories</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
