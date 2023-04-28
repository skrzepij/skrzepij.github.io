const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        md: '1.05rem',
      },
      colors: {
        'black-yellow': '#141000',
        'gray-light': '#484848',
      },
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
