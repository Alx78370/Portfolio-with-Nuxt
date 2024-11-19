<script setup lang="ts">
import About from "~/components/About.vue";
import Socials from "~/components/Socials.vue";
import WorksCard from "~/components/WorksCard.vue";
</script>

<template>
  <section
    id="about"
    class="py-12 lg:py-20 md:h-screen bg-[#171717] px-5 sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1 class="text-[#00DC82] text-6xl text-center mb-20" data-aos="fade-down">
      About
    </h1>
    <About />
  </section>
  <section
    id="works"
    class="py-12 md:h-screen px-5 bg-[#212121] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1 class="text-[#00DC82] text-4xl text-center mb-10" data-aos="fade-down">Works</h1>
    <WorksCard />
  </section>
  <section
    id="contact"
    class="pt-12 md:h-screen pb-10 bg-[#171717] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1 class="text-[#00DC82] text-4xl text-center mb-10" data-aos="fade-down">Contact</h1>
    <p class="px-5 xl:px-32 font-mono text-xl text-white mb-5 text-justify">
      Got questions? Feel free to reach out using this form or connect with me
      on my social media 💬.
    </p>
    <ContactForm class="mb-10" />
    <Socials />
  </section>
</template>
