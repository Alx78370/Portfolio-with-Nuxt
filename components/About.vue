<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <article class="xl:px-32 text-white text-xl font-mono">
    <img
      data-aos="fade-right"
      src="../assets/images/photoAlex.webp"
      alt=""
      style="object-position: top"
      class="float-left w-36 h-48 rounded-3xl object-cover mr-5 mb-5 md:mr-10 md:mb-10 md:w-64 md:h-72"
    />
    <div data-aos="fade-left">
      <div class="pb-5 lg:pb-10">
        <p class="pb-5 lg:pb-10">
          {{ t("hello") }}<span class="text-green"> Alexis Vachet</span> 👋
        </p>
        <p class="pb-5 lg:pb-10">
          {{ t("year.prefix") }}
          <span class="text-green">{{ t("year.highlight") }}</span
          >.
          {{ t("year.training") }}
          <span class="text-green">{{ t("year.internship") }}</span
          >,
          {{ t("year.suffix") }}
        </p>
      </div>
      <p class="pb-5 lg:pb-10">
        {{ t("meetups.prefix") }}
        <span class="text-green">{{ t("meetups.highlight") }}</span
        >,
        {{ t("meetups.suffix") }}
      </p>
      <p class="pb-5 lg:pb-20">
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
    <SkillsList />
  </article>
</template>
