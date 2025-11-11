/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-yellow': '#FACC15',
        'dark-bg': '#0D1117',
        'dark-card': '#161B22',
        'dark-lines': '#30363D',
        'primary-text': '#E6EDF3',
        'secondary-text': '#8B949E',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        picture: '5px 5px 10px #000',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.primary-text-color': {
          color: '#E6EDF3',
        },
        '.secondary-text-color': {
          color: '#8B949E',
        },
        '.accent-yellow': {
          color: '#FACC15',
        },
        '.bg-accent-yellow': {
          'background-color': '#FACC15',
        },
        '.border-accent-yellow': {
          'border-color': '#FACC15',
        },
        '.hover-bg-accent-yellow-darker:hover': {
          'background-color': '#F59E0B',
        },
        '.hover-text-accent-yellow-darker:hover': {
          color: '#F59E0B',
        },
        '.bg-dark-card': {
          'background-color': '#161B22',
        },
        '.border-dark-lines': {
          'border-color': '#30363D',
        },
      });
    },
  ],
  corePlugins: {
    dropShadow: false,
  },
};
