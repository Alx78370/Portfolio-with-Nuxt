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
    'nuxt-aos',
    'nuxt-mail'
  ],
  runtimeConfig: {
    mail: {
      message: {
        to: process.env.MAIL_TO,
      },
      smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
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
    offset: 200,
    duration: 200,
    easing: 'ease', 

  }
})