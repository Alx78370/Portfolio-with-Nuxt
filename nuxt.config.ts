export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@primevue/nuxt-module', '@nuxt/icon', '@formkit/nuxt'],
  primevue: {
  },
  formkit: {
    autoImport: true
  }
})