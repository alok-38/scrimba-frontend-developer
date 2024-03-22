/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-laura': "url('/src/assets/laura.png')",
      },
      backgroundColor: {
        'blue': "#1A1B21",
      },
    },
  },
  plugins: [],
}