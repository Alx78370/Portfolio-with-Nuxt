<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <footer class="flex items-center gap-3 justify-center w-full bg-[#171717]">
        <p class="text-white font-mono text-lg text-center">{{ t('dev') }}</p>
        <Icon name="devicon:nuxtjs" class="text-lg"/>
    </footer> 
</template>