<script setup lang="ts">
import AurheaLogo from "../assets/images/Aurhea-logo.webp";
import TechandCoLogo from "../assets/images/TechandCo-logo.webp";
import DBdecorationLogo from "../assets/images/DB-decoration-logo.webp";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const works = computed(() =>[
  {
    title: "Aurhea",
    description: t("works.aurhea.description"),
    image: AurheaLogo,
    link: "http://www.aurhea.com/",
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
    link: "https://dbdecoration.fr/",
  },
]);
</script>
<template>
  <div v-for="work in works" :key="work.title" class="xl:px-32">
    <NuxtLink :to="work.link" target="_blank">
      <article
        class="card lg:card-side bg-[#171717] shadow-xl font-mono mb-10 hover:shadow-[#00DC82] hover:border-2 hover:border-[#00DC82] cursor-pointer"
        data-aos="flip-up"
      >
        <figure class="lg:w-1/3">
          <img
            class="w-full h-full object-fill"
            :src="work.image"
            :alt="work.title + ' logo'"
          />
        </figure>
        <div class="card-body lg:w-2/3">
          <h2 class="card-title text-xl text-[#00DC82]">{{ work.title }}</h2>
          <p class="text-lg text-slate-200 text-justify">
            {{ work.description }}
          </p>
        </div>
      </article>
    </NuxtLink>
  </div>
</template>
