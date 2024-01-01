const colors = require('tailwindcss/colors');
const MuiColors = require('@mui/material/colors'); 
console.log(MuiColors);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./temp/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {...MuiColors.blue, DEFAULT: MuiColors.blue[600]},
      }
    },
  },
  plugins: [],
}

