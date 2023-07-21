/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
       "Inter":['Inter', 'sans-serif']
      },
      backgroundImage:{
        "gradient-1":"linear-gradient(147.05deg, rgba(255, 237, 190, 0) 64.83%, #FFEDBE 77.53%, #FFBCC3 90.17%)"
      }
    },
  },
  plugins: [],
}
