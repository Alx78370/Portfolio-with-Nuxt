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
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/icon',
    '@formkit/nuxt', 
    ['nuxt-mail', {
      message: {
        to: process.env.NUXT_MAIL_TO,
      },
      smtp: {
        host: process.env.NUXT_MAIL_HOST,
        port: process.env.NUXT_MAIL_PORT,
        auth: {
          user: process.env.NUXT_MAIL_TO,
          pass: process.env.NUXT_MAIL_PASS,
        },
      },
    }],
  ],
  primevue: {
  },
  formkit: {
    autoImport: true
  }
})