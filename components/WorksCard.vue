<script setup lang="ts">
import AurheaLogo from "../assets/images/Aurhea-logo.webp";
import sacourtage from "../assets/images/SA-Courtage.webp";
import vuejsparis from "../assets/images/Vuejs_Paris.webp";
import { useI18n } from "vue-i18n";
import type { Work } from "~/types/Work";

const { t } = useI18n();
const works = computed<Work[]>(() => [
  {
    title: "Vue.js Paris",
    description: t("works.vuejsparis.description"),
    image: vuejsparis,
    link: "https://vuejsparis.netlify.app/",
  },
  {
    title: "SA Courtage",
    description: t("works.sacourtage.description"),
    image: sacourtage,
    link: "http://www.sa-couratge.com",
  },
  {
    title: "Aurhea",
    description: t("works.aurhea.description"),
    image: AurheaLogo,
    link: "http://www.alexis-vachet.dev/under-construction",
  },
]);
</script>
<template>
  <div class="md:pb-14">
    <div v-for="(work, index) in works" :key="index" class="xl:px-32">
      <NuxtLink :to="work.link" :target="work.link !== 'http://www.alexis-vachet.dev/under-construction'
        ? '_blank'
        : null
        ">
        <article
          class="group card lg:card-side bg-white dark:bg-[#171717] shadow-lg mb-10  border-2 border-slate-900 cursor-pointer md:min-h-56"
          data-aos="flip-up">
          <figure class="lg:w-1/3">
            <img
              class="w-full h-full object-fill group-hover:scale-105 overflow-hidden group-hover:duration-300 group-hover:ease-in-out"
              :src="work.image" :alt="work.title + ' logo'" />
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
