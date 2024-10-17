/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#3956FE',
        secondary: '#3956FE08',
        primaryWhite: '#F1F3FD',
        background: '#F3F2F9',
        bgNav: '#FBFBFD',
        primaryText: '#3B4B66',
        secondaryText: '#3B4B66AD',

        
      },
    },
  },
  plugins: [],
}
