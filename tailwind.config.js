/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./src/styles/Colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: COLORS.headerBg,
        mainBg: COLORS.mainBg,
        golden: COLORS.golden,
        white: COLORS.white,
        heroBg: COLORS.heroBg,
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
