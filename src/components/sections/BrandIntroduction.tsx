import React from 'react';
import { Container } from '../ui/Container';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-stone-200/70">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-px bg-gold-500/60 inline-block" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-gold-600">
                Our Planning Philosophy
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-navy-900 leading-[1.14] tracking-tight">
              Travel shaped around who you are,
              <span className="block font-serif italic text-gold-600 mt-1">
                never off the shelf.
              </span>
            </h2>
            <div className="w-12 h-px bg-gold-400/50 mt-4" />
          </div>

          {/* Right Column: Concise Narrative & Key Distinctions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 pt-1 lg:pt-3">
            <p className="font-sans text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              At <strong className="text-navy-900 font-semibold">Travel Your Way with Lanae</strong>,
              we believe the most memorable journeys are designed with personal care rather than
              rigid algorithms. Every itinerary starts with an unhurried conversation about how you
              like to travel, the pace you prefer between destinations, and the experiences that
              matter most to you and your companions.
            </p>

            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
              Whether you are coordinating multiple rooms for a milestone celebration or searching for
              a secluded coastal hideaway, Lanae handles the research, sequencing, and details so
              you can simply anticipate the journey ahead.
            </p>

            {/* Editorial 3-Pillar Typographic Distinction (Not identical cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200/80">
              <div className="space-y-1.5">
                <p className="font-serif text-xl text-navy-900 font-medium">Your Personal Pace</p>
                <p className="text-sm text-stone-600 font-sans leading-normal">
                  Itineraries calibrated to how you like to spend your days, never rushed.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-serif text-xl text-navy-900 font-medium">Direct Collaboration</p>
                <p className="text-sm text-stone-600 font-sans leading-normal">
                  One-on-one planning with Lanae from initial ideas through to departure.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-serif text-xl text-navy-900 font-medium">Tailored Cohesion</p>
                <p className="text-sm text-stone-600 font-sans leading-normal">
                  Accommodations and daily rhythm aligned seamlessly to your travel style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
