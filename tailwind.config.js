/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '200%': '200%',
      '16': '4rem',
    },
    extend: {},

  },
  backgroundColor: {
    "gray": "#FFF8F8"
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}