<template>
    <div class="px-6 lg:px-20 xl:px-36">
        <div class="text-center text-2xl md:text-4xl text-slate-900 dark:text-white font-bold pb-24"> {{
            $t('indexSolve') }}
        </div>
        <div class="grid md:grid-cols-2 gap-20">
            <div class="flex justify-center items-center">
                <div class="rounded-xl transition-opacity duration-1000" :class="{
            'bgSMS': hover == 0,
            'bgads': hover == 1,
            'bgbpo': hover == 2
        }"></div>
            </div>
            <div>
                <div class="flex flex-row gap-4 mb-6 transition-colors duration-300 cursor-pointer text-slate-900 dark:text-white"
                    v-for="(inf, index) in info" :key="index" @mouseenter="hover = index"
                    :class="{ 'text-slate-900/70 dark:text-white/50': hover != index }">
                    <div class="w-14 h-14 border-2 flex items-center justify-center text-2xl rounded-lg text-white transition-colors duration-500"
                        :class="{
            'bg-red-500 border-none': hover == index,
            'bg-gray-500 border-none ': hover != index,
        }">
                        {{ inf.id }}
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <div class="text-lg md:text-xl font-bold">{{ $t(inf.title) }}</div>
                        <div class="text-base">{{ $t(inf.text) }}</div>
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
        return { t, info }
    }
}
</script>
<style>
.bgSMS {
    width: 300px;
    height: 300px;
    background: url(@/assets/images/smsi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}

.bgads {
    width: 300px;
    height: 300px;
    background: url(@/assets/images/adsi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}

.bgbpo {
    width: 300px;
    height: 300px;
    background: url(@/assets/images/bpoi.webp) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>