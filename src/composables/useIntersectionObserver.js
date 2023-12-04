import { ref, onMounted } from 'vue';
export default function useIntersectionObserver(cssClass) {
  const observer = ref(null);
  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '20px',
      threshold: 0.5,
    });
  });

  function observe(element) {
    observer.value.observe(element);
  }

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.classList.add(cssClass);
        observer.value.unobserve(entry.target);
      }
    });
  }

  return {
    observe,
  };
}
