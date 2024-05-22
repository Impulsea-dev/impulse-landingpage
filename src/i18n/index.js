import { createI18n } from "vue-i18n";
import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json'; 
export default createI18n({
  locale: "en", // <--- 1
//   locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
  fallbackLocale: "es", // <--- 2
//   fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
  legacy: false, // <--- 3 
  globalInjection: true,
  messages:{
    en:en,
    es:es
  }
})