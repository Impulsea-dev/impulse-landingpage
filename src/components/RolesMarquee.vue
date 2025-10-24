<template>
  <section class="bg-white py-20">
    <div class="mx-auto flex max-w-5xl flex-col items-center text-center px-6">
      <h2 class="text-3xl font-extrabold text-[#32125c] md:text-[42px] md:leading-tight">
        Everyone wins with Impulse
      </h2>
      <p class="mt-5 max-w-2xl text-base font-medium text-[#4c4a67] md:text-lg">
        From executives to field teams, bring your entire organization together to work smarter, move faster,
        and unlock sustained growth.
      </p>
    </div>

    <div class="mt-16 overflow-hidden">
      <div class="group relative py-4">
        <div class="marquee-track flex w-max gap-8 px-6 group-hover:[animation-play-state:paused]">
          <div
            v-for="card in cards"
            :key="card.id"
            class="relative w-[360px] shrink-0 rounded-[32px] border border-[#b58bff] bg-white p-6 shadow-[0_18px_45px_rgba(107,70,193,0.12)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(107,70,193,0.18)]"
          >
            <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6f3ff5] text-lg font-semibold text-white">
              {{ card.badge }}
            </div>
            <h3 class="text-xl font-bold text-[#1f0e3a]">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-[#5b5a78]">
              {{ card.description }}
            </p>
            <a
              :href="card.link"
              class="mt-6 inline-flex items-center text-sm font-semibold text-[#6f3ff5] transition-colors hover:text-[#5130b8]"
            >
              Learn more ->
            </a>
          </div>

          <div
            v-for="card in cards"
            :key="`${card.id}-duplicate`"
            class="relative w-[360px] shrink-0 rounded-[32px] border border-[#b58bff] bg-white p-6 shadow-[0_18px_45px_rgba(107,70,193,0.12)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_55px_rgba(107,70,193,0.18)]"
          >
            <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6f3ff5] text-lg font-semibold text-white">
              {{ card.badge }}
            </div>
            <h3 class="text-xl font-bold text-[#1f0e3a]">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-[#5b5a78]">
              {{ card.description }}
            </p>
            <a
              :href="card.link"
              class="mt-6 inline-flex items-center text-sm font-semibold text-[#6f3ff5] transition-colors hover:text-[#5130b8]"
            >
              Learn more ->
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const cards = [
  {
    id: 'revenue',
    badge: 'RL',
    title: 'Revenue Leadership',
    description:
      "Lead with confidence, forecast with precision, and unlock your team's full potential - with complete visibility across the business.",
    link: '#'
  },
  {
    id: 'support',
    badge: 'CS',
    title: 'Customer Support',
    description:
      'Deliver standout customer experiences, reduce churn, and drive expansion with AI that keeps your teams in sync.',
    link: '#'
  },
  {
    id: 'sales',
    badge: 'SM',
    title: 'Sales & Marketing',
    description:
      'Drive scalable performance, improve pipeline conversion, and lead change that sticks with Impulse as your system of truth.',
    link: '#'
  },
  {
    id: 'network',
    badge: 'NO',
    title: 'Network Operations',
    description:
      'Proactively monitor networks, detect issues instantly, and ensure uptime - connecting performance to business outcomes.',
    link: '#'
  },
  {
    id: 'finance',
    badge: 'FB',
    title: 'Finance & Billing',
    description:
      'Eliminate revenue leakage, ensure billing accuracy, and track collections - automatically connecting finance to growth.',
    link: '#'
  }
]
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
