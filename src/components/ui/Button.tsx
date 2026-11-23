import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-widest px-4 py-2 rounded-sm font-semibold',
    md: 'text-sm font-semibold tracking-wider px-6 py-3 rounded-sm',
    lg: 'text-base font-semibold tracking-wider px-8 py-3.5 rounded-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-navy-900 text-white hover:bg-navy-800 border border-navy-900 shadow-subtle hover:-translate-y-0.5 active:translate-y-0',
    gold:
      'bg-gold-400 text-navy-950 hover:bg-gold-300 border border-gold-400 shadow-subtle hover:-translate-y-0.5 active:translate-y-0 font-bold',
    secondary:
      'bg-alabaster text-navy-900 border border-stone-200 hover:border-gold-400 hover:bg-white shadow-xs',
    outline:
      'bg-transparent text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-navy-900/5',
    'outline-light':
      'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-xs',
    ghost:
      'bg-transparent text-stone-600 hover:text-navy-900 hover:bg-stone-100',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
