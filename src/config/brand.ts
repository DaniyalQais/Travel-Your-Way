import type { NavItem } from '../types';

export const BRAND_CONFIG = {
  name: 'Travel Your Way with Lanae',
  shortName: 'Travel Your Way',
  founder: 'Lanae',
  tagline: 'Dream it. Plan it. Travel Your Way.',
  heroKicker: 'Personalized Travel Planning',
  heroSubdeck:
    'Thoughtfully tailored itineraries designed around your rhythm, your style, and the people you share the journey with.',
  palette: {
    navy: '#0B1528',
    champagneGold: '#C5A880',
    white: '#FFFFFF',
    alabaster: '#FBF9F5',
  },
  demoNotice: {
    badge: 'Interactive Preview Demonstration',
    description:
      'This website is an interactive prototype for Travel Your Way with Lanae. Inquiries are compiled for demonstration review only and are not submitted to a live booking engine or database.',
  },
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Introduction', href: '#about', description: 'Our Philosophy' },
  { label: 'Ways to Travel', href: '#categories', description: 'Five Curated Styles' },
  { label: 'Inspiration', href: '#inspiration', description: 'Editorial Curations' },
  { label: 'How It Works', href: '#how-it-works', description: 'Collaborative Process' },
  { label: 'Meet Lanae', href: '#meet-lanae', description: 'Your Personal Planner' },
] as const;

export const INQUIRY_ANCHOR = '#inquiry';
