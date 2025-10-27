<template>
  <section :class="sectionClasses">
    <div :class="wrapperClasses">
      <div class="text-center space-y-4 max-w-4xl mx-auto px-4 md:px-0">
        <p :class="eyebrowClasses">
          {{ $t('capabilitiesSection.eyebrow') }}
        </p>
        <h2 :class="titleClasses">
          {{ $t('capabilitiesSection.title') }}
        </h2>
        <p :class="descriptionClasses">
          {{ $t('capabilitiesSection.description') }}
        </p>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4 md:px-0">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          type="button"
          @click="setActive(index)"
          :class="[
            'rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200',
            activeTabIndex === index
              ? (isDark
                  ? 'bg-white text-[#0b0517] border-transparent shadow-[0_0_25px_rgba(164,70,244,0.35)]'
                  : 'bg-[#6E4098] text-white border-[#6E4098] shadow-[0_0_25px_rgba(164,70,244,0.25)]')
              : (isDark
                  ? 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                  : 'bg-white text-[#0b0517] border-[#e0d7f3] hover:border-[#c8b5f0]')
          ]"
        >
          {{ $t(tab.label) }}
        </button>
      </div>

      <div class="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] max-w-6xl mx-auto px-4 sm:px-8 lg:px-0">
        <div :class="mediaWrapperClasses">
          <div :class="mediaGlowClasses"></div>
          <div :class="mediaInnerClasses">
            <div :class="mediaIconWrapperClasses">
              <img
                :src="storylineIcon"
                :alt="$t('capabilitiesSection.placeholderAlt')"
                class="h-24 w-24 object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <span :class="tagClasses">
            {{ $t(activeTab.tag) }}
          </span>
          <h3 :class="panelTitleClasses">
            {{ $t(activeTab.title) }}
          </h3>
          <p :class="panelDescriptionClasses">
            {{ $t(activeTab.description) }}
          </p>

          <ul class="mt-8 space-y-4">
            <li
              v-for="featureKey in activeTab.features"
              :key="featureKey"
              class="flex items-start gap-4"
            >
              <span
                class="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#52f5b3] to-[#38d6ff] text-[#041017]"
              >
                <svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 11.5L3.5 8.5L4.91667 7.08333L6.5 8.66667L11.0833 4.08333L12.5 5.5L6.5 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span :class="featureTextClasses">
                {{ $t(featureKey) }}
              </span>
            </li>
          </ul>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="metric in activeTab.metrics"
              :key="metric.value"
              :class="metricCardClasses"
            >
              <p :class="metricValueClasses">
                {{ $t(metric.value) }}
              </p>
              <p :class="metricLabelClasses">
                {{ $t(metric.label) }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <Button
              :text="$t(activeTab.cta)"
              :btnClass="'px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wide text-white shadow-[0_15px_40px_rgba(65,56,243,0.35)]'"
              style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import Button from '@/components/Button'
import storylineIcon from '@/assets/images/svgs/innovation.svg'
import { useThemeSettingsStore } from '@/store/themeSettings'

const tabsData = [
  {
    id: 'revenue-intelligence',
    label: 'capabilitiesSection.tabs.revenueIntelligence.label',
    tag: 'capabilitiesSection.tabs.revenueIntelligence.tag',
    title: 'capabilitiesSection.tabs.revenueIntelligence.title',
    description: 'capabilitiesSection.tabs.revenueIntelligence.description',
    features: [
      'capabilitiesSection.tabs.revenueIntelligence.features.0',
      'capabilitiesSection.tabs.revenueIntelligence.features.1',
      'capabilitiesSection.tabs.revenueIntelligence.features.2',
      'capabilitiesSection.tabs.revenueIntelligence.features.3'
    ],
    metrics: [
      {
        value: 'capabilitiesSection.tabs.revenueIntelligence.metrics.0.value',
        label: 'capabilitiesSection.tabs.revenueIntelligence.metrics.0.label'
      },
      {
        value: 'capabilitiesSection.tabs.revenueIntelligence.metrics.1.value',
        label: 'capabilitiesSection.tabs.revenueIntelligence.metrics.1.label'
      },
      {
        value: 'capabilitiesSection.tabs.revenueIntelligence.metrics.2.value',
        label: 'capabilitiesSection.tabs.revenueIntelligence.metrics.2.label'
      }
    ],
    cta: 'capabilitiesSection.tabs.revenueIntelligence.cta'
  },
  {
    id: 'agentic-ai',
    label: 'capabilitiesSection.tabs.agenticAI.label',
    tag: 'capabilitiesSection.tabs.agenticAI.tag',
    title: 'capabilitiesSection.tabs.agenticAI.title',
    description: 'capabilitiesSection.tabs.agenticAI.description',
    features: [
      'capabilitiesSection.tabs.agenticAI.features.0',
      'capabilitiesSection.tabs.agenticAI.features.1',
      'capabilitiesSection.tabs.agenticAI.features.2',
      'capabilitiesSection.tabs.agenticAI.features.3'
    ],
    metrics: [
      {
        value: 'capabilitiesSection.tabs.agenticAI.metrics.0.value',
        label: 'capabilitiesSection.tabs.agenticAI.metrics.0.label'
      },
      {
        value: 'capabilitiesSection.tabs.agenticAI.metrics.1.value',
        label: 'capabilitiesSection.tabs.agenticAI.metrics.1.label'
      },
      {
        value: 'capabilitiesSection.tabs.agenticAI.metrics.2.value',
        label: 'capabilitiesSection.tabs.agenticAI.metrics.2.label'
      }
    ],
    cta: 'capabilitiesSection.tabs.agenticAI.cta'
  },
  {
    id: 'revenue-acceleration',
    label: 'capabilitiesSection.tabs.revenueAcceleration.label',
    tag: 'capabilitiesSection.tabs.revenueAcceleration.tag',
    title: 'capabilitiesSection.tabs.revenueAcceleration.title',
    description: 'capabilitiesSection.tabs.revenueAcceleration.description',
    features: [
      'capabilitiesSection.tabs.revenueAcceleration.features.0',
      'capabilitiesSection.tabs.revenueAcceleration.features.1',
      'capabilitiesSection.tabs.revenueAcceleration.features.2',
      'capabilitiesSection.tabs.revenueAcceleration.features.3'
    ],
    metrics: [
      {
        value: 'capabilitiesSection.tabs.revenueAcceleration.metrics.0.value',
        label: 'capabilitiesSection.tabs.revenueAcceleration.metrics.0.label'
      },
      {
        value: 'capabilitiesSection.tabs.revenueAcceleration.metrics.1.value',
        label: 'capabilitiesSection.tabs.revenueAcceleration.metrics.1.label'
      },
      {
        value: 'capabilitiesSection.tabs.revenueAcceleration.metrics.2.value',
        label: 'capabilitiesSection.tabs.revenueAcceleration.metrics.2.label'
      }
    ],
    cta: 'capabilitiesSection.tabs.revenueAcceleration.cta'
  },
  {
    id: 'telecom-crm',
    label: 'capabilitiesSection.tabs.telecomCRM.label',
    tag: 'capabilitiesSection.tabs.telecomCRM.tag',
    title: 'capabilitiesSection.tabs.telecomCRM.title',
    description: 'capabilitiesSection.tabs.telecomCRM.description',
    features: [
      'capabilitiesSection.tabs.telecomCRM.features.0',
      'capabilitiesSection.tabs.telecomCRM.features.1',
      'capabilitiesSection.tabs.telecomCRM.features.2',
      'capabilitiesSection.tabs.telecomCRM.features.3'
    ],
    metrics: [
      {
        value: 'capabilitiesSection.tabs.telecomCRM.metrics.0.value',
        label: 'capabilitiesSection.tabs.telecomCRM.metrics.0.label'
      },
      {
        value: 'capabilitiesSection.tabs.telecomCRM.metrics.1.value',
        label: 'capabilitiesSection.tabs.telecomCRM.metrics.1.label'
      },
      {
        value: 'capabilitiesSection.tabs.telecomCRM.metrics.2.value',
        label: 'capabilitiesSection.tabs.telecomCRM.metrics.2.label'
      }
    ],
    cta: 'capabilitiesSection.tabs.telecomCRM.cta'
  },
  {
    id: 'team-acceleration',
    label: 'capabilitiesSection.tabs.teamAcceleration.label',
    tag: 'capabilitiesSection.tabs.teamAcceleration.tag',
    title: 'capabilitiesSection.tabs.teamAcceleration.title',
    description: 'capabilitiesSection.tabs.teamAcceleration.description',
    features: [
      'capabilitiesSection.tabs.teamAcceleration.features.0',
      'capabilitiesSection.tabs.teamAcceleration.features.1',
      'capabilitiesSection.tabs.teamAcceleration.features.2',
      'capabilitiesSection.tabs.teamAcceleration.features.3'
    ],
    metrics: [
      {
        value: 'capabilitiesSection.tabs.teamAcceleration.metrics.0.value',
        label: 'capabilitiesSection.tabs.teamAcceleration.metrics.0.label'
      },
      {
        value: 'capabilitiesSection.tabs.teamAcceleration.metrics.1.value',
        label: 'capabilitiesSection.tabs.teamAcceleration.metrics.1.label'
      },
      {
        value: 'capabilitiesSection.tabs.teamAcceleration.metrics.2.value',
        label: 'capabilitiesSection.tabs.teamAcceleration.metrics.2.label'
      }
    ],
    cta: 'capabilitiesSection.tabs.teamAcceleration.cta'
  }
]

export default {
  name: 'CapabilitiesTabs',
  components: {
    Button
  },
  setup() {
    const themeSettingsStore = useThemeSettingsStore()
    const tabs = tabsData
    const activeTabIndex = ref(0)
    const activeTab = computed(() => tabs[activeTabIndex.value])
    const setActive = (index) => {
      activeTabIndex.value = index
    }

    const isDark = computed(() => {
      if (typeof themeSettingsStore.isDark === 'boolean') {
        return themeSettingsStore.isDark
      }
      return document.body.classList.contains('dark')
    })

    const sectionClasses = computed(() => [
      'relative',
      'py-20',
      'transition-colors',
      isDark.value ? '' : 'bg-white'
    ].filter(Boolean))

    const wrapperClasses = computed(() => [
      'relative',
      'mx-auto',
      'w-full',
      isDark.value ? 'max-w-6xl px-6 md:px-12' : 'px-0'
    ])

    const eyebrowClasses = computed(() => [
      'text-xs',
      'uppercase',
      'tracking-[0.35em]',
      'transition-colors',
      isDark.value ? 'text-white/60' : 'text-[#6E4098]'
    ])

    const titleClasses = computed(() => [
      'text-3xl',
      'md:text-5xl',
      'font-bold',
      'leading-tight',
      'transition-colors',
      isDark.value ? 'text-white' : 'text-[#6E4098]'
    ])

    const descriptionClasses = computed(() => [
      'mx-auto',
      'max-w-3xl',
      'text-base',
      'md:text-lg',
      'transition-colors',
      isDark.value ? 'text-white/70' : 'text-[#6E4098]'
    ])

    const mediaWrapperClasses = computed(() => [
      'relative',
      'overflow-hidden',
      'rounded-[2.5rem]',
      'p-1',
      'transition-colors',
      'border',
      isDark.value
        ? 'border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02]'
        : 'border-[#e7dcff] bg-gradient-to-br from-[#f4eeff] via-white to-white shadow-[0_22px_45px_-30px_rgba(110,64,152,0.45)]'
    ])

    const mediaGlowClasses = computed(() => [
      'absolute',
      'inset-0',
      'pointer-events-none',
      'blur-3xl',
      'transition-opacity',
      isDark.value
        ? 'bg-gradient-to-br from-[#6e3ff9]/20 via-transparent to-[#24c1ff]/20 opacity-80'
        : 'bg-gradient-to-br from-[#6e3ff9]/15 via-transparent to-[#24c1ff]/15 opacity-70'
    ])

    const mediaInnerClasses = computed(() => [
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'rounded-[2.3rem]',
      'p-10',
      'backdrop-blur-xl',
      'transition-colors',
      isDark.value ? 'bg-[#090513]/85' : 'bg-white'
    ])

    const mediaIconWrapperClasses = computed(() => [
      'flex',
      'h-48',
      'w-48',
      'items-center',
      'justify-center',
      'rounded-[1.75rem]',
      'border',
      'shadow-[0_0_45px_rgba(78,44,200,0.35)]',
      'transition-colors',
      isDark.value
        ? 'border-white/10 bg-gradient-to-br from-[#6e3ff9]/25 to-[#24c1ff]/15'
        : 'border-[#e0d7f3] bg-gradient-to-br from-[#f5f0ff] to-white'
    ])

    const tagClasses = computed(() => [
      'inline-flex',
      'items-center',
      'rounded-full',
      'border',
      'px-4',
      'py-1',
      'text-[11px]',
      'uppercase',
      'tracking-[0.35em]',
      'transition-colors',
      isDark.value
        ? 'border-white/15 bg-white/10 text-white/70'
        : 'border-[#e0d7f3] bg-[#f5f0ff] text-[#6E4098]'
    ])

    const panelTitleClasses = computed(() => [
      'mt-6',
      'text-3xl',
      'md:text-4xl',
      'font-bold',
      'leading-snug',
      'transition-colors',
      isDark.value ? 'text-white' : 'text-[#1b1037]'
    ])

    const panelDescriptionClasses = computed(() => [
      'mt-4',
      'text-base',
      'md:text-lg',
      'leading-relaxed',
      'transition-colors',
      isDark.value ? 'text-white/70' : 'text-slate-600'
    ])

    const featureTextClasses = computed(() => [
      'text-sm',
      'md:text-base',
      'leading-relaxed',
      'transition-colors',
      isDark.value ? 'text-white/80' : 'text-slate-600'
    ])

    const metricCardClasses = computed(() => [
      'rounded-2xl',
      'border',
      'px-4',
      'py-5',
      'text-center',
      'backdrop-blur-sm',
      'transition-colors',
      isDark.value
        ? 'border-white/10 bg-white/[0.05]'
        : 'border-[#e0d7f3] bg-white'
    ])

    const metricValueClasses = computed(() => [
      'text-2xl',
      'font-semibold',
      'transition-colors',
      isDark.value ? 'text-white' : 'text-[#6E4098]'
    ])

    const metricLabelClasses = computed(() => [
      'mt-2',
      'text-[11px]',
      'uppercase',
      'tracking-[0.2em]',
      'transition-colors',
      isDark.value ? 'text-white/50' : 'text-[#6E4098]/60'
    ])

    return {
      tabs,
      activeTabIndex,
      activeTab,
      setActive,
      storylineIcon,
      isDark,
      sectionClasses,
      wrapperClasses,
      eyebrowClasses,
      titleClasses,
      descriptionClasses,
      mediaWrapperClasses,
      mediaGlowClasses,
      mediaInnerClasses,
      mediaIconWrapperClasses,
      tagClasses,
      panelTitleClasses,
      panelDescriptionClasses,
      featureTextClasses,
      metricCardClasses,
      metricValueClasses,
      metricLabelClasses
    }
  }
}
</script>
