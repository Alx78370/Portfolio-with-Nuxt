<script setup lang="ts">
import { ref } from 'vue'

const focusedLink = ref('#about')
let isScrolling = false

function setFocus(section: string) {
    focusedLink.value = section
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
})
</script>

<template>
    <nav role="navigation" class="flex fixed bottom-0 justify-between px-12 w-screen py-2 bg-[#171717ac] items-center">
        <a
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('about')"
            @keyup.enter="scrollToSection('about')"
        >
            <Icon
                v-if="focusedLink === '#about'"
                name="material-symbols:other-houses"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:other-houses-outline"
                class="text-5xl text-white"
            />
            <p class="text-white">About</p>
        </a>
        <a
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('works')"
            @keyup.enter="scrollToSection('works')"
        >
            <Icon
                v-if="focusedLink === '#works'"
                name="material-symbols:folder-open"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:folder-open-outline"
                class="text-5xl text-white"
            />
            <p class="text-white">Works</p>
        </a>
        <a
            tabindex="0"
            class="flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('contact')"
            @keyup.enter="scrollToSection('contact')"
        >
            <Icon
                v-if="focusedLink === '#contact'"
                name="material-symbols:call-sharp"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:call-outline-sharp"
                class="text-5xl text-white"
            />
            <p class="text-white">Contact</p>
        </a>
    </nav>
</template>