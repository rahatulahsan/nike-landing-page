/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Palanquin', 'sans-serif'],
    },
    extend: {
      colors : {
        'nikeorange' : '#ff6452',
        'bgpale'     : '#f5f6ff'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}