/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {},

  },
  backgroundColor: {
    "gray": "#FFF8F8"
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}