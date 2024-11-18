import type { Mail } from 'nuxt-mail'

declare module '#app' {
  interface NuxtApp {
    $mail: Mail
  }
}

export {}