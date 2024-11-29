<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const hideNavBarRoutes = ["under-construction"];
</script>

<template>
  <header>
    <NavBar
      v-if="route.name && !hideNavBarRoutes.includes(route.name.toString())"
    />
    <ToggleLang
      v-if="route.name && !hideNavBarRoutes.includes(route.name.toString())"
    />
    <ToggleDarkMode
      v-if="route.name && !hideNavBarRoutes.includes(route.name.toString())"
    />
  </header>
  <main role="main">
    <slot />
  </main>
  <Footer class="pb-24 md:pb-5" />
</template>
