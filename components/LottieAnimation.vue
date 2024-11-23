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

onMounted(() => {
  if (animationContainer.value) {
    animationInstance = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.animationPath,
    });
  }
});

onBeforeUnmount(() => {
  if (animationInstance) {
    animationInstance.destroy();
  }
});
</script>

<template>
  <div ref="animationContainer" class="flex justify-center items-center w-full h-full"></div>
</template>
