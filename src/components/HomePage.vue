<template>
    <div>
        <section class="l-section h-screen w-screen text-center relative overflow-hidden" data-header-color="white"
            data-header-bg="transparent">
            <div class="flex flex-col h-full relative z-30">
                <div class="pt-60 md:pt-40 px-10 md:w-[700px] text-center md:text-start">
                    <h2 class="text-black-900 md:text-white text-2xl md:text-6xl font-bold pb-4">THE REVENUE
                        DRIVEN AI CLOUD FOR
                        THE
                        TELECOMMUNICATION INDUSTRY</h2>
                    <p class="text-black-900 md:text-white text-lg md:text-2xl pb-4">
                        Drive revenue growth, Improve team productivity and decision making with our next generation
                        solutions.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <router-link class="px-4 md:px-6 py-2 md:py-3 text-base md:text-xl font-bold inline-block skew-x-0 text-center 
                        cursor-pointer rounded-full hover:before:rounded-full before:absolute before:-inset-0.5 before:origin-right bg-[#7F39E9]
        before:scale-x-0 before:bg-[#662ebb] text-white hover:before:origin-left hover:before:scale-x-100
        ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 
        motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 
        motion-safe:hover:before:ease-out motion-safe:before:rounded-full" to="">
                            <span class="inline-block skew-x-0">
                                BOOK A
                                DEMO </span></router-link>
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

</script>