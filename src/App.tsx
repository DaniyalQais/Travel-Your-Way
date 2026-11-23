import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BrandIntroduction } from './components/sections/BrandIntroduction';
import { TravelInspiration } from './components/sections/TravelInspiration';
import { HowItWorks } from './components/sections/HowItWorks';
import { MeetLanae } from './components/sections/MeetLanae';
import { TripInquiry } from './components/sections/TripInquiry';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';
import { Container } from './components/ui/Container';
import { SectionHeading } from './components/ui/SectionHeading';
import { TRAVEL_CATEGORIES } from './data/travelCategories';
import { ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Custom / Multi-Style');

  const handleInquireCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 flex flex-col selection:bg-gold-400/20 selection:text-navy-950">
      {/* 1. Responsive Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Cinematic Tropical Hero */}
        <Hero />

        {/* 3. Brand Introduction */}
        <BrandIntroduction />

        {/* 4. Ways to Travel — Five Verified Categories */}
        <section id="categories" className="py-16 lg:py-20 bg-alabaster border-b border-stone-200/80">
          <Container>
            <SectionHeading
              kicker="Curated Styles"
              title="Ways to Travel with Lanae"
              subdeck="Whether planning a romantic escape, a family holiday, or a milestone gathering with friends, every itinerary is designed around how you love to travel."
              alignment="center"
            />

            {/* Photography-Led Editorial Travel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {TRAVEL_CATEGORIES.map((category) => (
                <article
                  key={category.id}
                  className="bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Consistent Aspect Ratio Destination Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={category.imageUrl}
                        alt={category.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Concise Editorial Copy (1-2 lines) */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 group-hover:text-gold-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="font-serif italic text-base text-gold-600 mt-1 mb-2.5">
                        "{category.tagline}"
                      </p>
                      <p className="text-stone-600 text-base leading-relaxed font-sans font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean, Prominent Action Link with Category Pre-Fill */}
                  <div className="px-6 sm:px-7 pb-6 pt-1">
                    <button
                      type="button"
                      onClick={() => handleInquireCategory(category.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy-900 hover:text-gold-600 transition-colors py-1 group/link cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
                    >
                      <span>Inquire about this style</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}

              {/* Overarching Personalized Planning Invitation */}
              <div className="bg-gradient-to-br from-coastal via-white to-alabaster rounded-xl border border-teal-800/15 p-7 sm:p-8 flex flex-col justify-between shadow-subtle">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] font-semibold text-teal-900">
                    <span className="w-2 h-2 rounded-full bg-teal-700" />
                    Personalized Planning
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 leading-tight">
                    Have a unique travel idea in mind?
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed font-sans font-normal">
                    Personalized travel planning is our overarching service. If your dream escape
                    combines multiple destinations, cruise extensions, or custom celebration dates,
                    Lanae crafts an itinerary tailored entirely to you.
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-teal-900/10">
                  <button
                    type="button"
                    onClick={() => handleInquireCategory('Custom / Multi-Style')}
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-navy-900 hover:text-gold-600 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
                  >
                    <span>Request a Custom Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. Travel Inspiration */}
        <TravelInspiration />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Meet Lanae */}
        <MeetLanae />

        {/* 8. Interactive Trip Inquiry (Phase 5) */}
        <TripInquiry
          selectedStyle={selectedCategory}
          onSelectStyle={setSelectedCategory}
        />

        {/* 9. Final Call to Action (Phase 5) */}
        <FinalCTA />
      </main>

      {/* 10. Premium Footer */}
      <Footer />
    </div>
  );
};

export default App;
