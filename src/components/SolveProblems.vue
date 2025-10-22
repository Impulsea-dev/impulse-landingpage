<template>
    <div class="px-6 md:px-12 lg:px-20 xl:px-36 pt-32 pb-16">
        <div class="text-center max-w-3xl mx-auto pb-16">
            <p class="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#7F39E9]">
                {{ $t('indexSolveEyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl md:text-5xl text-white font-bold">
                {{ $t('indexSolve') }}
            </h2>
            <p class="mt-4 text-base md:text-lg text-white/70">
                {{ $t('indexSolveDescription') }}
            </p>
        </div>
        <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div class="flex justify-center">
                <div class="rounded-[2rem] transition-opacity duration-700 w-[260px] h-[260px] md:w-[320px] md:h-[320px]" :class="{
                    'bgSMS': hover == 0,
                    'bgads': hover == 1,
                    'bgbpo': hover == 2
                }"></div>
            </div>
            <div class="w-full">
                <div class="space-y-6">
                    <div
                        class="rounded-3xl border transition-all duration-300 cursor-pointer p-6 md:p-8 focus:outline-none"
                        v-for="(inf, index) in info" :key="index" @mouseenter="hover = index" @focus="hover = index"
                        tabindex="0"
                        :class="hover === index ? 'bg-white shadow-xl border-transparent' : 'bg-white/[0.06] border-white/10 hover:bg-white/[0.1]'">
                        <div class="flex flex-col gap-3">
                            <h3 class="text-xl md:text-2xl font-semibold"
                                :class="hover === index ? 'text-[#141414]' : 'text-white'">
                                {{ $t(inf.title) }}
                            </h3>
                            <p class="text-base md:text-lg leading-relaxed"
                                :class="hover === index ? 'text-slate-600' : 'text-white/70'">
                                {{ $t(inf.text) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    data() {
        return {
            hover: 0
        }
    },
    setup() {
        const { t } = useI18n()
        const info = [
                {
                    id: 1,
                    title: 'indexSolveProblemsTitle-1',
                    text: 'indexSolveProblemsText-1'

                },
                {
                    id: 2,
                    title: 'indexSolveProblemsTitle-2',
                    text: 'indexSolveProblemsText-2'

                },
                {
                    id: 3,
                    title: 'indexSolveProblemsTitle-3',
                    text: 'indexSolveProblemsText-3'

                }
            ];
        return { t,info }
    }
}
</script>
<style>
.bgSMS {
    background: url(@/assets/images/smsi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}

.bgads {
    background: url(@/assets/images/adsi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}

.bgbpo {
    background: url(@/assets/images/bpoi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
