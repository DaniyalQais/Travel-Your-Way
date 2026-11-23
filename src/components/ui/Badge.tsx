import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'coastal' | 'demo' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'border-gold-300 bg-gold-50 text-gold-700',
    navy: 'border-navy-200 bg-navy-50 text-navy-900',
    coastal: 'border-teal-700/20 bg-coastal text-teal-900',
    demo: 'border-stone-300 bg-white text-stone-700 shadow-xs',
    muted: 'border-stone-200 bg-stone-100 text-stone-600',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans uppercase tracking-widest border ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
