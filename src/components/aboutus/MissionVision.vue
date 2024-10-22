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
        subtitle: 'The telecommunications industry holds vast untapped potential.',
        subtitledes: `At Impulse, our mission is to empower small and medium Internet Service Providers (ISPs) with the 
        cutting-edge technology they need to thrive. By enhancing their operational efficiency and profitability, 
        we help these ISPs connect more people, sustain their businesses, and contribute to a decentralized internet 
        that benefits all`,
        img: mission

    },
    {
        title: 'Our Vision',
        subtitle: 'Our vision is to be the leading provider of telecom solutions worldwide.',
        subtitledes: `To create a future where the internet remains a decentralized space, empowering communities, 
        fostering innovation, and ensuring equal access to opportunities for everyone, 
        regardless of their location or circumstances.`,
        img: vision
    }]
</script>