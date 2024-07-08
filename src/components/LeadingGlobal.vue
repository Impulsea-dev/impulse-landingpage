<template>
    <section class="l-section" data-header-color="black" data-header-bg="white">
        <div class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-5xl py-4 w-2/3 mx-auto 
        text-center mt-0 md:mt-24 animate-fade-up animate-delay-500">
            Leading Global CSPS’s Rely on ImpulseOS for streamlined revenue workloads
        </div>
        <div class="relative">
            <article class="bg-[#F6F6F6] border shadow-2xl mx-5 md:mx-10 xl:mx-20 my-10 md:my-40 overflow-hidden">
                <div class="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 py-10 md:py-20">
                    <div class="flex flex-col px-5">
                        <span class="relative text-center px-6 py-3 cursor-pointer border text-base md:text-lg xl:text-2xl font-bold" :class="{
                                'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-x-110': currentBeni == i,
                                'bg-[#F2EDED] text-gray-400': currentBeni != i,

                            }" v-for="(beni, i) in benifits" :key="i" @click="currentBeni = i">
                            {{ beni.title }}
                        </span>
                    </div>
                    <img src="../assets/images/arrows.svg" class="animate-pulse h-20 xl:h-40" alt="">
                    <p class="text-base xl:text-xl text-[#263238] font-bold md:w-[377px] text-center md:text-start">
                        {{ benifits[currentBeni].subtitle }}
                    </p>
                    <img :src="benifits[currentBeni].img" class="h-60 md:h-40 xl:h-80 hover:scale-95 transition-transform duration-300" alt="">
                </div>
            </article>
            <img src="../assets/images/rectangle.svg" class="hidden md:block absolute -top-44 left-0 -z-10" alt="">
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import benifit1 from '../assets/images/benifit.svg'
import benifit2 from '../assets/images/benifit2.svg'
import benifit3 from '../assets/images/benifit3.svg'
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