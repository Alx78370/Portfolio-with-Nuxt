<script setup lang="ts">
import AurheaLogo from "../assets/images/Aurhea-logo.webp";
import TechandCoLogo from "../assets/images/TechandCo-logo.webp";
import DBdecorationLogo from "../assets/images/DB-decoration-logo.webp";
const works = ref([
  {
    title: "Aurhea",
    description:
      "Dating site developed using Angular and Symfony. Still under development.",
    image: AurheaLogo,
    link: "",
  },
  {
    title: "Tech&Co",
    description: "Tech blog developed using Vite and VueJS. ",
    image: TechandCoLogo,
    link: "https://techandco.netlify.app/",
  },
  {
    title: "DB decoration",
    description:
      "Showcase website for a craftsman/painter developed with WordPress.",
    image: DBdecorationLogo,
    link: "",
  },
]);
</script>
<template>
  <div v-for="work in works" :key="work.title">
    <div v-if="work.link">
      <NuxtLink :to="work.link" target="_blank">
        <article
          class="card lg:card-side bg-[#171717] shadow-xl font-mono mb-10"
        >
          <figure>
            <img :src="work.image" :alt="work.title + ' logo'" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl text-[#00DC82]">{{ work.title }}</h2>
            <p class="text-lg text-slate-200">{{ work.description }}</p>
          </div>
        </article>
      </NuxtLink>
    </div>
    <div v-else>
      <article class="card lg:card-side bg-[#171717] shadow-xl font-mono mb-5">
        <figure>
          <img :src="work.image" :alt="work.title + ' logo'" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-xl text-[#00DC82]">{{ work.title }}</h2>
          <p class="text-lg text-slate-200">{{ work.description }}</p>
          <p class="text-red-500 text-lg">
            The site is not available at the moment.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
