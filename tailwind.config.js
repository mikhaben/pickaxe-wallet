/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['PixelOperator', 'roboto', 'sans-serif'],
        'pixel-sc': ['PixelOperatorSC', 'roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

