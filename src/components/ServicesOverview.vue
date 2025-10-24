<template>
  <section :class="['services-overview', sectionClasses]">
    <div class="mx-auto px-6 md:px-20">
      <div class="flex justify-center">
        <Button
          :text="$t(buttonTextKey)"
          :btnClass="buttonClasses"
          @click="$emit('cta-click')"
        />
      </div>

      <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <CardCustom
          v-for="card in cards"
          :key="card.id || card.titleKey"
          :title="$t(card.titleKey)"
          :paragraph="$t(card.descriptionKey)"
          :img="card.img"
          classBackground="services-card"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Button from '@/components/Button'
import CardCustom from '@/components/CardCustom.vue'
import { useThemeSettingsStore } from '@/store/themeSettings'

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  },
  buttonTextKey: {
    type: String,
    default: ''
  }
})

defineEmits(['cta-click'])

const themeStore = useThemeSettingsStore()
const isDark = computed(() => themeStore.isDark)

const sectionClasses = computed(() =>
  [
    'py-16 md:py-20',
    isDark.value
      ? 'bg-[#0d1020]/95 backdrop-blur-sm'
      : 'bg-white'
  ].join(' ')
)

const buttonClasses = computed(() =>
  [
    'flex items-center gap-2 rounded-[28px] border px-10 py-3 text-base font-semibold transition-all duration-200',
    'shadow-[0_12px_32px_rgba(110,64,152,0.18)]',
    isDark.value
      ? 'bg-transparent border-[#7c4ed1] text-[#f6f0ff] hover:bg-[#7c4ed1]/15'
      : 'bg-white border-[#d7c5f6] text-[#5b2f9d] hover:bg-[#f6f0ff]'
  ].join(' ')
)
</script>

<style>
.services-overview {
  position: relative;
}

html[data-theme="light"] .services-card {
  background: linear-gradient(135deg, #ffffff 0%, #f4edff 100%) !important;
  border-color: rgba(110, 64, 152, 0.25) !important;
  box-shadow: 0 18px 36px rgba(94, 67, 133, 0.12) !important;
}

html[data-theme="light"] .services-card h5 {
  color: #4c268c !important;
}

html[data-theme="light"] .services-card p {
  color: #6a519f !important;
}

html[data-theme="dark"] .services-card {
  background: linear-gradient(140deg, rgba(77, 46, 123, 0.5), rgba(26, 15, 45, 0.85)) !important;
  border-color: rgba(124, 78, 209, 0.4) !important;
  box-shadow: 0 18px 40px rgba(9, 8, 20, 0.65) !important;
}

html[data-theme="dark"] .services-card h5 {
  color: #f2e8ff !important;
}

html[data-theme="dark"] .services-card p {
  color: #d2c4f5 !important;
}
</style>
