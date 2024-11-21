<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const focusedLink = ref('#about')
let isScrolling = false

function setFocus(section: string) {
    focusedLink.value = section
    if (window.location.hash !== section) {
        history.replaceState(null, '', section)
    }
}

function scrollToSection(sectionId: string) {
    setFocus(`#${sectionId}`)
    isScrolling = true 

    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            isScrolling = false
        }, 500)
    }
}

function handleScroll() {
    if (isScrolling) return

    const sections = ['about', 'works', 'contact']
    let currentSection = '#about'

    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = `#${sectionId}`
            }
        }
    })

    if (currentSection) {
        setFocus(currentSection)
    } 
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    handleScroll()
})
</script>

<template>
    <nav role="navigation" class="flex fixed bottom-0 justify-between px-12 w-screen py-2 bg-[#171717ac] items-center md:flex-col md:w-24 md:px-4 md:right-0 md:inset-y-0 md:bg-transparent md:h-52 md:gap-3 z-20">
        <a
            href="#about"
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click.prevent="scrollToSection('about')"
            @keyup.enter="scrollToSection('about')"
        >
            <Icon
                v-if="focusedLink === '#about'"
                name="material-symbols:other-houses"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <Icon
                v-else
                name="material-symbols:other-houses-outline"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <p class="text-white">{{ t('about') }}</p>
        </a>
        <a
            href="#works"
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click.prevent="scrollToSection('works')"
            @keyup.enter="scrollToSection('works')"
        >
            <Icon
                v-if="focusedLink === '#works'"
                name="material-symbols:folder-open"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <Icon
                v-else
                name="material-symbols:folder-open-outline"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <p class="text-white">Portfolio</p>
        </a>
        <a
            href="#contact"
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click.prevent="scrollToSection('contact')"
            @keyup.enter="scrollToSection('contact')"
        >
            <Icon
                v-if="focusedLink === '#contact'"
                name="material-symbols:call-sharp"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <Icon
                v-else
                name="material-symbols:call-outline-sharp"
                class="text-3xl md:text-5xl text-[#00DC82]"
            />
            <p class="text-white">Contact</p>
        </a>
    </nav>
</template>