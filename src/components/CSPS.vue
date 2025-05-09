<template>
    <section class="l-section bg-[linear-gradient(180deg,#0575E6_0%,#02298A_84.79%,#021B79_100%)]"
        data-header-color="black" data-header-bg="white">
        <div class="animated-container opacity-0">
            <div
                class="flex justify-center text-white font-bold font-Monda text-2xl md:text-3xl xl:text-5xl pt-16 pb-10 w-1/2 mx-auto text-center">
                {{ $t('cspsTitle') }}
            </div>
            <div class="flex flex-col items-center">
                <div class="flex flex-col gap-y-2 md:gap-y-5 xl:gap-y-6 text-white details-container">
                    <details v-for="(re, index) in reqs" :key="index" name="req" @click="active = index">
                        <summary class="text-lg sm:text-xl xl:text-3xl font-bold font-Monda">{{ re.title }}</summary>
                        <p class="pt-4 max-w-md 2xl:max-w-2xl font-Monda">{{ re.details }}</p>
                        <!-- <ModalInAction /> -->
                    </details>
                </div>
                <!-- <Blocks :active-block="active" :key="active" class="hidden xl:block" /> -->
            </div>
        </div>


        <div class="flex justify-center py-10">
            <a href="https://meetings.hubspot.com/brian-molina/impulse-introduction" target="_blank"
                class="text-white hover:text-white/80 font-bold text-base md:text-lg xl:text-2xl cursor-pointer
                font-Monda mt-5">{{ $t('cspsDetails') }} ></a>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import ModalInAction from "@/components/ModalInAction.vue"
import useIntersectionObserver from '@/composables/useIntersectionObserver';
import { useI18n } from 'vue-i18n' 
const { t } = useI18n()
import Blocks from "./Blocks.vue"
import { computed } from "vue";
const reqs = computed(() => [
    {
        title: t('cspsOptions.option1.title'),
        details: t('cspsOptions.option1.details')           
    },
    {
        title: t('cspsOptions.option2.title'),
        details: t('cspsOptions.option2.details')
    },
    {
        title: t('cspsOptions.option3.title'),
        details: t('cspsOptions.option3.details')
    },
    {
        title: t('cspsOptions.option4.title'),
        details: t('cspsOptions.option4.details')
    },
    {
        title: t('cspsOptions.option5.title'),
        details: t('cspsOptions.option5.details')
    }
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

@keyframes sweep {
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>