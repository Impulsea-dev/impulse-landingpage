<template>
    <section class="l-section relative" data-header-color="black" data-header-bg="white">
        <div class="mx-5 md:mx-20">
            <div class="flex flex-col lg:flex-row justify-between mt-20 md:mt-60 gap-4 relative">
                <div class="flex flex-col gap-y-2">
                    <span class="text-[#7F39E9] text-xl">Resources</span>
                    <span class="text-2xl md:text-3xl xl:text-6xl xl:w-2/3 text-[#3D0075] font-bold">Unlock your team’s
                        revenue potential</span>
                </div>
                <div class="flex flex-col md:flex-row flex-grow gap-4">
                    <ImpulseFirstNew />
                    <ImpulseFirstBlog />
                </div>
            </div>
            <div class="flex gap-2 mb-20 xl:mb-60 mt-4">
                <a class="bg-black-500 px-2 py-2 rounded w-full md:w-52 transition-shadow hover:shadow-2xl duration-300"
                    href="https://open.spotify.com/show/2xsbT6w1MOuEe2DSyV1Mnx" target="_blank">
                    <div class="flex flex-row items-center gap-x-2">
                        <img src="../assets/images/podcast.svg" class="w-8 md:w-10" alt="">
                        <div class="flex flex-col">
                            <span class="text-white/80 text-xs md:text-base">Listen on</span>
                            <span class="text-white font-bold text-xs md:text-base">Impulse Podcast</span>
                        </div>
                    </div>
                </a>
                <a class="bg-black-500 px-2 py-2 rounded w-full md:w-52 transition-shadow hover:shadow-2xl duration-300"
                    href="https://www.youtube.com/@Impulseky" target="_blank">
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
import ImpulseFirstBlog from "@/components/ImpulseFirstBlog.vue"
import ImpulseFirstNew from "@/components/ImpulseFirstNew.vue"
</script>