import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG, NAV_ITEMS, INQUIRY_ANCHOR } from '../../config/brand';
import { TRAVEL_CATEGORIES } from '../../data/travelCategories';
import { Container } from '../ui/Container';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-300 relative overflow-hidden">
      {/* Subtle top gold accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <Compass className="w-6 h-6 text-gold-400" />
              <span className="font-serif text-2xl text-white font-medium tracking-wide">
                Travel Your Way
              </span>
            </div>
            <p className="editorial-kicker text-gold-400/90 pl-8.5">with Lanae</p>
            <p className="text-gold-200/90 font-serif italic text-lg pt-1">
              "{BRAND_CONFIG.tagline}"
            </p>
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-md pt-2">
              Personalized travel planning crafted to turn your travel vision into thoughtfully
              sequenced, stress-free itineraries. From multi-room group celebrations to peaceful
              island escapes, every journey is personalized for your pace.
            </p>
          </div>

          {/* Travel Categories Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-lg text-white font-medium tracking-wide mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold-400/60 inline-block" />
              Ways to Travel
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {TRAVEL_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a
                    href="#categories"
                    className="text-slate-300 hover:text-gold-200 transition-colors inline-block py-0.5"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Contact Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg text-white font-medium tracking-wide mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold-400/60 inline-block" />
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-gold-200 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={INQUIRY_ANCHOR}
                  className="text-gold-300 hover:text-gold-200 font-semibold transition-colors inline-block py-0.5"
                >
                  Personalized Trip Inquiry →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Mode Notice Box */}
        <div className="my-8 p-4 rounded-lg bg-navy-900/90 border border-gold-400/20 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-semibold text-gold-300 uppercase tracking-wider text-[11px]">
              {BRAND_CONFIG.demoNotice.badge}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <p className="text-slate-300">{BRAND_CONFIG.demoNotice.description}</p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors text-xs font-semibold uppercase tracking-wider shrink-0 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-4 gap-2">
          <p>© {CURRENT_YEAR} {BRAND_CONFIG.name}. All rights reserved.</p>
          <p className="italic font-serif text-slate-400">
            Tailored travel planning with personal care.
          </p>
        </div>
      </Container>
    </footer>
  );
};
