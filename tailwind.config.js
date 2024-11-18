/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ultra: ['Stint Ultra Expanded'],
        grotesk: ['Familjen Grotesk'],
        rubik: ['Rubik Spray Paint'],
        nunito: ['Nunito Sans'],
        gilroy: ['Gilroy-Regular']
      }
    },
  },
  plugins: [],
}