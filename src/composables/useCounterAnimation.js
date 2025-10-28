import { ref, onMounted, onUnmounted } from 'vue'

export default function useCounterAnimation() {
  const observers = ref([])

  /**
   * Anima un número desde 0 hasta su valor final
   * @param {HTMLElement} element - Elemento que contiene el número
   * @param {number} endValue - Valor final del contador
   * @param {number} duration - Duración de la animación en ms
   * @param {string} suffix - Sufijo opcional (ej: '%', 'x')
   */
  function animateCounter(element, endValue, duration = 2000, suffix = '') {
    if (!element) return

    const startTime = performance.now()
    const startValue = 0

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function: ease-out cubic para suavidad
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOut

      // Formatear el valor dependiendo si es decimal o entero
      if (endValue % 1 !== 0) {
        element.textContent = currentValue.toFixed(1) + suffix
      } else {
        element.textContent = Math.floor(currentValue) + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        // Asegurar que se muestre el valor final exacto
        element.textContent = endValue + suffix
      }
    }

    requestAnimationFrame(updateCounter)
  }

  /**
   * Observa un elemento y activa la animación cuando entra en el viewport
   * @param {HTMLElement} element - Elemento a observar
   * @param {Function} callback - Función a ejecutar cuando el elemento es visible
   */
  function observeElement(element, callback) {
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    )

    observer.observe(element)
    observers.value.push(observer)
  }

  /**
   * Extrae el número de un string (ej: "92%" -> 92, "3x" -> 3)
   */
  function extractNumber(text) {
    const match = text.match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }

  /**
   * Extrae el sufijo de un string (ej: "92%" -> "%", "3x" -> "x")
   */
  function extractSuffix(text) {
    const match = text.match(/[^\d.]+/)
    return match ? match[0] : ''
  }

  onUnmounted(() => {
    // Limpiar observadores al desmontar
    observers.value.forEach((observer) => observer.disconnect())
  })

  return {
    animateCounter,
    observeElement,
    extractNumber,
    extractSuffix
  }
}
