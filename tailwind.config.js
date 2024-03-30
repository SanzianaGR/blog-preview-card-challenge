/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      colors: {
       'custom-yellow': "hsl(47, 88%, 63%)",
       'custom-white': 'hsl(0, 0%, 100%)',
       'custom-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        'Figtree': ['Figtree', 'sans'],
      },
    },
  },
  plugins: [],
}


// - White: hsl(0, 0%, 100%)
// - Grey: hsl(0, 0%, 50%)
// - Black: hsl(0, 0%, 7%)