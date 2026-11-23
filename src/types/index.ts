export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface TravelCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  vibe: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  destinationIdeas: string;
  preferredDates: string;
  travelerCount: string;
  travelStyle: string;
  budgetRange?: string;
  additionalPreferences?: string;
}
