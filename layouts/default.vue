<script setup lang="ts">

</script>
<template>
    <header>
        <NavBar />
        <ToggleLang />
        <ToggleDarkMode />
    </header>
    <main role="main">
        <slot />
    </main>
    <Footer class="pb-24 md:pb-5" />
</template>