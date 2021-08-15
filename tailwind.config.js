const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        md: '1.05rem',
      },
    },
    colors: {
      ...colors,
      'black-yellow': '#141000',
      'gray-light': '#484848',
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
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
