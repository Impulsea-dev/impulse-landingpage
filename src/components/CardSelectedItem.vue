<template>
    <div class="relative">
        <article class="bg-[#F6F6F6] border shadow-2xl mx-5 md:mx-10 2xl:mx-20 overflow-hidden rounded-xl">
            <div class="flex flex-col md:flex-row justify-between items-center px-5 lg:px-20 py-10 md:py-20">

                <!-- Botones -->
                <div class="flex flex-col px-5">
                    <span
                        class="relative text-center px-6 py-3 cursor-pointer border text-sm xl:text-xl font-bold rounded w-full transition-all duration-300"
                        :class="currentItem == i
                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent'
                            : 'bg-[#F2EDED] text-gray-400 border-gray-300'" v-for="(item, i) in items" :key="i" @click="currentItem = i">
                        {{ item.title }}
                    </span>
                </div>

                <img src="../assets/images/arrows.svg" class="hidden md:block animate-pulse h-20 xl:h-32 2xl:h-40"
                    alt="">

                <div class="flex flex-col gap-2 min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] justify-center">
                    <p
                        class="text-base xl:text-lg text-[#263238] font-bold lg:w-[377px] text-center md:text-start mt-4 md:mt-0">
                        {{ items[currentItem].subtitle }}
                    </p>
                    <p class="text-base lg:w-[377px] text-center md:text-start" v-if="items[currentItem].subtitledes">
                        {{ items[currentItem].subtitledes }}
                    </p>
                </div>

                <img :src="items[currentItem].img"
                    class="h-[240px] xl:h-[260px] 2xl:h-[300px] hover:scale-95 transition-transform duration-300 mt-2 px-5 object-contain"
                    alt="" />
            </div>
        </article>

        <img src="@/assets/images/rectangle.svg" class="hidden md:block absolute top-0 left-0 -z-10" alt="">
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
})
const currentItem = ref(0)
</script>