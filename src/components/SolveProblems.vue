<template>
    <div class="px-6 lg:px-20 xl:px-36">
        <div class="text-center text-2xl md:text-4xl text-white font-bold pb-24">We solve your three biggest problems</div>
        <div class="grid md:grid-cols-3 gap-10">
            <div class="rounded-xl transition-opacity duration-1000" :class="{
                'bgSMS': hover == 0,
                'bgads': hover == 1,
                'bgbpo': hover == 2
            }"></div>
            <div class="md:col-span-2">
                <div class="flex flex-row gap-4 mb-6 transition-colors duration-300 cursor-pointer"
                    v-for="(inf, index) in info" :key="index" @mouseenter="hover = index"
                    :class="{ 'text-white/50': hover != index }">
                    <div class="w-14 h-14 border-2 flex items-center justify-center text-2xl rounded-lg text-white transition-colors duration-500"
                        :class="{ 'bg-red-500 border-none': hover == index }">
                        {{ inf.id }}
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <div class="text-lg md:text-xl font-bold">{{ inf.title }}</div>
                        <div class="text-base">{{ inf.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            info: [
                {
                    id: 1,
                    title: 'You are not upselling or cross selling to your existing user base',
                    text: 'You are not sending emails or SMS messages to encourage customers to upgrade their packages when their circuit usage surges, and you are also not to analysing customer behaviour.'

                },
                {
                    id: 2,
                    title: 'Your Ads are not converting as they used to',
                    text: `Because all ISPs are putting more ad dollars into the mix, it's become a tougher playing field, and your ads aren't converting as they used to. We craft ads to differentiate you from your competition and implement killer ad strategies.`
                },
                {
                    id: 3,
                    title: 'Considering outsourcing but have not pulled the trigger',
                    text: `The big players? They've been into outsourcing for over a decade, and they keep on growing. With our BPO solutions, we can step up your operational game and slash costs by more than 40%`
                }
            ],
            hover: 0
        }
    }
}
</script>
<style >
.bgSMS {
    margin: 70px;
    padding-left: 240px;
    background: url(@/assets/images/smsi.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
}

.bgads {
    margin: 70px;
    background: url(@/assets/images/adsi.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
}

.bgbpo {
    margin: 70px;
    background: url(@/assets/images/bpoi.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
}
</style>