<template>
    <div>
        <section class="bg-gradient-to-b from-[#7F39E9] to-[#472083]">
            <span
                class="text-xl md:text-2xl xl:text-4xl text-white font-bold flex justify-center mx-5 md:mx-auto md:w-[700px] text-center pt-10 md:pt-32">{{
                    t('aboutUsLeadingIndustryTitle') }}</span>

            <div
                class="flex flex-row flex-wrap xl:flex-nowrap items-center justify-center mx-5 xl:mx-20 pt-10 md:pt-20 pb-16 md:pb-32 gap-4">
                <span class="text-white text-base md:text-lg md:max-w-xl"> {{ t('aboutUsLeadingIndustryDescription')
                    }}</span>
                <img src="@/assets/images/isimg.svg"
                    class=" h-[260px] md:h-[200px] lg:h-[260px] xl:h-[360px] 2xl:h-[460px] rounded-lg" alt="">
            </div>
        </section>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


</script>