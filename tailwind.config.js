/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      minHeight: {
        "screen-75": "75vh",
        "screen-20": "20vh"
      },
      lineHeight: {
        "max-4": "4rem"
      },
      backgroundColor: {
        "blue-dark": "#080b2c"
      },
      colors: {
        "blue-dark": "#080b2c"
      },
      
    },
    fontFamily: {
      "luminari": "Luminari"
    },
  },
  plugins: [],
}
