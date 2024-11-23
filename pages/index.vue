<script setup lang="ts">
import About from "~/components/About.vue";
import Socials from "~/components/Socials.vue";
import WorksCard from "~/components/WorksCard.vue";
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
  <section
    id="about"
    class="relative py-16 lg:py-20 md:h-screen bg-[#171717] px-5 sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <div
      class="flex flex-col justify-center md:justify-start md:pl-32 mb-20 xl:mb-32 w-full"
      data-aos="fade-down"
    >
      <h1 class="text-green text-5xl md:text-8xl font-mono">
        {{ t("developer") }}
      </h1>
      <p class="text-white text-3xl md:text-7xl font-mono">Alexis Vachet</p>
    </div>
    <About />
    <div
      class="hidden md:flex justify-center items-center group absolute inset-x-0 bottom-0"
    >
      <LottieAnimation
        tabindex="0"
        :aria-label="t('ariaLabel.scrollToPortfolio')"
        animationPath="/lottieAnimations/arrow-down.json"
        :loop="true"
        :autoplay="true"
        class="w-32 cursor-pointer transition-transform duration-100 group-hover:scale-125"
        @click="
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
      />
    </div>
  </section>
  <section
    id="works"
    class="relative py-12 px-5 bg-[#212121] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1
      class="text-green text-5xl text-center mb-10 font-mono"
      data-aos="fade-down"
    >
      Portfolio
    </h1>
    <WorksCard />
    <div
      class="hidden md:flex justify-center items-center group absolute inset-x-0 bottom-0"
    >
      <LottieAnimation
        tabindex="0"
        :aria-label="t('ariaLabel.scrollToContact')"
        animationPath="/lottieAnimations/arrow-down.json"
        :loop="true"
        :autoplay="true"
        class="w-32 cursor-pointer transition-transform duration-100 group-hover:scale-125"
        @click="
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
      />
    </div>
  </section>
  <section
    id="contact"
    class="relative pt-12 md:h-screen pb-10 lg:py-40 bg-[#171717] sm:px-12 md:px-32 lg:px-40 xl:px-54 xxl:px-96"
  >
    <h1
      class="text-green text-5xl text-center mb-20 font-mono"
      data-aos="fade-down"
    >
      Contact
    </h1>
    <p
      data-aos="fade-right"
      class="px-5 xl:px-32 text-xl md:text-2xl text-white mb-5"
    >
      {{ t("questions") }}
    </p>
    <ContactForm class="mb-20" />
    <Socials />
    <div
    class="hidden md:flex md:justify-center md:items-center group md:absolute md:right-0 md:bottom-0 md:rotate-180 md:box-content"
  >
    <LottieAnimation
      tabindex="0"
      :aria-label="t('ariaLabel.scrollToTop')"
      animationPath="/lottieAnimations/arrow-down.json"
      :loop="true"
      :autoplay="true"
      class="cursor-pointer transition-transform duration-100 group-hover:scale-125"
      @click="
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
    />
  </div>
  </section>
</template>
