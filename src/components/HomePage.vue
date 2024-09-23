<template>
    <div>
        <section class="l-section h-screen min-h-screen w-screen text-center relative overflow-hidden"
            data-header-color="white" data-header-bg="transparent">
            <div class="flex flex-col h-full relative z-30 animate-fade-up animate-delay-300">
                <div
                    class="pt-60 md:pt-32 2xl:pt-40 px-10 md:pl-40 md:w-[600px] lg:w-[650px] xl:w-[850px] text-center md:text-start">
                    <h1
                        class="text-black-900 md:text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold pb-6 font-Monda">
                        THE
                        REVENUE
                        DRIVEN AI CLOUD FOR
                        THE
                        TELCO INDUSTRY</h1>
                    <p class="text-black-900 md:text-white text-lg pb-6 xl:w-[80%]">
                        Drive revenue growth, Improve team productivity and decision making with our next generation
                        solutions.
                    </p>
                    <div class="flex justify-center md:justify-start">

                        <ButtonProgress :isAnchor="true"
                            :href="`https://impulse.na.chilipiper.com/book/me/brian-molina?type=impulse-introduction`"
                            :target="'_blank'"
                            :class="'normal-case px-4 md:px-5 py-2 text-sm md:text-base bg-[#7F39E9] before:bg-[#662ebb] text-white !border-none'">
                            Book a Demo
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