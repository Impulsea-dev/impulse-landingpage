<template>
    <section class="relative l-section lg:bg-white z-10" data-header-color="black" data-header-bg="white">
        <div
            class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-5xl py-14 w-2/3 mx-auto text-center">
            <span class="animate-pulse block xl:hidden">
                Trusted by Global Telecom Leaders to Transform Revenue Operations
            </span>
        </div>
        <CardSelectedItem :items="benifits" class="pb-20" />
        <div
            class="absolute inset-x-0 top-0 xl:-translate-y-6 2xl:-translate-y-20 bg-white xl:block hidden md:rounded-t-[8rem]">
            <div
                class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl py-14 w-2/3 mx-auto text-center">
                <span class="animate-pulse">
                    Trusted by Global Telecom Leaders to Transform Revenue Operations
                </span>
            </div>
        </div>
    </section>

</template>
<script setup>
import { ref } from 'vue'
import benifit1 from '../assets/images/benifit.svg'
import benifit2 from '../assets/images/benifit2.svg'
import benifit3 from '../assets/images/benifit3.svg'
import CardSelectedItem from "@/components/CardSelectedItem.vue"
const benifits = ref([{
    title: 'Revenue Growth, Not Just Reports',
    subtitle: 'Identify upsell opportunities and boost ARPU with AI-driven customer insights, bandwidth behavior analytics, and proactive retention tools.',
    img: benifit1
}, {
    title: 'AI for Sales & Support Teams',
    subtitle: 'Equip your frontline teams with real-time alerts, smart recommendations, and prebuilt automations that drive action – not just data.',
    img: benifit2
}, {
    title: 'Plug & Play Integrations',
    subtitle: 'Connect to your existing GPON, SNMP routers, billing platforms, CRMs, and support tools with ease. No rip-and-replace needed.',
    img: benifit3
}])
</script>