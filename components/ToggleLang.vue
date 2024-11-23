<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, setLocale, t } = useI18n();

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'fr' : 'en');
}

const flags = {
    en: {
        icon: "circle-flags:gb",
        text: "En ",
    },
    fr: {
        icon: "circle-flags:fr",
        text: "Fr",
    }
};
</script>

<template>
    <button 
        class="absolute md:fixed top-5 right-7 md:top-60 md:right-7 z-10" 
        @click="toggleLocale" 
        tabindex="0" 
        :aria-label="t('ariaLabel.toggleLang')">
        <Icon
            :name="locale === 'en' ? flags.en.icon : flags.fr.icon"
            class="w-6 h-6 md:w-10 md:h-10 hover:border-2 hover:border-green rounded-full"
        />
    </button>
</template>