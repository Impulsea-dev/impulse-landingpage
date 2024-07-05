<template>
    <section class="l-section relative" data-header-color="black" data-header-bg="white">
        <div class="mx-5 md:mx-20">
        <div class="flex flex-col md:flex-row justify-between mt-20 md:mt-60 gap-4 relative">
            <div class="flex flex-col gap-y-2">
                <span class="text-[#7F39E9] text-xl">Resources</span>
                <span class="text-2xl md:text-6xl md:w-2/3 text-[#3D0075] font-bold">Unlock your team’s revenue potential</span>
            </div>
            <div class="flex flex-col md:flex-row flex-grow gap-4">
                <article class="rounded-xl p-4 h-60 w-full md:w-96" v-for="(card, i) in cardsInfo"
                    :style="{ backgroundImage: `url(${card.img})`, backgroundPosition: 'center' }" :key="i">
                    <div class="flex flex-col gap-y-1 mt-4">
                        <span class="text-white text-xl font-bold">{{ card.title }}</span>
                        <span class="text-base text-white font-bold">{{ card.description }}</span>
                    </div>
                </article>
            </div>
        </div>
        <div class="flex gap-2 mb-20 md:mb-60 mt-4 md:mt-0">
            <a class="bg-black-500 px-2 py-2 rounded w-full md:w-52" href="">
                <div class="flex flex-row items-center gap-x-2">
                    <img src="../assets/images/podcast.svg" class="w-8 md:w-10" alt="">
                    <div class="flex flex-col">
                        <span class="text-white/80 text-xs md:text-base">Listen on</span>
                        <span class="text-white font-bold text-xs md:text-base">Impulse Podcast</span>
                    </div>
                </div>
            </a>
            <a class="bg-black-500 px-2 py-2 rounded w-full md:w-52" href="">
                <div class="flex flex-row items-center gap-x-2">
                    <img src="../assets/images/youtube.svg" class="w-8 md:w-10" alt="">
                    <div class="flex flex-col">
                        <span class="text-white/80 text-xs md:text-base">Listen on</span>
                        <span class="text-white font-bold text-xs md:text-base">Youtube</span>
                    </div>
                </div>
            </a>
        </div>
        <img src="../assets/images/rectangle.svg" class="hidden md:block absolute -top-60 left-0 -z-10" alt="">
    </div>

    </section>
</template>
<script setup>
import bgnews from "../assets/images/bgnews.svg"
import bgblogs from "../assets/images/bgblogs.svg"
const cardsInfo = [{
    title: 'Impulse News',
    description: 'New Description',
    img: bgnews
}, {
    title: 'Impulse Blogs',
    description: 'Blog Description',
    img: bgblogs
}]
</script>