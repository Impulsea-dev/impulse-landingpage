<template>
    <div>
        <section class="relative mt-24 md:mt-32 md:mb-32">
            <div class="mx-5 md:mx-10 xl:mx-20 animate-fade-up animate-delay-300">
                <span class="text-[#3D0075] text-2xl md:text-4xl font-bold flex justify-center">{{
                    $t('aboutUsExecutiveTeamTitle')
                    }}</span>
                <div class="flex flex-row justify-center flex-wrap xl:flex-nowrap mt-10 pb-20 md-pb-0 md:mt-20 gap-5">
                    <article
                        class="bg-[#F6F6F6] shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl px-6 py-4 flex justify-center items-center"
                        v-for="(team, i) in teams" :key="i">
                        <div class="flex flex-col md:flex-row justify-center items-center gap-4">
                            <img :src="team.img" alt="" class="w-60 h-60 rounded" />
                            <div class="flex flex-col justify-center gap-2 items-center md:items-start">
                                <div class="flex items-center gap-1">
                                    <span class="text-lg md:text-xl font-bold text-black-500">{{ team.name }}</span>
                                    <a :href="team.linkedin" target="_blank" class="cursor-pointer">
                                        <Icon icon="skill-icons:linkedin" class="text-lg" />
                                    </a>


                                </div>
                                <span class="text-sm md:text-base text-[#0079D8] font-bold">{{ team.position }}</span>
                                <p class="text-sm md:text-base max-w-3xl">{{ team.description }}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <img src="@/assets/images/rectangle.svg" class="hidden md:block absolute top-0 left-0 -z-10" alt="">
        </section>
    </div>
</template>
<script setup>
import Brian from "@/assets/images/svgs/brian.jpg"
import Rob from "@/assets/images/svgs/rob.jpg"
import { useI18n } from 'vue-i18n'
import Icon from "@/components/Icon"
import { ref } from "vue"
const { t } = useI18n()

const teams = ref([{
    name: 'Brian Molina',
    position: 'Impulse Founder and CEO',
    description: `Software Engineer and Technologist with 15 years of telecom and technology experience. Developed apps with millions of downloads, successfully exited two companies. Top sales executive at multiple CSP’s.`,
    img: Brian,
    linkedin: `https://www.linkedin.com/in/brian-molina-b91a46152/`
}, {
    name: 'Rob McNabb',
    position: 'Co-Founder and NED',
    description: `Currently - Google Telco Industry Business Principal working with telco’s on AI and Cloud transformation A former CEO of a startup to $50M/ARR CSP, McNabb brings a wealth of experience knowing exactly what our target market needs to succeed`,
    img: Rob,
    linkedin: `https://www.linkedin.com/in/robmcnabb/`
}])

</script>