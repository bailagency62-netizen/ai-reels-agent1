/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: { 900: '#0a0a0f', 800: '#12121a', 700: '#1a1a25' },
        brand: { pink: '#ec4899', purple: '#8b5cf6', cyan: '#06b6d4' }
      }
    }
  },
  plugins: []
}
