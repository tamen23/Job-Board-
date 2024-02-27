/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '40': '10rem', // Define a custom class for mb-20
      },
    },
  },
  plugins: [],
}

