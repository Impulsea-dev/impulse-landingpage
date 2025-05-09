<template>
    <section class="relative l-section lg:bg-white z-10" data-header-color="black" data-header-bg="white">
        <div
            class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-5xl py-14 w-2/3 mx-auto text-center">
            <span class="animate-pulse block xl:hidden">
                {{ $t('leadingGlobalTitle') }}
            </span>
        </div>
        <CardSelectedItem :items="benifits" class="pb-20 z-20" />
        <div
            class="absolute inset-x-0 top-0 xl:-translate-y-6 2xl:-translate-y-20 bg-white xl:block hidden md:rounded-t-[8rem]">
            <div
                class="flex justify-center text-[#3D0075] font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl py-14 w-2/3 mx-auto text-center">
                <span class="animate-pulse">
                    {{ $t('leadingGlobalTitle') }}
                </span>
            </div>
        </div>
    </section>

</template>
<script setup>
import { useI18n } from 'vue-i18n'
import benifit1 from '../assets/images/benifit.svg'
import benifit2 from '../assets/images/benifit2.svg'
import benifit3 from '../assets/images/benifit3.svg'
import CardSelectedItem from "@/components/CardSelectedItem.vue"
import { computed } from 'vue'
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