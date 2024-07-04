<template>
    <section class="l-section relative" data-header-color="black" data-header-bg="white">
        <div class="mx-20">
        <div class="flex justify-between mt-60 relative">
            <div class="flex flex-col gap-y-2">
                <span class="text-[#7F39E9] text-xl">Resources</span>
                <span class="text-6xl w-2/3 text-[#3D0075] font-bold">Unlock your team’s revenue potential</span>
            </div>
            <div class="flex flex-grow gap-x-2">
                <article class="rounded-xl p-4 h-60 w-96" v-for="(card, i) in cardsInfo"
                    :style="{ backgroundImage: `url(${card.img})`, backgroundPosition: 'center' }" :key="i">
                    <div class="flex flex-col gap-y-1 mt-4">
                        <span class="text-white text-xl font-bold">{{ card.title }}</span>
                        <span class="text-base text-white font-bold">{{ card.description }}</span>
                    </div>
                </article>
            </div>
        </div>
        <div class="flex gap-2 mb-60">
            <a class="bg-black-500 px-2 py-2 rounded" href="">
                <div class="flex flex-row items-center gap-x-2 w-52">
                    <img src="../assets/images/podcast.svg" class="w-10 h-10" alt="">
                    <div class="flex flex-col">
                        <span class="text-white/80">Listen on</span>
                        <span class="text-white font-bold">Impulse Podcast</span>
                    </div>
                </div>
            </a>
            <a class="bg-black-500 px-2 py-2 rounded" href="">
                <div class="flex flex-row items-center gap-x-2 w-52">
                    <img src="../assets/images/youtube.svg" class="w-10 h-10" alt="">
                    <div class="flex flex-col">
                        <span class="text-white/80">Listen on</span>
                        <span class="text-white font-bold">Youtube</span>
                    </div>
                </div>
            </a>
        </div>
        <img src="../assets/images/rectangle.svg" class="absolute -top-60 left-0 -z-10" alt="">
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