/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chikuro: {
          red: '#E3242B',
          redHover: '#C21E24',
          dark: '#111111',
          charcoal: '#1E1E1E',
          gray: '#4B5563',
          light: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(227, 36, 43, 0.2)',
        'premium-hover': '0 20px 40px -15px rgba(227, 36, 43, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
