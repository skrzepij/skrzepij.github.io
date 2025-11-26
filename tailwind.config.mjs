/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-yellow': '#FACC15',
        'accent-yellow-darker': '#F59E0B',
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
  plugins: [],
  corePlugins: {
    dropShadow: false,
  },
};
