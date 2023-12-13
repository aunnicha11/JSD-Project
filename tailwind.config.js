/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'GSwhite': '#F2F2F2',
      'GSblack': '#3A3A3A',
      'GSgreen': '#AEC281',
      'GSbg': '#8BCA00',
      'GSlightgreen': '#D2FE71',
    },
    fontFamily: {
      GSfont: ['Poppin', 'sans-serif'],
    },
  },
  plugins: [],
}