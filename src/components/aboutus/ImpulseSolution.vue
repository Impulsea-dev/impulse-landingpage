<template>
    <div>
        <section class="bg-gradient-to-b from-[#7F39E9] to-[#472083]">
            <span class="text-4xl text-white font-bold flex justify-center mx-auto w-[700px] text-center pt-32">{{
                t('aboutUsLeadingIndustryTitle') }}</span>

            <div class="flex flex-row justify-center items-center gap-4 mx-20">
                <span class="text-white text-lg">Impulse is a telecommunications solution provider established and managed by leading industry and
                    technology professionals With over 100 years of combined experience, our telco experts understand
                    the challenges clients face with data, legacy systems, and customer information. We simplify these
                    complexities and make data easy to understand, empowering clients to make informed decisions and
                    manage their businesses with confidence. Trust us to navigate the complexities of the
                    telecommunications industry.</span>
                <img src="@/assets/images/isimg.svg" class="w-[1920px] h-96" alt="">
            </div>
        </section>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


</script>