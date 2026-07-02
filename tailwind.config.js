/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#0C0C0D',
          sec: '#141416',
          card: '#1C1C20',
          accent: '#C49B66',
          primary: '#F5F5F5',
          secondary: '#A7A7A7',
          border: '#2A2A2F',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

