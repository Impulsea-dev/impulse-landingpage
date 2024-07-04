<template>
    <section class="l-section" data-header-color="black" data-header-bg="white">
        <div class="flex justify-center text-[#3D0075] font-bold text-5xl py-4 w-2/3 mx-auto text-center mt-32">
            Leading Global CSPS’s Rely on ImpulseOS for streamlined revenue workloads
        </div>
        <div class="relative">
            <article class="bg-[#F6F6F6] border shadow-2xl mx-20 my-52 overflow-hidden">
                <div class="flex flex-row justify-between items-center px-16 py-20">
                    <div class="flex flex-col px-5">
                        <span class="relative text-center px-6 py-3 cursor-pointer border text-2xl font-bold" :class="{
                                'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-x-110': currentBeni == i,
                                'bg-[#F2EDED] text-gray-400': currentBeni != i,

                            }" v-for="(beni, i) in benifits" :key="i" @click="currentBeni = i">
                            {{ beni.title }}
                            <!-- <img src="../assets/images/buttonballs.png" class="absolute top-0 right-0 -z-10" alt=""> -->
                        </span>
                    </div>
                    <img src="../assets/images/arrows.svg" class="animate-pulse h-40" alt="">
                    <p class="text-xl text-[#263238] font-bold w-[377px]">
                        {{ benifits[currentBeni].subtitle }}
                    </p>
                    <img :src="benifits[currentBeni].img" class="h-80 hover:scale-95 transition-transform duration-300" alt="">
                </div>
            </article>
            <img src="../assets/images/rectangle.svg" class="absolute -top-44 left-0 -z-10" alt="">
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