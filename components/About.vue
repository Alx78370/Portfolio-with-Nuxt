<script setup lang="ts"></script>

<template>
  <article class="xl:px-32 text-white text-xl font-mono text-justify">
    <img
      data-aos="fade-right"
      data-aos-delay="500"
      role="presentation"
      src="../assets/images/photoAlex.webp"
      alt="Alexis Vachet photo"
      style="shape-outside: circle(50%)"
      class="float-left w-48 h-48 rounded-full object-cover mr-10 md:w-64 md:h-64"
    />
    <div data-aos="fade-left" data-aos-delay="500">
      <div class="pb-5 lg:pb-10">
        <p class="pb-5 lg:pb-10">Hello, I'm <span class="text-[#00DC82]">Alexis Vachet</span> 👋</p>
        <p>
          A year ago, I set myself the challenge of becoming a
          <span class="text-[#00DC82]">Front-End Developer</span>. After an
          intensive training program at
          <span class="text-[#00DC82]">DonkeySchool</span> and successfully
          completing an internship for a new dating site,
          <span class="text-[#00DC82]">Aurhéa</span>, I'm continuing my journey
          as a <span class="text-[#00DC82]">Developer</span> 💻.
        </p>
      </div>
      <p class="pb-5 lg:pb-20">
        You can often find me at various
        <span class="text-[#00DC82]">meetups in Paris</span>, eager to learn
        more and connect with new people 🤝.
      </p>
      <p class="pb-5 lg:pb-20">
        Feel free to
        <a
          href="#contact"
          class="text-[#00DC82] cursor-pointer underline underline-offset-2 hover:text-[#00dc8089]"
          >reach out</a
        >
        if you'd like to chat about
        <span class="text-[#00DC82]">tech</span> or discuss a
        <span class="text-[#00DC82]">project</span> ✨️.
      </p>
    </div>
    <SkillsList />
  </article>
</template>
