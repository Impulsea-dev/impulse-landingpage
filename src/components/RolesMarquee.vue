<template>
  <section class="bg-white py-20">
    <div class="mx-auto flex max-w-5xl flex-col items-center text-center px-6 opacity-0" ref="headerRef">
      <h2 class="text-3xl font-extrabold text-[#32125c] md:text-[42px] md:leading-tight">
        {{ t('rolesMarquee.title') }}
      </h2>
      <p class="mt-5 max-w-2xl text-base font-medium text-[#4c4a67] md:text-lg">
        {{ t('rolesMarquee.description') }}
      </p>
    </div>

    <div class="mt-16 overflow-hidden opacity-0" ref="marqueeRef">
      <div class="group relative py-4">
        <div class="marquee-track flex w-max gap-8 px-6 group-hover:[animation-play-state:paused]">
          <div
            v-for="card in cards"
            :key="card.id"
            :class="[
              'relative w-[360px] shrink-0 rounded-[32px] p-8 transition-all duration-300',
              'hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]',
              card.bgColor
            ]"
          >
            <div :class="['mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold', card.badgeColor]">
              {{ card.badge }}
            </div>
            <h3 :class="['text-xl font-bold mb-3', card.textColor]">
              {{ card.title }}
            </h3>
            <p :class="['text-sm leading-relaxed', card.descriptionColor]">
              {{ card.description }}
            </p>
            <a
              :href="card.link"
              :class="['mt-6 inline-flex items-center text-sm font-semibold transition-colors', card.linkColor, card.linkHoverColor]"
            >
              {{ t('rolesMarquee.linkLabel') }}
            </a>
          </div>

          <div
            v-for="card in cards"
            :key="`${card.id}-duplicate`"
            :class="[
              'relative w-[360px] shrink-0 rounded-[32px] p-8 transition-all duration-300',
              'hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]',
              card.bgColor
            ]"
          >
            <div :class="['mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold', card.badgeColor]">
              {{ card.badge }}
            </div>
            <h3 :class="['text-xl font-bold mb-3', card.textColor]">
              {{ card.title }}
            </h3>
            <p :class="['text-sm leading-relaxed', card.descriptionColor]">
              {{ card.description }}
            </p>
            <a
              :href="card.link"
              :class="['mt-6 inline-flex items-center text-sm font-semibold transition-colors', card.linkColor, card.linkHoverColor]"
            >
              {{ t('rolesMarquee.linkLabel') }}
            </a>
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

const headerRef = ref(null)
const marqueeRef = ref(null)

const { t } = useI18n()

const { observe: observeFadeUp } = useIntersectionObserver('animate-fade-up')
const { observe: observeFadeIn } = useIntersectionObserver('animate-fade-in')

onMounted(() => {
  if (headerRef.value) {
    observeFadeUp(headerRef.value)
  }
  if (marqueeRef.value) {
    // Add a small delay so it appears after the header
    marqueeRef.value.classList.add('animate-delay-200')
    observeFadeIn(marqueeRef.value)
  }
})

const cardMeta = [
  {
    id: 'revenue',
    link: '#',
    bgColor: 'bg-[#D4E8F5]',
    textColor: 'text-[#1E5A7D]',
    badgeColor: 'bg-[#4A90B8] text-white',
    descriptionColor: 'text-[#2C6B8F]',
    linkColor: 'text-[#1E5A7D]',
    linkHoverColor: 'hover:text-[#4A90B8]'
  },
  {
    id: 'support',
    link: '#',
    bgColor: 'bg-[#FFE5E5]',
    textColor: 'text-[#8B3A3A]',
    badgeColor: 'bg-[#E07A7A] text-white',
    descriptionColor: 'text-[#A04848]',
    linkColor: 'text-[#8B3A3A]',
    linkHoverColor: 'hover:text-[#E07A7A]'
  },
  {
    id: 'sales',
    link: '#',
    bgColor: 'bg-[#E8E0F5]',
    textColor: 'text-[#5A3A7D]',
    badgeColor: 'bg-[#8B6DB8] text-white',
    descriptionColor: 'text-[#6B4A8F]',
    linkColor: 'text-[#5A3A7D]',
    linkHoverColor: 'hover:text-[#8B6DB8]'
  },
  {
    id: 'network',
    link: '#',
    bgColor: 'bg-[#E5F5E8]',
    textColor: 'text-[#2D6B3A]',
    badgeColor: 'bg-[#5BA86D] text-white',
    descriptionColor: 'text-[#3A7D48]',
    linkColor: 'text-[#2D6B3A]',
    linkHoverColor: 'hover:text-[#5BA86D]'
  },
  {
    id: 'finance',
    link: '#',
    bgColor: 'bg-[#FFF4E5]',
    textColor: 'text-[#8B5A00]',
    badgeColor: 'bg-[#E0A960] text-white',
    descriptionColor: 'text-[#A06F20]',
    linkColor: 'text-[#8B5A00]',
    linkHoverColor: 'hover:text-[#E0A960]'
  }
]

const cards = computed(() =>
  cardMeta.map(card => ({
    ...card,
    badge: t(`rolesMarquee.cards.${card.id}.badge`),
    title: t(`rolesMarquee.cards.${card.id}.title`),
    description: t(`rolesMarquee.cards.${card.id}.description`)
  }))
)
</script>

<style scoped>
@keyframes marquee-slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  animation: marquee-slide 28s linear infinite;
}
</style>
