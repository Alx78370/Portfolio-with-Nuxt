<script setup lang="ts">
import About from '~/components/About.vue';
import WorkCard from '~/components/workCard.vue';

</script>

<template>
    <About />
    <section id="works" class="py-20 px-5 bg-[#212121]">
        <WorkCard />
    </section>
    <section id="contact" class="h-screen py-20 bg-[#171717]">
        <h1 class="text-[#00DC82] text-4xl text-center">Contact</h1>
    </section>
</template>