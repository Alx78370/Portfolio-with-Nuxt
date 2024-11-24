<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useNavigation } from "~/composables/useNavigation";

const { t } = useI18n();
const { focusedLink, scrollTo, setFocus, startListening, stopListening } =
  useNavigation(["about", "works", "contact"]);

onMounted(() => {
  startListening();
});

onUnmounted(() => {
  stopListening();
});
</script>

<template>
  <nav
    role="navigation"
    class="flex fixed bottom-0 justify-between px-12 w-screen py-2 bg-[#FFFFFFac] dark:bg-[#171717ac] items-center md:flex-col md:w-24 md:px-4 md:right-0 md:inset-y-0 md:bg-transparent md:h-52 md:gap-3 z-20"
  >
      <a
        href="#about"
        tabindex="0"
        class="flex flex-col items-center text-xs cursor-pointer"
        @click.prevent="
          () => {
            scrollTo('#about');
            setFocus('#about');
          }
        "
        @keyup.enter="
          () => {
            scrollTo('#about');
            setFocus('#about');
          }
        "
      >
        <Icon
          v-if="focusedLink === '#about'"
          name="material-symbols:other-houses"
          class="text-3xl md:text-5xl text-green"
        />
        <Icon
          v-else
          name="material-symbols:other-houses-outline"
          class="text-3xl md:text-5xl text-green"
        />
        <p class="text-black dark:text-white">{{ t("about") }}</p>
      </a>
      <a
        href="#works"
        tabindex="0"
        class="flex flex-col items-center text-xs cursor-pointer"
        @click.prevent="
          () => {
            scrollTo('#works');
            setFocus('#works');
          }
        "
        @keyup.enter="
          () => {
            scrollTo('#works');
            setFocus('#works');
          }
        "
      >
        <Icon
          v-if="focusedLink === '#works'"
          name="material-symbols:folder-open"
          class="text-3xl md:text-5xl text-green"
        />
        <Icon
          v-else
          name="material-symbols:folder-open-outline"
          class="text-3xl md:text-5xl text-green"
        />
        <p class="text-black dark:text-white">Portfolio</p>
      </a>
      <a
        href="#contact"
        tabindex="0"
        class="flex flex-col items-center text-xs cursor-pointer"
        @click.prevent="
          () => {
            scrollTo('#contact');
            setFocus('#contact');
          }
        "
        @keyup.enter="
          () => {
            scrollTo('#contact');
            setFocus('#contact');
          }
        "
      >
        <Icon
          v-if="focusedLink === '#contact'"
          name="material-symbols:call-sharp"
          class="text-3xl md:text-5xl text-green"
        />
        <Icon
          v-else
          name="material-symbols:call-outline-sharp"
          class="text-3xl md:text-5xl text-green"
        />
        <p class="text-black dark:text-white">Contact</p>
      </a>
  </nav>
</template>
