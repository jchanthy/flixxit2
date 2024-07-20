/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}


// module.exports = {
//   content: [
//     'node_modules/daisyui/dist/**/*.js',
//     'node_modules/react-daisyui/dist/**/*.js',
//   ],
//   plugins: [require('daisyui')],
// }