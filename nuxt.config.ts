export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'alexis-vachet',
      htmlAttrs: { lang: 'en' },
      meta: [
        { hid: 'description', name: 'description', content: 'Portfolio - Développeur front-end - Alexis Vachet' },
        { hid: 'author', name: 'author', content: 'Alexis Vachet' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@primevue/nuxt-module', '@nuxt/icon', '@formkit/nuxt', 'nuxt-aos', 'nuxt-mail', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    mail: {
      message: {
        to: process.env.NUXT_MAIL_TO,
      },
      smtp: {
        host: process.env.NUXT_SMTP_HOST,
        port: process.env.NUXT_SMTP_PORT,
        auth: {
          user: process.env.NUXT_MAIL_USER,
          pass: process.env.NUXT_MAIL_PASS,
        }
      }
    }
  },
  primevue: {
  },
  formkit: {
    autoImport: true
  },
  aos: {
    disable: 'phone, mobile',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 20,
    duration: 800,
    easing: 'ease', 

  }
})