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
    boxShadow: {
      picture: '5px 5px 10px #000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    dropShadow: false,
  },
}
