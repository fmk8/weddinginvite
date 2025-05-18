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
    extend: {
      colors: {
        beige: '#f5f5dc',
        burgundy: '#800020',
        gold: '#d4af37',
        black: '#222222',
      },
      fontFamily: {
        primary: ['Amiri', 'serif'],
        secondary: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
