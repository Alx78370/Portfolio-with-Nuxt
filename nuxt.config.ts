export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "alexis-vachet",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Découvrez le portfolio d'Alexis Vachet, un développeur front-end passionné par les nouvelles tendances web. Jetez un œil à ses projets et découvrez son parcours.",
        },
        { hid: "author", name: "author", content: "Alexis Vachet" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Alexis Vachet - Développeur front-end",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Découvrez le portfolio d'Alexis Vachet, un développeur front-end passionné par les nouvelles tendances web. Jetez un œil à ses projets et découvrez son parcours.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/logo_AV.ico",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://alexis-vachet.dev",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Alexis Vachet - Développeur front-end",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Découvrez le portfolio d'Alexis Vachet, un développeur front-end passionné par les nouvelles tendances web. Jetez un œil à ses projets et découvrez son parcours.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/logo_AV.ico",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/ico",
          sizes: "16x16",
          href: "/logo_AV.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "@formkit/nuxt",
    "nuxt-aos",
    "nuxt-mail",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
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
        },
      },
    },
  },
  primevue: {},
  formkit: {
    autoImport: true,
  },
  aos: {
    disable: "phone, mobile",
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 20,
    duration: 800,
    easing: "ease",
  },
});
