<template>
    <section class="l-section" data-header-color="black" data-header-bg="white">
        <div
            class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-5xl py-14 w-2/3 mx-auto text-center">
            Leading Global CSPs Rely on ImpulseOS for streamlined revenue workloads
        </div>

        <CardSelectedItem :items="benifits" class="pb-20" />
    </section>
</template>
<script setup>
import { ref } from 'vue'
import benifit1 from '../assets/images/benifit.svg'
import benifit2 from '../assets/images/benifit2.svg'
import benifit3 from '../assets/images/benifit3.svg'
import CardSelectedItem from "@/components/CardSelectedItem.vue"
const benifits = ref([{
    title: 'Billing Made Easy',
    subtitle: 'Increase productivity and raise NPS with our simplified billing.',
    img: benifit1
}, {
    title: 'Team Productivity',
    subtitle: 'Our next-gen CRM for CSPs is built for effective communication and collaboration. Your operations will never be the same',
    img: benifit2
}, {
    title: 'Increase Your Revenue',
    subtitle: 'Accelerate your growth with AI-powered insights, advanced reporting, and sales enablement tools designed exclusively for CSPs',
    img: benifit3
}])

const currentBeni = ref(0)
</script>