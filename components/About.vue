<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <article class="xl:px-56 text-white text-xl font-mono">
    <div class="flex flex-col-reverse md:flex-row gap-10">
      <div class="flex flex-col min-w-fit">
        <img
          data-aos="fade-right"
          src="../assets/images/photoAlex.webp"
          alt=""
          style="object-position: top"
          class="w-fit rounded-3xl object-cover mb-5 md:w-80 md:h-96"
        />
        <SkillsList />
      </div>
      <div data-aos="fade-left">
        <p class="pb-5 lg:pb-32">
          {{ t("challenge") }}
        </p>
        <p class="pb-5">
          {{ t("contactPrefix") }}
          <a
            href="#contact"
            class="text-green cursor-pointer underline underline-offset-2 hover:text-darkgreen"
          >
            {{ t("contactLink") }}
          </a>
          {{ t("contactSuffix") }}
        </p>
      </div>
    </div>
  </article>
</template>
