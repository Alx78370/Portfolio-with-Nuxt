export default defineNuxtPlugin(() => {
    if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
    }
  });
  