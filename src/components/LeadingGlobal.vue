<template>
    <section class="relative -mt-18 md:-mt-22 lg:-mt-22 xl:-mt-32 z-50 px-2 md:px-2 lg:px-2 bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: `url(${rectangleImg})` }" data-header-color="black" data-header-bg="white">
        <!-- Versión móvil -->
        <div
            class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-5xl py-14  mx-auto text-center xl:hidden">
            <span class="animate-pulse">
            </span>
            <div class="flex flex-col items-center w-full px-6  lg:px-16 pb-16 md:pb-20">
                <div class="w-full">
                    <StoryLaneEmbed class="w-full" />
                </div>
            </div>
        </div>

        <!-- Versión desktop -->
        <div class="xl:block hidden bg-white/90 rounded-t-[2rem] md:rounded-t-[1rem] lg:rounded-[1rem] mx-auto max-w-[61rem] shadow-[0_-8px_30px_rgba(0,0,0,0.08),0_10px_40px_rgba(0,0,0,0.06)]">
            <!-- Título -->
            <div class="flex justify-center pt-2 md:pt-2 pb-2 px-6">

            </div>

            <!-- StoryLane Embed Container -->
            <div class="flex flex-col items-center w-full  pb-8 md:pb-7">
                <div class="w-full max-w-[950px]">
                    <StoryLaneEmbed class="w-full" />
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>
import { useI18n } from 'vue-i18n'
import StoryLaneEmbed from './StoryLaneEmbed.vue'
import { computed } from 'vue'
import rectangleImg from '@/assets/images/rectangle.svg'

const { t } = useI18n()
const benifits = computed(() => [{
    title: t('leadingGlobalBenefits.option1.title'),
    subtitle: t('leadingGlobalBenefits.option1.subtitle'),
    img: benifit1
}, {
    title: t('leadingGlobalBenefits.option2.title'),
    subtitle: t('leadingGlobalBenefits.option2.subtitle'),
    img: benifit2
}, {
    title: t('leadingGlobalBenefits.option3.title'),
    subtitle: t('leadingGlobalBenefits.option3.subtitle'),
    img: benifit3
}])
</script>