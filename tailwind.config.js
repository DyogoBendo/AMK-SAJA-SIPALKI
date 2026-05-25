/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amk-red': '#D31118',
        'amk-black': '#0A0A0A',
        'amk-white': '#F8F9FA',
        'amk-blue': '#0033A0',
        'amk-green': '#009B3A',
        'amk-yellow': '#FEDF00',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}