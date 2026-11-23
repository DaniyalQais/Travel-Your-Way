# Travel Your Way with Lanae

> **"Dream it. Plan it. Travel Your Way."**

A premium, modern, editorial travel website demo created for **Travel Your Way with Lanae**, a personalized travel planning agency founded by Lanae.

Designed with an unhurried luxury travel aesthetic inspired by industry benchmarks (*Black Tomato*, *Jacada Travel*, *Original Travel*), the website showcases bespoke travel design across five verified categories with authentic storytelling, transparent inquiry demonstration, and zero artificial marketing claims.

---

## 🌟 Key Features

* **Cinematic Daylight Hero:** High-resolution local Caribbean destination photography with a directional ambient scrim, magazine-scale Cormorant Garamond typography, and restrained motion.
* **Refined Editorial Design System:** Light-forward palette using crisp white (`#FFFFFF`), warm alabaster (`#FBF9F5`), and soft coastal mist (`#E7F1EF`), with deep midnight navy (`#0B1528`) reserved for typography and grounding accents, accented by restrained champagne gold (`#C5A880`).
* **Verified Travel Categories:**
  1. Group Travel & Celebrations
  2. Adults-Only & Romantic Escapes
  3. Cruises
  4. Family Vacations
  5. International Vacations
  * Plus an overarching **Personalized Planning Consultation** offering.
* **Category Pre-Fill Integration:** Clicking *"Inquire about this style"* on any category card automatically smooth-scrolls and pre-selects that travel style in the inquiry form.
* **Asymmetric Travel Inspiration:** Editorial visual composition balancing panoramic landscape imagery with intimate coastal and architectural details.
* **3-Step Collaborative Process:** A simple illustrative journey (*Share Your Travel Vision*, *Explore Your Personalized Plan*, *Prepare for Your Journey*).
* **Meet Lanae Brand Medallion:** Editorial brand artwork with a deep navy circular crest, champagne gold compass insignia, and authentic founder narrative.
* **Interactive Trip Inquiry (Client Demo):**
  * Collects traveler contact details, travel style, destination ideas, dates, party size, optional budget, and special notes.
  * Full client-side validation and inline accessible error messages.
  * Generates an instant **Trip Inquiry Brief** with a *"Copy Trip Brief"* clipboard action.
  * Explicitly confirms no personal data is transmitted across the internet.
* **Restrained Premium Motion:** 100% native CSS keyframe animations (slow hero zoom, staggered headline entrance, minimalist vertical scroll track) with full support for `prefers-reduced-motion`.
* **Zero Artificial Claims:** No fabricated 5-star ratings, invented hotel partnerships, fake instant booking engines, or false guarantees.

---

## 🛠️ Technology Stack

* **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with customized luxury design tokens
* **Typography:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (Display/Serif) & [Manrope](https://fonts.google.com/specimen/Manrope) (Body/Interface)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Linter:** [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended, tested on v22)
* npm (v9 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/DaniyalQais/Travel-Your-Way.git

# Navigate into the project directory
cd Travel-Your-Way

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the live development server with HMR
npm run dev

# Open in browser at http://localhost:5173/
```

### Production Build

```bash
# Run TypeScript compilation and production bundle
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📸 Photography & Usage Rights

All photography used across the website is stored locally in `public/images/` and documented under the [Unsplash License](https://unsplash.com/license) (free for commercial and personal use with no attribution required):

* **Hero:** Tropical Caribbean shoreline by Sean Oulashin
* **Group Travel:** Celebration dining by Priscilla Du Preez
* **Romantic Escapes:** Secluded beachfront loungers by Sara Dubler
* **Cruises:** Luxury ship sailing island waters by Ray Harrington
* **Family Vacations:** Palm-fringed sunset beach by Guillaume de Germain
* **International Vacations:** Mediterranean seaside cliffs by Bjorn Snelders
* **Inspiration Aerial:** Crystalline coast by Sajjad Ghanbari
* **Inspiration Overwater:** Wooden walkway lagoon by Mohamed Thasneem
* **Inspiration Villa:** Coastal terrace pool by Edvin Johansson

See `src/config/imageCredits.ts` for full metadata.

---

## 📄 License & Ownership

Created for **Travel Your Way with Lanae**.  
© 2026 Travel Your Way with Lanae. All rights reserved.
