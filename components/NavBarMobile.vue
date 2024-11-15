<script setup="ts">
import { ref } from 'vue'

const focusedLink = ref('#section1')

function setFocus(section) {
    focusedLink.value = section
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        setFocus(`#${sectionId}`)
    }
}

function handleScroll() {
    const sections = ['section1', 'section2', 'section3']
    let currentSection = '#section1'

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
    <nav class="flex fixed bottom-0 justify-between px-12 w-screen py-2 bg-[#13131361] items-center">
        <a
            class="group flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('section1')"
        >
            <Icon
                v-if="focusedLink === '#section1'"
                name="material-symbols:other-houses"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:other-houses-outline"
                class="text-5xl text-white"
            />
            <p class="text-white group-focus:underline group-focus:underline-offset-3">About</p>
        </a>
        <a
            class="group flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('section2')"
        >
            <Icon
                v-if="focusedLink === '#section2'"
                name="material-symbols:folder-open"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:folder-open-outline"
                class="text-5xl text-white"
            />
            <p class="text-white group-focus:underline group-focus:underline-offset-3">Works</p>
        </a>
        <a
            class="group flex flex-col items-center text-xs cursor-pointer"
            @click="scrollToSection('section3')"
        >
            <Icon
                v-if="focusedLink === '#section3'"
                name="material-symbols:call-sharp"
                class="text-5xl text-white"
            />
            <Icon
                v-else
                name="material-symbols:call-outline-sharp"
                class="text-5xl text-white"
            />
            <p class="text-white group-focus:underline group-focus:underline-offset-3">Contact</p>
        </a>
    </nav>
</template>