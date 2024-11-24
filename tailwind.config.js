/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./formkit.theme.ts",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'green': '#00DC82',
        'darkgreen': '#00A66B',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
    },
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark'], 
  },
}

