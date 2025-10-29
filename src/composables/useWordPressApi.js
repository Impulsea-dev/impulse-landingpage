import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import impulseLogoIcon from '@/assets/images/logo/impulse-logo-icon.svg'

export default function useWordPressApi() {
  const { locale } = useI18n()
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  // En desarrollo usar proxy, en producción usar URL directa
  const API_BASE_URL = import.meta.env.DEV
    ? '/blog/wp-json/wp/v2'
    : 'https://impulse.ky/blog/wp-json/wp/v2'

  /**
   * Obtiene las entradas del blog de WordPress
   * @param {number} perPage - Número de posts a obtener (default: 3)
   * @param {number} page - Página a obtener (default: 1)
   */
  async function fetchPosts(perPage = 3, page = 1) {
    loading.value = true
    error.value = null

    try {
      // Primero obtener los posts básicos
      const postsResponse = await fetch(
        `${API_BASE_URL}/posts?per_page=${perPage}&page=${page}`
      )

      if (!postsResponse.ok) {
        throw new Error(`Error: ${postsResponse.status} ${postsResponse.statusText}`)
      }

      const postsData = await postsResponse.json()

      // Formatear posts con datos básicos primero
      posts.value = postsData.map((post) => {
        // Si no hay excerpt, usar las primeras líneas del content
        let excerpt = post.excerpt.rendered
        if (!excerpt || stripHtml(excerpt).trim().length === 0) {
          const contentText = stripHtml(post.content.rendered)
          // Tomar los primeros 150 caracteres del contenido
          excerpt = contentText.substring(0, 150) + (contentText.length > 150 ? '...' : '')
        }

        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: excerpt,
          content: post.content.rendered,
          date: new Date(post.date),
          link: post.link,
          featuredImage: null,
          categories: [],
          author: {
            name: 'Impulse',
            avatar: impulseLogoIcon
          },
          _mediaId: post.featured_media,
          _categoryIds: post.categories || []
        }
      })

      // Luego obtener detalles adicionales en segundo plano
      fetchPostDetails()
    } catch (err) {
      error.value = err.message
      console.error('Error fetching WordPress posts:', err)
    } finally {
      loading.value = false
    }
  }

  /**
   * Obtiene detalles adicionales de los posts (imágenes y categorías)
   * Se ejecuta después de cargar los posts básicos
   */
  async function fetchPostDetails() {
    for (let i = 0; i < posts.value.length; i++) {
      const post = posts.value[i]

      // Obtener imagen destacada
      if (post._mediaId) {
        try {
          const mediaResponse = await fetch(`${API_BASE_URL}/media/${post._mediaId}`)
          if (mediaResponse.ok) {
            const mediaData = await mediaResponse.json()
            posts.value[i].featuredImage = mediaData.source_url
          }
        } catch (e) {
          // Ignorar errores silenciosamente
        }
      }

      // Obtener primera categoría
      if (post._categoryIds.length > 0) {
        try {
          const catResponse = await fetch(`${API_BASE_URL}/categories/${post._categoryIds[0]}`)
          if (catResponse.ok) {
            const catData = await catResponse.json()
            posts.value[i].categories = [catData.name]
          }
        } catch (e) {
          // Ignorar errores silenciosamente
        }
      }
    }
  }

  /**
   * Formatea una fecha a un string legible
   * @param {Date} date - Fecha a formatear
   */
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    // Usar el locale actual de i18n (en o es)
    const localeCode = locale.value === 'en' ? 'en-US' : 'es-ES'
    return date.toLocaleDateString(localeCode, options)
  }

  /**
   * Elimina tags HTML y shortcodes de un string
   * @param {string} html - String con HTML
   */
  function stripHtml(html) {
    if (!html) return ''

    // Estrategia: Eliminar TODO lo que esté entre corchetes [ ] antes de procesar el HTML
    let text = html

    // 1. Eliminar etiqueta <body> completa
    text = text.replace(/<body[^>]*>/gi, '')
    text = text.replace(/<\/body>/gi, '')

    // 2. ELIMINAR TODOS LOS SHORTCODES de forma muy agresiva
    // Eliminar TODO lo que esté entre [ y ] sin importar su contenido o longitud
    // Usar una estrategia de eliminar character por character entre corchetes
    let result = ''
    let inShortcode = false
    let bracketDepth = 0

    for (let i = 0; i < text.length; i++) {
      const char = text[i]

      if (char === '[') {
        inShortcode = true
        bracketDepth++
      } else if (char === ']' && inShortcode) {
        bracketDepth--
        if (bracketDepth === 0) {
          inShortcode = false
        }
      } else if (!inShortcode) {
        result += char
      }
    }

    text = result

    // 3. Eliminar comentarios HTML
    text = text.replace(/<!--[\s\S]*?-->/g, '')

    // 4. Crear elemento temporal para extraer solo el texto de las etiquetas HTML
    const tmp = document.createElement('div')
    tmp.innerHTML = text

    // 5. Obtener texto limpio
    let cleanText = tmp.textContent || tmp.innerText || ''

    // 6. Eliminar espacios en blanco múltiples y saltos de línea excesivos
    cleanText = cleanText.replace(/\s+/g, ' ').trim()

    return cleanText
  }

  return {
    posts,
    loading,
    error,
    fetchPosts,
    formatDate,
    stripHtml
  }
}
