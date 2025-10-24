<template>
  <section class="bg-white py-20">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <!-- heading -->
      <div>
        <h2 class="text-3xl font-extrabold text-[#2f1a54] md:text-[44px] md:leading-tight">
          Proven results in weeks, not years
        </h2>
        <p class="mt-4 max-w-3xl text-base text-[#5b4e76] md:text-lg">
          A clear, collaborative path that gets your teams from executive alignment to AI in production faster than ever.
        </p>
      </div>

      <!-- timeline -->
      <!-- CAMBIO: overflow-visible para que el popover no se recorte -->
      <div class="rounded-lg overflow-visible" aria-label="Delivery timeline">
        <!-- header row -->
        <div class="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e7def7]">
          <div
            v-for="item in timeline"
            :key="item.id"
            class="group relative isolate flex flex-col px-6 py-10 transition-colors duration-200 bg-[#5b4e76] hover:bg-[#4c4167] text-white"
          >
            <div class="text-sm font-semibold leading-snug">
              <span>{{ item.title }}</span>
              <span v-if="item.subtitle" class="sr-only"> — {{ item.subtitle }}</span>
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

        <!-- thin divider line like in the screenshot -->
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
const timeline = [
  {
    id: 'briefing',
    title: 'Exec. Briefing',
    subtitle: 'Strategic Alignment',
    duration: '2–3 Hours',
    detail:
      'Meet with our executive team to align on business priorities, surface quick wins, and map the value you want to unlock with AI.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'assessment',
    title: 'Technology Assessment',
    subtitle: 'Capability Deep Dive',
    duration: '2–3 Days',
    detail:
      'Gain a rich view into the platform stack, architecture best practices, and the highest-impact use cases tailored to your data.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trial',
    title: 'Production Trial',
    subtitle: 'AI Sprint',
    duration: '8–12 Weeks',
    detail:
      'Prototype the solution with your real data, validate models alongside our experts, and define the playbook for go-live.',
    image:
      'https://images.unsplash.com/photo-1537432376769-00aabc89af93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deployment',
    title: 'AI Application Deployment in Production',
    subtitle: 'Deployment in Production',
    duration: '3–6 Months',
    detail:
      'Scale the proven use case, operationalize monitoring and feedback loops, and optimize impact across your organization.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80'
  }
]
</script>

<style scoped>
@media (hover: hover) and (pointer: fine) {
  .group:hover { /* estilos extra opcionales */ }
}
</style>
