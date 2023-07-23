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
        "gradient-1":"linear-gradient(147.05deg, rgba(255, 237, 190, 0) 64.83%, #FFEDBE 77.53%, #FFBCC3 90.17%)",
        "gradient-2":"radial-gradient(50% 50% at 50% 50%, #C9EFB2 31.77%, #CDFFEA 65.1%, rgba(205, 255, 234, 0) 100%)",
        "gradient-3":"radial-gradient(50% 50% at 50% 50%, #B9EEFF 26.04%, #EDFAFF 61.98%, rgba(237, 250, 255, 0) 100%)",
        "gradient-4":"radial-gradient(50% 50% at 50% 50%, #E7D4FF 26.56%, #E5EBFF 61.98%, rgba(229, 235, 255, 0) 100%)",
        "gradient-5":"linear-gradient(147.05deg, rgba(241, 255, 201, 0) 64.83%, #F1FFC9 77.53%, #C5F3E5 90.17%)"
      },
      screens:{
        "md2":"1240px",
        "md3":"1024px"
      }
    },
  },
  plugins: [],
}
