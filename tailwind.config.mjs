/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-yellow': 'var(--color-accent-yellow)',
        'accent-yellow-darker': 'var(--color-accent-yellow-darker)',
        'dark-bg': 'var(--color-dark-bg)',
        'dark-card': 'var(--color-dark-card)',
        'dark-lines': 'var(--color-dark-lines)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
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
