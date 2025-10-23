<template>
  <footer :class="footerClass()">
    <div :class="containerClasses">
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-1 space-y-8 md:col-end-6 md:col-span-3">
        <div class="flex-col space-y-4">
          <div class="flex-col">
            <img src="@/assets/images/logo/logo.svg" alt="logo" />
          </div>
          <div class="flex-col text-start text-base transition-colors" :class="bodyTextClasses">
            {{ $t('footer-1') }}
          </div>
          <div class="flex flex-col space-y-1">
            <a
              href="/impulse-privacy"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-sm text-left underline hover:cursor-pointer transition-colors"
              :class="secondaryLinkClasses"
            >
              {{ $t('footer-2') }}
            </a>
            <a
              href="/impulse-terms"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-sm text-left underline hover:cursor-pointer transition-colors"
              :class="secondaryLinkClasses"
            >
              {{ $t('footer-3') }}
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 space-x-4 md:w-52 md:ml-auto">
          <div class="flex flex-col space-y-6">
            <a
              href="/aboutus"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left hover:cursor-pointer transition-colors"
              :class="primaryLinkClasses"
            >
              {{ $t('footer-4') }}
            </a>
            <a
              href="/services"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left hover:cursor-pointer transition-colors"
              :class="primaryLinkClasses"
            >
              {{ $t('footer-5') }}
            </a>
            <a
              href="https://www.youtube.com/@Impulseky/featured"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left hover:cursor-pointer transition-colors"
              :class="primaryLinkClasses"
            >
              Youtube
            </a>
          </div>
          <div class="flex flex-col space-y-6">
            <a
              href="https://www.linkedin.com/company/impulseltd/"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left transition-colors"
              :class="primaryLinkClasses"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/impulseky/"
              target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left transition-colors"
              :class="primaryLinkClasses"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    isDark() {
      const isStoreDark = this.$store?.themeSettingsStore?.isDark
      if (typeof isStoreDark === 'boolean') {
        return isStoreDark
      }
      return document.body.classList.contains('dark')
    },
    containerClasses() {
      const base = [
        'site-footer',
        'px-6',
        'py-6',
        'static',
        'left-0',
        'w-full',
        'bottom-0',
        'transition-colors',
        'border-t'
      ]
      if (this.isDark) {
        base.push('bg-[#111315]', 'text-white', 'border-white/10')
      } else {
        base.push('bg-white/95', 'backdrop-blur-sm', 'text-slate-900', 'border-slate-200/70', 'shadow-[0_-12px_40px_-32px_rgba(15,23,42,0.45)]')
      }
      return base
    },
    primaryLinkClasses() {
      return this.isDark
        ? 'text-white hover:text-white/70'
        : 'text-slate-900 hover:text-[#6E49C4]'
    },
    secondaryLinkClasses() {
      return this.isDark
        ? 'text-white/80 hover:text-white'
        : 'text-slate-600 hover:text-[#6E49C4]'
    },
    bodyTextClasses() {
      return this.isDark ? 'text-white/80' : 'text-slate-600'
    }
  },
  methods: {
    footerClass() {
      switch (this.$store.themeSettingsStore.footerType) {
        case "sticky":
          return "sticky bottom-0 z-[999]";
        case "static":
          return "static";
        case "hidden":
          return "hidden";
      }
    },
  },
};
</script>
<style lang=""></style>
