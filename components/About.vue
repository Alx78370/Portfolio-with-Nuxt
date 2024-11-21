<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <article class="xl:px-32 text-white text-xl font-mono">
    <img
      data-aos="fade-right"
      src="../assets/images/photoAlex.webp"
      alt=""
      style="shape-outside: circle(50%)"
      class="float-left w-48 h-48 rounded-full object-cover mr-10 md:w-64 md:h-64"
    />
    <div data-aos="fade-left">
      <div class="pb-5 lg:pb-10">
        <p class="pb-5 lg:pb-10">{{ t('hello') }}<span class="text-[#00DC82]"> Alexis Vachet</span> 👋</p>
        <p v-html="t('year')">
        </p>
      </div>
      <p class="pb-5 lg:pb-20" v-html="t('meetups')"></p>
      <p class="pb-5 lg:pb-20" v-html="t('contact')"></p>
    </div>
    <SkillsList />
  </article>
</template>
