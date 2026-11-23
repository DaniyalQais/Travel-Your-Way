import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { MessageSquareText, Compass, Luggage } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquareText,
      title: 'Share Your Travel Vision',
      description:
        'Tell Lanae what you are imagining—whether that is a specific destination, preferred travel dates, or simply the mood and style of getaway you have in mind.',
    },
    {
      num: '02',
      icon: Compass,
      title: 'Explore Your Personalized Plan',
      description:
        'Lanae researches and organizes a tailored itinerary draft aligned with your pace, preferences, and companions, refining details based on your feedback.',
    },
    {
      num: '03',
      icon: Luggage,
      title: 'Prepare for Your Journey',
      description:
        'With your dates, accommodations, and itinerary sequence clearly arranged, you receive an organized travel plan so you can depart with complete peace of mind.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-alabaster border-b border-stone-200/80">
      <Container>
        <SectionHeading
          kicker="The Planning Journey"
          title="How Travel Planning Works"
          subdeck="A collaborative, stress-free approach designed to take the guesswork out of vacation planning."
          alignment="center"
        />

        {/* Refined Three-Step Presentation with Subtle Hairline Dividers (Not identical cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-14 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between p-7 sm:p-8 rounded-xl bg-white/70 border border-stone-200/70 shadow-xs hover:bg-white transition-colors duration-300 group"
              >
                <div>
                  {/* Step Number & Icon Row */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-200/60">
                    <span className="font-serif text-3xl sm:text-4xl text-gold-600 font-light">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="font-serif text-2xl text-navy-900 font-normal mb-3 group-hover:text-gold-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-stone-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-400 uppercase tracking-widest font-sans">
                  <span>Step {index + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
