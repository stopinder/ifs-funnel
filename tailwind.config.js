/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  // Dark mode controlled by adding/removing the 'dark' class on <html> or <body>
  darkMode: 'class',

  theme: {
    // Base container behavior for consistent layout across pages/views
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },

    extend: {
      //
      // BRAND PALETTE (light + dark)
      //
      colors: {
        // Core brand tones
        midnight: '#1e293b',        // deep celestial blue (light mode text / dark panels)
        slategray: '#334155',       // cool slate neutral (body text, borders)
        starwhite: '#f8fafc',       // clean light background
        aurora: '#0d9488',          // CTA teal
        goldsoft: '#d4af37',        // accent highlight

        // Dark surface system
        'midnight-deep': '#0f172a', // near-black blue, dark background
        'slate-deep': '#1e293b',    // slightly lighter panel on dark
        starlight: '#e2e8f0',       // readable text on dark

        // Semantic aliases (for consistency in templates)
        surface: {
          DEFAULT: '#f8fafc',       // starwhite
          dark: '#0f172a',          // midnight-deep
        },
        textsurface: {
          DEFAULT: '#334155',       // slategray
          dark: '#e2e8f0',          // starlight
        },
        primary: {
          DEFAULT: '#0d9488',       // aurora
          hover: '#0a7a70',         // slightly deeper teal for hover
        },
        accent: {
          DEFAULT: '#d4af37',       // goldsoft
        },
        bordercol: {
          light: '#e2e8f0',         // light subtle border
          dark: '#475569',          // dark subtle border
        },
      },

      //
      // TYPOGRAPHY
      //
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"EB Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },

      //
      // SHADOWS / DEPTH
      //
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)', // light mode cards
        glow: '0 0 24px rgba(13, 148, 136, 0.25)', // teal glow for hover CTAs
      },

      //
      // RADII
      //
      borderRadius: {
        '2xl': '1rem', // consistent large radius for cards/hero boxes
      },

      //
      // BACKGROUND GRADIENT TOKENS
      //
      backgroundImage: {
        // Subtle clinical light hero background
        'hero-light':
            'linear-gradient(to bottom, rgba(248,250,252,1) 0%, rgba(226,232,240,1) 100%)',
        // Celestial introspection dark background
        'hero-dark':
            'radial-gradient(circle at 20% 20%, rgba(30,41,59,0.9) 0%, rgba(15,23,42,1) 70%)',
      },

      //
      // TRANSITIONS
      //
      transitionProperty: {
        'colors-bg': 'background-color, color, border-color, box-shadow',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
      },
      transitionTimingFunction: {
        subtle: 'ease-in-out',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
