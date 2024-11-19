<script setup lang="ts"></script>

<template>
  <article class="xl:px-32 text-white text-xl font-mono text-justify">
    <div data-aos="fade-right">
      <img
        role="presentation"
        src="../assets/images/photoAlex.webp"
        alt="Alexis Vachet photo"
        style="shape-outside: circle(50%)"
        class="float-left w-48 h-48 rounded-full object-cover mr-10 md:w-64 md:h-64"
      />

      <div>
        <p>Hello, I'm <span class="text-[#00DC82]">Alexis Vachet</span> 👋</p>
        <br />
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

      <br />
      <p>
        You can often find me at various
        <span class="text-[#00DC82]">meetups in Paris</span>, eager to learn
        more and connect with new people 🤝.
      </p>
      <br />
      <div class="xl:mt-5">
        <p>My favorite technologies include:</p>
        <ul class="text-[#00DC82] mt-2 ml-3">
          <li class="flex items-center gap-3">
            <Icon name="devicon:typescript" class="text-xl" />
            <p>TypeScript</p>
          </li>
          <li class="flex items-center gap-3">
            <Icon name="devicon:vuejs" class="text-xl" />
            <p>VueJS</p>
          </li>
          <li class="flex items-center gap-3">
            <Icon name="devicon:nuxtjs" class="text-xl" />
            <p>Nuxt</p>
          </li>
          <li class="flex items-center gap-3">
            <Icon name="devicon:tailwindcss" class="text-xl" />
            <p>TailwindCss</p>
          </li>
        </ul>

        <br />
        <p>
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
    </div>
  </article>
</template>
