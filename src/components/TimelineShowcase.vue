<template>
  <section class="bg-gradient-to-br from-[#f9f4ff] via-[#f2eafd] to-[#e6d8fb] py-20">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <!-- heading -->
      <div class="opacity-0" ref="headingRef">
        <h2 class="text-3xl font-extrabold text-[#2f1a54] md:text-[44px] md:leading-tight">
          {{ t('timelineShowcase.title') }}
        </h2>
        <p class="mt-4 max-w-3xl text-base text-[#5b4e76] md:text-lg">
          {{ t('timelineShowcase.description') }}
        </p>
      </div>

      <!-- timeline -->
      <div class="rounded-lg overflow-visible" :aria-label="t('timelineShowcase.ariaLabel')">
        <!-- header row -->
        <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e7def7]">
          <div
            v-for="(item, index) in timeline"
            :key="item.id"
            :ref="el => { if (el) timelineItemRefs[index] = el }"
            class="group relative isolate flex flex-col px-6 py-10 transition-colors duration-200 bg-[#5b4e76] hover:bg-[#4c4167] text-white opacity-0"
          >
            <div class="text-sm font-semibold leading-snug">
              <span>{{ item.title }}</span>
              <span v-if="item.subtitle" class="sr-only"> - {{ item.subtitle }}</span>
            </div>

            <!-- POPUP / TOOLTIP AL HACER HOVER -->
            <div
              class="pointer-events-none absolute left-1/2 top-0 w-72 max-w-[90vw]
                     -translate-x-1/2 -translate-y-[calc(100%+28px)]
                     rounded-3xl bg-white text-left opacity-0 invisible
                     shadow-[0_20px_50px_rgba(92,58,173,0.25)]
                     transition duration-300 z-50
                     group-hover:-translate-y-[calc(100%+14px)]
                     group-hover:opacity-100 group-hover:visible"
            >
              <img :src="item.image" :alt="item.title" class="h-40 w-full rounded-t-3xl object-cover" />
              <div class="p-5 text-[#2f1a54]">
                <p class="text-sm leading-relaxed text-[#4f4669]">
                  {{ item.detail }}
                </p>
              </div>
              <span
                class="absolute left-1/2 -bottom-2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm border border-[#d7caef] bg-white"
              ></span>
            </div>
          </div>
        </div>

        <!-- thin divider line -->
        <div class="h-[1px] bg-white/30"></div>

        <!-- durations row -->
        <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e7def7] bg-white">
          <div v-for="item in timeline" :key="item.id + '-duration'" class="p-5">
            <p class="text-sm text-[#5b4e76]">{{ item.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useIntersectionObserver from '@/composables/useIntersectionObserver'

const headingRef = ref(null)
const timelineItemRefs = ref([])

const { t } = useI18n()

// Observers
const { observe: observeFadeUp } = useIntersectionObserver('animate-fade-up')
const { observe: observeGentleRise } = useIntersectionObserver('animate-gentle-rise')

onMounted(() => {
  if (headingRef.value) {
    observeFadeUp(headingRef.value)
  }

  // Animar cada item del timeline con delay incremental suave
  timelineItemRefs.value.forEach((item, index) => {
    if (item) {
      // Delays mas graduales: 150ms, 250ms, 350ms, 450ms
      const delays = [150, 250, 350, 450]
      const delayClass = `animate-delay-${delays[index] || 500}`
      item.classList.add(delayClass)
      observeGentleRise(item)
    }
  })
})

const rawTimeline = [
  {
    id: 'briefing',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'assessment',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trial',
    image:
      'https://plus.unsplash.com/premium_photo-1661504705278-ff7a1dfdd1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000'
  },
  {
    id: 'deployment',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80'
  }
]

const timeline = computed(() =>
  rawTimeline.map(item => ({
    ...item,
    title: t(`timelineShowcase.items.${item.id}.title`),
    subtitle: t(`timelineShowcase.items.${item.id}.subtitle`),
    duration: t(`timelineShowcase.items.${item.id}.duration`),
    detail: t(`timelineShowcase.items.${item.id}.detail`)
  }))
)
</script>

<style scoped>
@media (hover: hover) and (pointer: fine) {
  .group:hover { /* estilos extra opcionales */ }
}
</style>
