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
        class="flex flex-col items-center gap-1 absolute md:fixed top-5 right-5 md:top-60 md:right-5 z-10" 
        @click="toggleLocale" 
        tabindex="0" 
        :aria-label="t('ariaLabel.toggleLang')">
        <Icon
            :name="locale === 'en' ? flags.en.icon || flags.en.text : flags.fr.icon || flags.fr.text"
            class="w-6 h-6 md:w-10 md:h-10 hover:border-2 hover:border-[#00DC82] rounded-full"
        />
        <p class="text-xs text-white font-mono md:w-14">
            {{ locale === 'en' ? flags.en.text : flags.fr.text }}
        </p>
    </button>
</template>