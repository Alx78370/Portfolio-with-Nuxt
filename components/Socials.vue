<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex justify-center items-center gap-10">
    <NuxtLink
      to="https://www.linkedin.com/in/alexis-vachet/"
      :aria-label="t('ariaLabel.linkedin')"
      target="_blank"
    >
      <Icon
        name="fa-brands:linkedin"
        class="text-4xl md:text-5xl text-black dark:text-white xl:text-5xl hover:text-green"
      />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/Alx78370"
      :aria-label="t('ariaLabel.github')"
      target="_blank"
    >
      <Icon
        name="fa-brands:github"
        class="text-4xl md:text-5xl text-black dark:text-white xl:text-5xl hover:text-green"
      />
    </NuxtLink>
  </div>
</template>
