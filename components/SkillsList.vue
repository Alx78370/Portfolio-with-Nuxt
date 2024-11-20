<template>
  <div class="xl:mt-5" data-aos="fade-up">
    <p>My favorite technologies include:</p>
    <ul class="flex flex-row mt-5 lg:mt-10 justify-between gap-3">
      <li
        data-aos="flip-right"
        data-aos-delay="100"
        class="flex flex-col items-center"
      >
        <Icon
          name="hugeicons:typescript-01"
          class="text-4xl md:text-6xl text-[#00DC82]"
        />
        <p class="text-sm md:text-lg">TypeScript</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="200"
        class="flex flex-col items-center"
      >
        <Icon name="mdi:vuejs" class="text-4xl md:text-6xl text-[#00DC82]" />
        <p class="text-sm md:text-lg">VueJS</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="300"
        class="flex flex-col items-center"
      >
        <Icon
          name="devicon-plain:nuxtjs"
          class="text-4xl md:text-6xl text-[#00DC82]"
        />
        <p class="text-sm md:text-lg">Nuxt</p>
      </li>
      <li
        data-aos="flip-right"
        data-aos-delay="400"
        class="flex flex-col items-center"
      >
        <Icon
          name="simple-icons:tailwindcss"
          class="text-4xl md:text-6xl text-[#00DC82]"
        />
        <p class="text-sm md:text-lg">Tailwind</p>
      </li>
    </ul>
  </div>
</template>
