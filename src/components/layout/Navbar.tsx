import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG, NAV_ITEMS, INQUIRY_ANCHOR } from '../../config/brand';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 animate-nav-entrance transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-200/90 shadow-subtle'
            : 'bg-gradient-to-b from-navy-950/85 via-navy-950/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
          >
            <div className="flex items-center gap-2.5">
              <Compass
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 ease-out group-hover:rotate-45 ${
                  isScrolled ? 'text-gold-500' : 'text-gold-300'
                }`}
              />
              <span
                className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight transition-colors ${
                  isScrolled
                    ? 'text-navy-900 group-hover:text-gold-600'
                    : 'text-white drop-shadow-sm group-hover:text-gold-200'
                }`}
              >
                Travel Your Way
              </span>
            </div>
            <div className="flex items-center gap-2 pl-8">
              <span
                className={`text-xs uppercase font-sans tracking-[0.18em] font-semibold transition-colors ${
                  isScrolled ? 'text-gold-600' : 'text-gold-200 drop-shadow-sm'
                }`}
              >
                with Lanae
              </span>
              <span
                className={`w-2 h-px inline-block ${
                  isScrolled ? 'bg-stone-300' : 'bg-white/40'
                }`}
              />
              <span
                className={`text-xs font-sans tracking-normal hidden sm:inline transition-colors ${
                  isScrolled ? 'text-stone-600 font-medium' : 'text-white/90 drop-shadow-sm font-normal'
                }`}
              >
                Personalized Travel Planning
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7 lg:space-x-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-stone-700 hover:text-navy-950 after:bg-navy-900 hover:after:w-full'
                    : 'text-white/95 hover:text-white drop-shadow-sm after:bg-gold-300 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              href={INQUIRY_ANCHOR}
              variant={isScrolled ? 'primary' : 'gold'}
              size="md"
              className="tracking-wider"
            >
              Plan Your Journey
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm transition-colors ${
              isScrolled
                ? 'text-navy-900 hover:text-gold-600'
                : 'text-white drop-shadow-sm hover:text-gold-300'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Accessible Light Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Light Drawer container */}
        <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white border-l border-stone-200 p-6 pt-20 flex flex-col justify-between shadow-2xl overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-stone-200 mb-6">
              <div>
                <p className="editorial-kicker mb-1">Official Brand</p>
                <h3 className="font-serif text-2xl text-navy-900 font-medium">
                  Travel Your Way
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-gold-600 font-semibold">
                  with Lanae
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-500 hover:text-navy-900 rounded-sm"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-serif italic text-base text-stone-700 mb-6 px-1">
              "{BRAND_CONFIG.tagline}"
            </p>

            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 text-stone-800 hover:text-navy-950 hover:bg-stone-50 rounded transition-colors group"
                >
                  <div>
                    <div className="font-serif text-xl tracking-normal text-navy-900 group-hover:text-gold-600">
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-xs font-sans text-stone-500 mt-0.5">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-navy-900 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-stone-200 space-y-4">
            <Button
              href={INQUIRY_ANCHOR}
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Trip Inquiry
            </Button>
            <div className="text-center">
              <span className="text-xs text-stone-500 uppercase tracking-widest font-medium">
                Interactive Demo Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
