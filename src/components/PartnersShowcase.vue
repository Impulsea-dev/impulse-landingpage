<template>
  <section :class="sectionClasses">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:px-12 lg:flex-row lg:items-center lg:justify-between">
      <div class="max-w-4xl space-y-5">
        <p :class="titleClasses">
          {{ $t(titleKey) }}
        </p>
        <p :class="descriptionClasses">
          {{ $t(descriptionKey) }}
        </p>
      </div>
      <div :class="logoContainerClasses"></div>
    </div>

    <div class="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
      <p :class="ctaTitleClasses">
        {{ $t(ctaTitleKey) }}
      </p>
      <Button
        :text="$t(ctaButtonKey)"
        :btnClass="buttonClasses"
        @click="$emit('cta-click')"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Button from '@/components/Button'
import { useThemeSettingsStore } from '@/store/themeSettings'

const props = defineProps({
  titleKey: {
    type: String,
    default: ''
  },
  descriptionKey: {
    type: String,
    default: ''
  },
  ctaTitleKey: {
    type: String,
    default: ''
  },
  ctaButtonKey: {
    type: String,
    default: ''
  }
})

defineEmits(['cta-click'])

const themeStore = useThemeSettingsStore()
const isDark = computed(() => themeStore.isDark)

const sectionClasses = computed(() =>
  [
    'partners-showcase',
    'relative',
    'py-20',
    isDark.value ? 'bg-[#0f1124]/95' : 'bg-white'
  ].join(' ')
)

const titleClasses = computed(() =>
  [
    'text-3xl',
    'font-extrabold',
    'leading-tight',
    isDark.value ? 'text-white' : 'text-[#402675]'
  ].join(' ')
)

const descriptionClasses = computed(() =>
  [
    'text-base',
    'leading-relaxed',
    'font-medium',
    isDark.value ? 'text-white/70' : 'text-[#5c4b89]'
  ].join(' ')
)

const ctaTitleClasses = computed(() =>
  [
    'text-[28px]',
    'font-bold',
    'leading-snug',
    isDark.value ? 'text-white' : 'text-[#402675]'
  ].join(' ')
)

const buttonClasses = computed(() =>
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-[28px]',
    'px-8',
    'py-3',
    'text-base',
    'font-semibold',
    'shadow-[0_14px_32px_rgba(110,64,152,0.28)]',
    isDark.value
      ? 'bg-[#7c4ed1] text-white hover:bg-[#9061f2]'
      : 'bg-[#6541a4] text-white hover:bg-[#7d57c1]'
  ].join(' ')
)

const logoContainerClasses = computed(() =>
  [
    'partner-logos',
    isDark.value ? 'partner-logos--dark' : 'partner-logos--light'
  ].join(' ')
)
</script>

<style scoped>
.partners-showcase::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(45% 45% at 50% 20%, rgba(123, 78, 209, 0.18) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

.partner-logos {
  height: 340px;
  width: min(100%, 1200px);
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.75rem;
  background: url('@/assets/images/logos.webp') center/contain no-repeat;
  background-color: #ffffff;
  box-shadow: 0 24px 45px rgba(76, 49, 125, 0.16);
}

.partner-logos--dark {
  background-color: #1a1731;
  box-shadow: 0 28px 55px rgba(7, 6, 18, 0.55);
}

@media (max-width: 639px) {
  .partner-logos {
    background-image: url('@/assets/images/logosPhone.webp');
    height: 380px;
  }
}
</style>
