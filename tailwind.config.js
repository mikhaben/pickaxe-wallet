/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/pages/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/App.vue"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
      pixel: ['PixelOperator', 'roboto', 'sans-serif'],
      'pixel-sc': ['PixelOperatorSC', 'roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

