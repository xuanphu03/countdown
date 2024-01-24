/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      Caramel: ['Caramel', 'sans-serif'],
      Lobster: ['Lobster', 'sans-serif'],
      Fredoka: ['Fredoka One', 'sans-serif'],
    },
  },
};
