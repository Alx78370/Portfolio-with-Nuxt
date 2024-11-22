<script setup lang="ts">
import About from "~/components/About.vue";
import Socials from "~/components/Socials.vue";
import WorksCard from "~/components/WorksCard.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    id="about"
    class="py-12 lg:py-20 md:h-screen bg-[#171717] px-5 sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-84"
  >
  <div class="flex flex-col justify-start px-56 mb-20 w-full font-mono" data-aos="fade-down">
    <h1 class="text-green text-8xl" >
      {{ t('developer')}}
      
    </h1>
    <p class="text-white text-6xl">
      Alexis Vachet
    </p>
  </div>
    
    <About />
  </section>
  <section
    id="works"
    class="py-12 md:h-screen px-5 bg-[#212121] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1 class="text-green text-6xl text-center mb-20" data-aos="fade-down">Portfolio</h1>
    <WorksCard />
  </section>
  <section
    id="contact"
    class="pt-12 md:h-screen pb-10 lg:py-40 bg-[#171717] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1 class="text-green text-6xl text-center mb-20" data-aos="fade-down">Contact</h1>
    <p data-aos="fade-right" class="px-5 xl:px-32 font-mono text-xl text-white mb-5">
      {{ t('questions') }}
    </p>
    <ContactForm class="mb-20" />
    <Socials />
  </section>
</template>
