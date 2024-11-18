<script setup lang="ts">
import About from '~/components/About.vue';
import Socials from '~/components/Socials.vue';
import WorkCard from '~/components/WorksCard.vue';

</script>

<template>
    <section id="about" class="py-12 h-screen bg-[#171717] px-5 md:px-32">
        <h1 class="text-[#00DC82] text-4xl text-center mb-10">About</h1>
        <About />
    </section>
    <section id="works" class="py-12 px-5 bg-[#212121] md:px-32">
        <h1 class="text-[#00DC82] text-4xl text-center mb-10 ">Works</h1>
        <WorksCard />
    </section>
    <section id="contact" class="pt-12 h-screen pb-10 bg-[#171717] md:px-32">
        <h1 class="text-[#00DC82] text-4xl text-center mb-10 ">Contact</h1>
        <p class="px-5 font-mono text-xl text-white mb-5 text-justify">Got questions? Feel free to reach out using this form or connect with me on my social media 💬.</p>
        <ContactForm class="mb-10" />
        <Socials />
    </section>
</template>