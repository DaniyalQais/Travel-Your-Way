import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Check, Copy, AlertCircle, Sparkles, RefreshCw, Edit3, ShieldCheck } from 'lucide-react';
import type { InquiryFormData } from '../../types';

interface TripInquiryProps {
  selectedStyle?: string;
  onSelectStyle?: (style: string) => void;
}

const TRAVEL_STYLES = [
  'Group Travel & Celebrations',
  'Adults-Only & Romantic Escapes',
  'Cruises',
  'Family Vacations',
  'International Vacations',
  'Custom / Multi-Style',
] as const;

export const TripInquiry: React.FC<TripInquiryProps> = ({
  selectedStyle = 'Custom / Multi-Style',
  onSelectStyle,
}) => {
  const isDemoSummaryParam =
    typeof window !== 'undefined' && window.location.search.includes('demo=summary');

  const [formData, setFormData] = useState<Omit<InquiryFormData, 'travelStyle'>>({
    fullName: isDemoSummaryParam ? 'Sarah Jenkins' : '',
    email: isDemoSummaryParam ? 'sarah.jenkins@example.com' : '',
    destinationIdeas: isDemoSummaryParam ? 'St. Lucia & Caribbean Seclusion' : '',
    preferredDates: isDemoSummaryParam ? 'October 12 – 20, 2026' : '',
    travelerCount: isDemoSummaryParam ? '2 Adults' : '',
    budgetRange: isDemoSummaryParam ? '$8,000 – $12,000' : '',
    additionalPreferences: isDemoSummaryParam
      ? 'Celebrating our 10th wedding anniversary. We would love a quiet beachfront villa with sunset dining and unhurried coastal days.'
      : '',
  });

  const [activeStyle, setActiveStyle] = useState<string>(
    isDemoSummaryParam ? 'Adults-Only & Romantic Escapes' : selectedStyle
  );
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(isDemoSummaryParam);
  const [isCopied, setIsCopied] = useState(false);

  // Keep internal state aligned if parent updates
  const effectiveStyle = selectedStyle || activeStyle;

  const handleStyleChange = (style: string) => {
    setActiveStyle(style);
    if (onSelectStyle) {
      onSelectStyle(style);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g., name@example.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      const el = document.getElementById('inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCopyBrief = () => {
    const briefText = `
=== TRAVEL INQUIRY BRIEF — TRAVEL YOUR WAY WITH LANAE ===
Client Name: ${formData.fullName}
Email: ${formData.email}
Travel Style: ${effectiveStyle}
Destination Ideas: ${formData.destinationIdeas || 'Flexible / To be discussed with Lanae'}
Preferred Dates: ${formData.preferredDates || 'Flexible'}
Number of Travelers: ${formData.travelerCount || 'Not specified'}
Approximate Budget: ${formData.budgetRange || 'Open / Consultative'}
Notes / Preferences: ${formData.additionalPreferences || 'None specified'}
=========================================================
`.trim();

    navigator.clipboard.writeText(briefText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      destinationIdeas: '',
      preferredDates: '',
      travelerCount: '',
      budgetRange: '',
      additionalPreferences: '',
    });
    handleStyleChange('Custom / Multi-Style');
    setErrors({});
    setIsSubmitted(false);
    setIsCopied(false);
  };

  return (
    <section id="inquiry" className="py-16 lg:py-20 bg-alabaster border-b border-stone-200/80">
      <Container>
        <SectionHeading
          kicker="Personalized Consultation"
          title="Start Your Trip Inquiry"
          subdeck="Share your initial ideas below. Lanae will help you turn your travel thoughts into a cohesive, thoughtfully paced itinerary."
          alignment="center"
        />

        {/* Transparent Demo Notice Callout */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-white border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-stone-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-navy-900">Interactive Prototype Preview:</strong>{' '}
              Feel free to test the inquiry experience. Data is compiled locally on your device and
              is not transmitted across the internet.
            </p>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 rounded text-xs uppercase font-sans tracking-widest text-stone-600 bg-stone-100 border border-stone-200 font-semibold shrink-0">
            Preview Mode
          </span>
        </div>

        {/* Dynamic State: Form vs. Elegant Summary Modal/Card */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200/90 shadow-subtle p-6 sm:p-10 lg:p-12 transition-all duration-300"
          >
            <div className="space-y-8">
              {/* Group 1: Contact Information */}
              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.18em] font-semibold text-gold-700 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <span>01</span>
                  <span>Contact Details</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Full Name <span className="text-gold-600 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3.5 min-h-[48px] rounded-lg border text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-300/40'
                          : 'border-stone-300 focus:border-gold-400 focus:ring-gold-300/30'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Email Address <span className="text-gold-600 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3.5 min-h-[48px] rounded-lg border text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-300/40'
                          : 'border-stone-300 focus:border-gold-400 focus:ring-gold-300/30'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 2: Travel Style Selection */}
              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.18em] font-semibold text-gold-700 mb-3 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <span>02</span>
                  <span>Travel Style</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-500 font-sans mb-3">
                  Select the primary style of journey you are envisioning:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {TRAVEL_STYLES.map((style) => {
                    const isSelected = effectiveStyle === style;
                    return (
                      <button
                        type="button"
                        key={style}
                        onClick={() => handleStyleChange(style)}
                        className={`text-left px-4 py-3.5 min-h-[48px] rounded-lg border text-sm font-sans transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-navy-900 text-white border-navy-900 shadow-xs font-semibold'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-gold-400 hover:bg-stone-50'
                        }`}
                      >
                        <span>{style}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Group 3: Destination Ideas & Travel Dates */}
              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.18em] font-semibold text-gold-700 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <span>03</span>
                  <span>Trip Parameters</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="destinationIdeas"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Destination or Destination Ideas
                    </label>
                    <input
                      type="text"
                      id="destinationIdeas"
                      name="destinationIdeas"
                      value={formData.destinationIdeas}
                      onChange={(e) =>
                        setFormData({ ...formData, destinationIdeas: e.target.value })
                      }
                      placeholder="e.g. St. Lucia, Mediterranean, or Undecided"
                      className="w-full px-4 py-3.5 min-h-[48px] rounded-lg border border-stone-300 text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDates"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Preferred Travel Dates / Time of Year
                    </label>
                    <input
                      type="text"
                      id="preferredDates"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDates: e.target.value })
                      }
                      placeholder="e.g. October 2026, or Spring Break"
                      className="w-full px-4 py-3.5 min-h-[48px] rounded-lg border border-stone-300 text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelerCount"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Number of Travelers
                    </label>
                    <input
                      type="text"
                      id="travelerCount"
                      name="travelerCount"
                      value={formData.travelerCount}
                      onChange={(e) =>
                        setFormData({ ...formData, travelerCount: e.target.value })
                      }
                      placeholder="e.g. 2 adults, or 8 guests"
                      className="w-full px-4 py-3.5 min-h-[48px] rounded-lg border border-stone-300 text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-sm font-semibold text-navy-900 mb-2"
                    >
                      Approximate Budget <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      placeholder="e.g. $5k - $10k, or Open"
                      className="w-full px-4 py-3.5 min-h-[48px] rounded-lg border border-stone-300 text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Group 4: Special Preferences */}
              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.18em] font-semibold text-gold-700 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <span>04</span>
                  <span>Special Notes</span>
                </h4>
                <label
                  htmlFor="additionalPreferences"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Additional Preferences or Special Occasion Notes
                </label>
                <textarea
                  id="additionalPreferences"
                  name="additionalPreferences"
                  rows={4}
                  value={formData.additionalPreferences}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalPreferences: e.target.value })
                  }
                  placeholder="Tell Lanae about the vibe you love, any milestone being celebrated, or must-have activities..."
                  className="w-full p-4 rounded-lg border border-stone-300 text-base text-navy-900 placeholder:text-stone-400 bg-stone-50/50 focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-300/30 focus:outline-none transition-all resize-y"
                />
              </div>

              {/* Submission Action Button */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-bold tracking-wider"
                >
                  Preview My Trip Inquiry
                </Button>
                <p className="text-xs sm:text-sm text-stone-500 font-sans text-center sm:text-right">
                  Client demo preview • No customer data is sent
                </p>
              </div>
            </div>
          </form>
        ) : (
          /* =========================================================================
             Demonstration Summary View (Transparent, No Fake Claims)
             ========================================================================= */
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-card p-6 sm:p-10 lg:p-12 transition-all duration-300">
            {/* Header Status Notice */}
            <div className="border-b border-stone-200 pb-6 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-sans uppercase tracking-wider font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Demo Preview Summary Ready
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-navy-900 font-normal">
                Your Customized Trip Inquiry Brief
              </h3>
              <p className="text-sm sm:text-base text-stone-600 mt-2 font-sans leading-relaxed">
                <strong className="text-navy-900 font-semibold">Important Note:</strong> Because
                this website is in preview demonstration mode,{' '}
                <span className="underline decoration-gold-400 font-medium">nothing has been sent over the web</span>.
                In the live website, these details will route directly to Lanae for your personalized consultation.
              </p>
            </div>

            {/* Structured Brief Summary */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 p-6 mb-8 space-y-4 text-sm sm:text-base font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-stone-200/70">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Traveler Name
                  </span>
                  <span className="text-lg font-semibold text-navy-900">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Email Address
                  </span>
                  <span className="text-lg font-semibold text-navy-900">{formData.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-stone-200/70">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Selected Travel Style
                  </span>
                  <span className="text-lg font-medium text-gold-800 font-serif">
                    {effectiveStyle}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Party Size
                  </span>
                  <span className="text-base text-navy-900">
                    {formData.travelerCount || 'Flexible / To be discussed'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-stone-200/70">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Destination Ideas
                  </span>
                  <span className="text-base text-navy-900">
                    {formData.destinationIdeas || 'Flexible / Open to recommendations'}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                    Preferred Timing
                  </span>
                  <span className="text-base text-navy-900">
                    {formData.preferredDates || 'Flexible'}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 block mb-0.5">
                  Approximate Budget
                </span>
                <span className="text-base text-navy-900">
                  {formData.budgetRange || 'Consultative / Open'}
                </span>
              </div>

              {formData.additionalPreferences && (
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-1">
                    Notes & Special Preferences
                  </span>
                  <p className="text-stone-700 bg-white p-4 rounded-lg border border-stone-200 leading-relaxed text-sm sm:text-base">
                    {formData.additionalPreferences}
                  </p>
                </div>
              )}
            </div>

            {/* Summary Actions: Copy Brief, Edit, Reset */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  onClick={handleCopyBrief}
                  variant="gold"
                  size="md"
                  className="gap-2 font-bold"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-navy-950" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-navy-950" />
                      <span>Copy Trip Brief</span>
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                  size="md"
                  className="gap-2"
                >
                  <Edit3 className="w-4 h-4 text-stone-600" />
                  <span>Edit Details</span>
                </Button>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider text-stone-500 hover:text-navy-900 transition-colors py-2 font-medium cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Demo Form</span>
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
