<template>
    <div class="mt-20 mb-20">
        <CardSelectedItem :items="items" />
    </div>
</template>
<script setup>
import CardSelectedItem from "@/components/CardSelectedItem.vue"
import mission from "@/assets/images/mission.svg"
import vision from "@/assets/images/vision.svg"
const items = [
    {
        title: 'Our Mission',
        subtitle:'The telecommunications industry holds vast untapped potential.',
        subtitledes: `Our aim is to assist companies in increasing their profitability through our solutions and services. We are dedicated to creating most innovative solutions for the industry and achieving this by attentively listening to our customers and being their most reliable partners.`,
        img: mission

    },
    {
        title: 'Our Vision',
        subtitle:'Our vision is to be the leading provider of telecom solutions worldwide.',
        subtitledes: `We are committed to developing most innovative technology, tools, and services for our partners, and are dedicated to making this vision a reality. We are constantly seeking out new talent and innovative technologies to help us achieve our goal, and 
        our partners will benefit from our relentless pursuit of excellence.`,
        img: vision
    }]
</script>