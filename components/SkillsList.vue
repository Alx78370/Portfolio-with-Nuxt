<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div data-aos="fade-up">
    <ul class="flex flex-row justify-between gap-3">
      <li
        data-aos="flip-right"
        data-aos-delay="100"
        class="flex flex-col items-center"
      >
        <Icon
          name="hugeicons:typescript-01"
          class="text-4xl md:text-5xl text-green"
        />
        <p class="text-sm">TypeScript</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="200"
        class="flex flex-col items-center"
      >
        <Icon name="mdi:vuejs" class="text-4xl md:text-5xl text-green" />
        <p class="text-sm">VueJS</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="300"
        class="flex flex-col items-center"
      >
        <Icon
          name="devicon-plain:nuxtjs"
          class="text-4xl md:text-5xl text-green"
        />
        <p class="text-sm">Nuxt</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="400"
        class="flex flex-col items-center"
      >
        <Icon
          name="simple-icons:tailwindcss"
          class="text-4xl md:text-5xl text-green"
        />
        <p class="text-sm">Tailwind</p>
      </li>
    </ul>
  </div>
</template>
