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
