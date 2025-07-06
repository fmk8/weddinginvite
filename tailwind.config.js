/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    screens: {
      'xs': '320px',
      // Default Tailwind breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'xs': '0.875rem',     /* 14px (increased from 12px) */
      'sm': '1rem',         /* 16px (increased from 14px) */
      'base': '1.125rem',   /* 18px (increased from 16px) */
      'lg': '1.25rem',      /* 20px (increased from 18px) */
      'xl': '1.375rem',     /* 22px (increased from 20px) */
      '2xl': '1.625rem',    /* 26px (increased from 24px) */
      '3xl': '1.875rem',    /* 30px (increased from 30px, slightly larger) */
      '4xl': '2.25rem',     /* 36px (increased from 36px, slightly larger) */
      '5xl': '3rem',        /* 48px (increased from 48px) */
      '6xl': '3.75rem',     /* 60px (increased from 60px) */
      '7xl': '4.5rem',      /* 72px (increased from 72px) */
      '8xl': '6rem',        /* 96px (increased from 96px) */
      '9xl': '8rem',        /* 128px (increased from 128px) */
    },
    extend: {
      colors: {
        beige: '#f7f3e8',
        cream: '#f9f6f0',
        burgundy: '#5c0819',
        darkBurgundy: '#4a0614',
        gold: '#c6a964',
        brightGold: '#d4b872',
        darkGold: '#aa8e4a',
        black: '#1a1a1a',
      },
      fontFamily: {
        primary: ['Amiri', 'serif'],
        secondary: ['Playfair Display', 'serif'],
        decorative: ['Pinyon Script', 'cursive'],
      },
      backgroundImage: {
        'ornate-pattern': "url('/img/ornate-pattern.png')",
        'corner-ornament': "url('/img/corner-ornament.png')",
        'gold-border': "url('/img/gold-border.png')"
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 0 15px rgba(198, 169, 100, 0.4)'
      },
      animation: {
        'spin-slow': 'spin 120s linear infinite',
      }
    },
  },
  plugins: [],
}
