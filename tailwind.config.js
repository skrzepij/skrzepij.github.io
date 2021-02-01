const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      'black-yellow': '#141000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
