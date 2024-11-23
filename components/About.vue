<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <article class="xl:px-32 text-white text-xl">
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
      <div data-aos="fade-down">
        <p class="pb-5 md:text-2xl lg:pb-20">
          {{ t("challenge.part1") }}
          <span class="whitespace-nowrap">
            <span class="text-green">{{ t("challenge.highlight1") }}</span>
          </span>.
          {{ t("challenge.part2") }}
          <span class="text-green">{{ t("challenge.highlight2") }}</span>
          {{ t("challenge.part3") }}
          <span class="whitespace-nowrap">
            <span class="text-green">{{ t("challenge.highlight3") }}</span>
          </span>,
          {{ t("challenge.part4") }}
          <span class="whitespace-nowrap">
            <span class="text-green">{{ t("challenge.highlight4") }}</span>
          </span>,
          {{ t("challenge.part5") }}
        </p>
        <p class="pb-5 md:text-2xl">
          {{ t("contactPrefix") }}
          <a
            href="#contact"
            class="text-green md:text-2xl cursor-pointer underline underline-offset-2 hover:text-darkgreen"
          >
            {{ t("contactLink") }}
          </a>
          {{ t("contactSuffix") }}
        </p>
      </div>
    </div>
  </article>
</template>
