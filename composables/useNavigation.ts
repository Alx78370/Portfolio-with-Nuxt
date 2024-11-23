import { ref, onMounted, onUnmounted } from "vue";

export function useNavigation(sections: string[], defaultSection = "#about") {
  const focusedLink = ref(defaultSection);
  let isScrolling = false;

  function setFocus(section: string) {
    focusedLink.value = section;
    if (window.location.hash !== section) {
      history.replaceState(null, "", section);
    }
  }

  function scrollTo(targetSelector: string, offset = 0) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      isScrolling = true;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    }
  }

  function handleScroll() {
    if (isScrolling) return;

    let currentSection = defaultSection;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = `#${sectionId}`;
        }
      }
    });

    if (currentSection) {
      setFocus(currentSection);
    }
  }

  function startListening() {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  function stopListening() {
    window.removeEventListener("scroll", handleScroll);
  }

  return {
    focusedLink,
    scrollTo,
    setFocus,
    startListening,
    stopListening,
  };
}
