/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-unused-vars
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
