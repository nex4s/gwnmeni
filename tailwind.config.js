/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 5px 9px rgba(0, 0, 0, 0.8)',
        '4xl': [
            '0 35px 35px rgba(134, 134, 134, 0.8)',
            '0 45px 65px rgba(134, 134, 134, 0.8)'
        ]
      },
      backdropBlur: {
        '3xl': '30px', // Example custom value
      },
      backgroundImage: {
        'background': "url('/7135.png')"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        headerText: colors.white
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',  // Ensure 1024px is covered
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
