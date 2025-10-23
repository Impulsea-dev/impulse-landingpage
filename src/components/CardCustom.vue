<template>
  <div class="flex flex-wrap w-full justify-center">
    <div :class="cardClasses">
      <div :class="iconWrapperClasses">
        <img :src="img" alt="" class="max-w-full max-h-full object-contain" />
      </div>

      <h5 :class="titleClasses">
        {{ title }}
      </h5>

      <p :class="paragraphClasses">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, default: '' },
    paragraph: { type: String, default: '' },
    img: { type: String, default: '' },
    classBackground: { type: String, default: '' }, // para overrides externos
  },
  computed: {
    isDark() {
      const storeDark = this.$store?.themeSettingsStore?.isDark
      if (typeof storeDark === 'boolean') {
        return storeDark
      }
      return document.body.classList.contains('dark')
    },
    cardClasses() {
      const base = [
        'rounded-md',
        'border',
        'p-6',
        'text-center',
        'transition-colors',
        'shadow-sm',
        'w-full'
      ]

      if (this.isDark) {
        base.push(
          'bg-[#0b0f1a]',
          'border-gray-700/60',
          'shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)]',
          'text-white'
        )
      } else {
        base.push(
          'bg-white',
          'border-gray-200',
          'shadow-[0_2px_10px_1px_rgba(31,45,61,0.06)]',
          'text-gray-900'
        )
      }

      if (this.classBackground) {
        base.push(this.classBackground)
      }

      return base
    },
    iconWrapperClasses() {
      const base = [
        'w-20',
        'h-20',
        'rounded-full',
        'flex',
        'items-center',
        'justify-center',
        'mb-2',
        'mx-auto',
        'transition-colors',
        'border'
      ]

      if (this.isDark) {
        base.push('bg-white/5', 'border-white/10')
      } else {
        base.push('bg-gray-50', 'border-gray-100')
      }

      return base
    },
    titleClasses() {
      const base = ['text-2xl', 'font-semibold', 'mb-3.5', 'transition-colors']
      base.push(this.isDark ? 'text-white' : 'text-gray-900')
      return base
    },
    paragraphClasses() {
      const base = ['text-base', 'mb-3.5', 'transition-colors']
      base.push(this.isDark ? 'text-gray-300' : 'text-gray-600')
      return base
    }
  }
};
</script>
