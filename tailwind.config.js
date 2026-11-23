/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        primary: '#FFFFFF',
        alabaster: '#FBF9F5',
        coastal: '#E7F1EF',

        // Brand navy (primary text & dark accent sections)
        navy: {
          950: '#060C17',
          900: '#0B1528', // Primary text & dark sections
          850: '#112038',
          800: '#162846',
          700: '#233C64',
          600: '#345282',
          100: '#E8EDF5',
          50: '#F3F6FA',
        },

        // Restrained champagne gold accents
        gold: {
          50: '#FAF7F2',
          100: '#F4ECE0',
          200: '#E6D6BF',
          300: '#D8C2A5',
          400: '#C5A880', // Signature champagne gold
          500: '#AD8D62',
          600: '#8A6D47',
          700: '#675031',
        },

        // Muted neutrals
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        kicker: '0.26em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 21, 40, 0.05)',
        'card': '0 10px 30px -5px rgba(11, 21, 40, 0.08)',
        'elevated': '0 20px 40px -10px rgba(11, 21, 40, 0.12)',
      },
    },
  },
  plugins: [],
}
