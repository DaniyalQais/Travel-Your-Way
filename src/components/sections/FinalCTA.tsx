import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { INQUIRY_ANCHOR } from '../../config/brand';
import { Compass } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 lg:py-20 bg-white">
      <Container>
        {/* Refined Soft Coastal Editorial Surface with Deep Navy Typography */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-coastal via-white to-alabaster border border-teal-900/15 text-navy-900 overflow-hidden shadow-subtle p-8 sm:p-14 lg:p-16 text-center">
          {/* Subtle Top Accent Divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-900/10 text-teal-950 text-xs font-sans uppercase tracking-[0.2em] font-semibold shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>Personalized Travel Design</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-navy-900 leading-tight tracking-tight">
              Your next journey begins here.
            </h2>

            <p className="text-base sm:text-lg text-stone-600 font-sans font-normal leading-relaxed">
              Have a destination in mind—or just a feeling you want to chase? Start with your ideas.
            </p>

            <div className="pt-2">
              <Button
                href={INQUIRY_ANCHOR}
                variant="primary"
                size="lg"
                className="font-bold tracking-wider px-8 shadow-sm"
              >
                Plan My Trip
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
