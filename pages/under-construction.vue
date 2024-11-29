<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">{{ t("underConstruction.title") }}</h1>
    <p class="text-lg mt-4">{{ t("underConstruction.message") }}</p>
    <NuxtLink
      to="https://alexis-vachet.dev/#works"
      class="underline text-white mt-16"
    >
      {{ t("underConstruction.backToPortfolio") }}
    </NuxtLink>
  </div>
</template>
