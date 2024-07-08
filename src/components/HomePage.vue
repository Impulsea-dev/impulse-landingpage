<template>
    <div>
        <section class="l-section h-screen w-screen text-center relative overflow-hidden" data-header-color="white"
            data-header-bg="transparent">
            <div class="flex flex-col h-full relative z-30 animate-fade-up animate-delay-500">
                <div class="pt-60 md:pt-40 px-10 md:pl-40 md:w-[500px] xl:w-[850px] text-center md:text-start">
                    <h2 class="text-black-900 md:text-white text-2xl md:text-4xl xl:text-6xl font-bold pb-6">THE REVENUE
                        DRIVEN AI CLOUD FOR
                        THE
                        TELECOMMUNICATIONS INDUSTRY</h2>
                    <p class="text-black-900 md:text-white text-lg md:text-xl pb-6">
                        Drive revenue growth, Improve team productivity and decision making with our next generation
                        solutions.
                    </p>
                    <div class="flex justify-center md:justify-start">

                        <ButtonProgress :isAnchor="true"
                            :href="`https://impulse.na.chilipiper.com/book/me/brian-molina?type=impulse-introduction`"
                            :target="'_blank'"
                            :class="'px-4 md:px-5 py-2 text-sm md:text-base xl:text-lg bg-[#7F39E9] before:bg-[#662ebb] text-white !border-none font-bold'">
                            BOOK A DEMO
                        </ButtonProgress>
                    </div>
                </div>
                <div class="flex flex-col flex-grow justify-end pb-20">
                    <OurPartners />
                </div>
            </div>
            <slot name="videol"></slot>

        </section>
    </div>
</template>
<script setup>
import OurPartners from "@/components/OurPartners.vue"
import ButtonProgress from "@/components/ButtonProgress.vue"

</script>