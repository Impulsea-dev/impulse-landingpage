<template>
    <div class="mt-20 mb-20">
        <CardSelectedItem :items="items" />
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import CardSelectedItem from "@/components/CardSelectedItem.vue"
import mission from "@/assets/images/mission.svg"
import vision from "@/assets/images/vision.svg"
import { computed } from 'vue'
const items = computed(() => [
    {
        title:t('mission'),
        subtitle: t('missionTitle'),
        subtitledes: t('missionDescription'),
        img: mission
    },
    {
        title: t('vision'),
        subtitle: t('visionTitle'),
        subtitledes: t('visionDescription'),
        img: vision
    },
])
</script>