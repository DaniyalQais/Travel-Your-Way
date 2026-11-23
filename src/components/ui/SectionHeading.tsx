import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subdeck?: string;
  alignment?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subdeck,
  alignment = 'center',
  dark = false,
  className = '',
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {kicker && (
        <div
          className={`mb-3 flex items-center gap-2.5 ${
            alignment === 'center' ? 'justify-center' : 'justify-start'
          }`}
        >
          {alignment === 'center' && (
            <span
              className={`w-7 h-px inline-block ${
                dark ? 'bg-gold-300/50' : 'bg-gold-500/60'
              }`}
            />
          )}
          <span
            className={`font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold ${
              dark ? 'text-gold-200' : 'text-gold-600'
            }`}
          >
            {kicker}
          </span>
          {alignment === 'center' && (
            <span
              className={`w-7 h-px inline-block ${
                dark ? 'bg-gold-300/50' : 'bg-gold-500/60'
              }`}
            />
          )}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subdeck && (
        <p
          className={`mt-4 font-sans text-base sm:text-lg font-normal leading-relaxed ${
            dark ? 'text-slate-200' : 'text-stone-600'
          }`}
        >
          {subdeck}
        </p>
      )}
    </div>
  );
};
