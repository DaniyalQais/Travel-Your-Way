import type { TravelCategory } from '../types';

export const TRAVEL_CATEGORIES: readonly TravelCategory[] = [
  {
    id: 'group-travel',
    title: 'Group Travel & Celebrations',
    tagline: 'Milestones celebrated together in memorable settings.',
    description:
      'Coordinated planning for reunions, milestone birthdays, and celebrations—balancing shared moments with personal free time.',
    vibe: 'Celebratory',
    imageUrl: '/images/group-travel.jpg',
    imageAlt: 'Travel companions enjoying a sunny outdoor celebration together',
    highlights: [],
  },
  {
    id: 'adults-only-romantic',
    title: 'Adults-Only & Romantic Escapes',
    tagline: 'Intimate retreats crafted for reconnection and tranquility.',
    description:
      'Tranquil beachfront hideaways and anniversary escapes tailored for couples seeking privacy and an unhurried pace.',
    vibe: 'Intimate',
    imageUrl: '/images/romantic-escapes.jpg',
    imageAlt: 'Two wooden beach loungers on pristine white sand overlooking turquoise waters',
    highlights: [],
  },
  {
    id: 'cruises',
    title: 'Cruises',
    tagline: 'Ocean voyages across turquoise waters and scenic coastlines.',
    description:
      'From Caribbean island-hopping to coastal voyages, navigating stateroom choices and seamless travel arrangements.',
    vibe: 'Scenic',
    imageUrl: '/images/cruises.jpg',
    imageAlt: 'Luxury ship sailing through clear azure tropical waters near islands',
    highlights: [],
  },
  {
    id: 'family-vacations',
    title: 'Family Vacations',
    tagline: 'Multigenerational journeys tailored for every age.',
    description:
      'Thoughtful itineraries that engage children, keep teens interested, and allow parents and grandparents to unwind.',
    vibe: 'Welcoming',
    imageUrl: '/images/family-vacations.jpg',
    imageAlt: 'Family walking along a sunlit palm-fringed tropical beach',
    highlights: [],
  },
  {
    id: 'international-vacations',
    title: 'International Vacations',
    tagline: 'Immersive worldwide destinations curated with thoughtful care.',
    description:
      'Cross-continental explorations planned around your interests, balancing cultural discovery with comfortable pacing.',
    vibe: 'Curated',
    imageUrl: '/images/international-vacations.jpg',
    imageAlt: 'Sunlit Mediterranean coastal village overlooking the blue sea',
    highlights: [],
  },
] as const;
