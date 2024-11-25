<script setup lang="ts">
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";
import { ref, onMounted, onBeforeUnmount } from "vue";

const animationContainer = ref<HTMLDivElement | null>(null);

const props = defineProps({
  animationPath: {
    type: String,
    required: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});

let animationInstance: AnimationItem | null = null;

const stopAutoplay = () => {
  if (animationInstance) {
    animationInstance.pause();
  }
};

const startAutoplay = () => {
  if (animationInstance) {
    animationInstance.play();
  }
};

const loadAnimation = () => {
  if (animationInstance) {
    animationInstance.destroy();
  }

  if (animationContainer.value) {
    animationInstance = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.animationPath,
    });
  }
};

onMounted(() => {
  if (animationContainer.value) {
    animationInstance = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.animationPath,
    });

    animationContainer.value.addEventListener("mouseover", stopAutoplay);
    animationContainer.value.addEventListener("mouseleave", startAutoplay);
  }
});

watch(
  () => props.animationPath,
  () => {
    loadAnimation();
  }
);

onBeforeUnmount(() => {
  if (animationInstance) {
    animationInstance.destroy();
  }

  if (animationContainer.value) {
    animationContainer.value.removeEventListener("mouseover", stopAutoplay);
    animationContainer.value.removeEventListener("mouseleave", startAutoplay);
  }
});
</script>


<template>
  <div ref="animationContainer" class="flex justify-center items-center w-32 h-32"></div>
</template>
