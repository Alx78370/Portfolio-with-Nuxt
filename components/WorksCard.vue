<script setup lang="ts">
import AurheaLogo from "../assets/images/Aurhea-logo.webp";
import TechandCoLogo from "../assets/images/TechandCo-logo.webp";
import DBdecorationLogo from "../assets/images/DB-decoration-logo.webp";
import { useI18n } from "vue-i18n";
import type { Work } from "~/types/Work";

const { t } = useI18n();
const works = computed<Work[]>(() => [
  {
    title: "Aurhea",
    description: t("works.aurhea.description"),
    image: AurheaLogo,
    link: "http://www.alexis-vachet.dev/under-construction",
  },
  {
    title: "Tech&Co",
    description: t("works.techandco.description"),
    image: TechandCoLogo,
    link: "https://techandco.netlify.app/",
  },
  {
    title: "DB decoration",
    description: t("works.dbdecoration.description"),
    image: DBdecorationLogo,
    link: "http://www.alexis-vachet.dev/under-construction",
  },
]);
</script>
<template>
  <div class="md:pb-14">
    <div v-for="(work, index) in works" :key="index" class="xl:px-32">
      <NuxtLink
        :to="work.link"
        :target="
          work.link !== 'http://www.alexis-vachet.dev/under-construction'
            ? '_blank'
            : null
        "
      >
        <article
          class="card lg:card-side bg-white dark:bg-[#171717] shadow-lg mb-10 hover:shadow-darkgreen hover:border-2 hover:border-darkgreen cursor-pointer"
          data-aos="flip-up"
        >
          <figure class="lg:w-1/3">
            <img
              class="w-full h-full object-fill"
              :src="work.image"
              :alt="work.title + ' logo'"
            />
          </figure>
          <div class="card-body lg:w-2/3 lg:px-24">
            <h2 class="card-title text-xl md:text-3xl text-green font-mono">
              {{ work.title }}
            </h2>
            <hr class="" />
            <p class="text-lg md:text-2xl text-black dark:text-slate-200">
              {{ work.description }}
            </p>
          </div>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>
