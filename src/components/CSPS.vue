<template>
    <section class="l-section bg-[linear-gradient(180deg,#6B46C1_0%,#805AD5_84.79%,#9F7AEA_100%)]"
        data-header-color="black" data-header-bg="white">
        <div class="animated-container opacity-0">
            <div
                class="flex justify-center text-white font-bold font-Monda text-2xl md:text-3xl xl:text-4xl pt-16 pb-10 w-1/2 mx-auto text-center">
                {{ $t('cspsTitle') }}
            </div>
            <div class="px-4 py-12">
                <div class="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="(item, idx) in reqs" :key="idx" class="group relative flex flex-col gap-4 cursor-pointer
               bg-white rounded-2xl p-6 shadow-md transition-colors duration-300
         hover:bg-gradient-to-br hover:from-[#4299E1] hover:to-[#2B6CB0] hover:text-white">
                        <div class="flex justify-center items-center">
                           <Icon :icon="item.icon" class="text-5xl"/>
                        </div>
                        <!-- Título -->
                        <h3 class="text-lg font-bold font-Monda group-hover:text-white transition-colors duration-300">
                            {{ item.title }}
                        </h3>

                        <!-- Descripción -->
                        <p class="text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                            {{ item.details }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center py-10">
            <a href="https://meetings.hubspot.com/brian-molina/impulse-introduction" target="_blank" class="text-white hover:text-white/80 font-bold text-base md:text-lg xl:text-2xl cursor-pointer
                font-Monda mt-5">{{ $t('cspsDetails') }} ></a>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import ModalInAction from "@/components/ModalInAction.vue"
import useIntersectionObserver from '@/composables/useIntersectionObserver';
import Icon from '@/components/Icon'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Blocks from "./Blocks.vue"
import { computed } from "vue";
const reqs = computed(() => [
    {
        title: t('cspsOptions.option1.title'),
        details: t('cspsOptions.option1.details'),
        icon:'ion:server-outline'
    },
    {
        title: t('cspsOptions.option2.title'),
        details: t('cspsOptions.option2.details'),
        icon: 'basil:lightning-outline'
    },
    {
        title: t('cspsOptions.option3.title'),
        details: t('cspsOptions.option3.details'),
        icon:'prime:chart-bar'
    },
    {
        title: t('cspsOptions.option4.title'),
        details: t('cspsOptions.option4.details'),
        icon: 'ri:currency-line'
    },
    // {
    //     title: t('cspsOptions.option5.title'),
    //     details: t('cspsOptions.option5.details')
    // }
]);

const { observe } = useIntersectionObserver('animate-fade-up');
onMounted(() => {
    const elementsToAnimate = document.querySelectorAll('.animated-container');
    elementsToAnimate.forEach((element) => {
        observe(element);
    });
})

const active = ref(-1)

</script>

<style scoped>
.details-container>details {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 0;
}

.details-container>details:hover {
    color: #ffffffb3;
    transition: all 0.5s;
}

@media (min-width: 1280px) {
    details>summary {
        list-style-image: url('../assets/images/right.svg');
    }
}

details>summary {
    cursor: pointer;
}

@media (min-width: 1280px) {
    details[open]>summary {
        list-style-image: url('../assets/images/down.svg');
    }
}

details[open]>summary {
    margin-top: 10px;
}

details>summary svg {
    width: 2px;
    height: 2px;
}

details[open]>summary~* {
    animation: sweep 0.5s ease-in-out;
}

details[open] {
    color: #ffffffb3;
}
</style>