<template>
    <div class="!remove-padding-all">
        <div class="relative w-full min-h-[400px] md:min-h-[600px] 2xl:min-h-[700px] bg-[#9898D1]">
            <div class="absolute inset-0  mt-10">
                <div class="hidden md:flex">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="flex min-h-full flex-col pl-32 items-start justify-center w-full gap-4">
                            <h3 class="text-3xl md:text-6xl font-bold text-white font-Monda">Impulse Pay</h3>
                            <h4 class="text-2xl md:text-3xl text-white font-bold font-Monda">
                                {{ $t('payInfo-1.subtitle') }}</h4>
                            <p class="text-base text-white font-Monda">{{ $t('payInfo-1.paragraph') }} </p>
                        </div>

                        <div class="hidden md:flex justify-center items-center mt-16">
                            <img src="@/assets/images/payBoy.png" alt="Avatar"
                                class="object-contain w-[450px] h-[450px] 2xl:w-[521px] 2xl:h-[521px] animate-pulse" />
                        </div>
                    </div>
                </div>

                <div class="flex md:hidden">
                    <div class="flex flex-col text-center gap-2 mt-10">
                        <h3 class="text-2xl font-bold !text-white font-Monda">Impulse Pay</h3>
                        <h4 class="text-xl !text-white font-bold font-Monda">{{ $t('payInfo-1.subtitle') }}</h4>
                        <p class="text-sm text-white font-Monda p-4">{{ $t('payInfo-1.paragraph') }} </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-20 mb-20">
            <div class="flex flex-col items-center gap-2">
                <span class="text-xl text-slate-900 dark:text-white font-bold font-Monda">{{ $t('payInfo-2.title')
                    }}</span>
                <div class="text-base text-slate-900 dark:text-white font-Monda w-60 md:w-[550px]">{{
                                    $t('payInfo-2.paragraph') }}</div>
            </div>

            <div class="flex flex-col md:flex-row gap-10 md:gap-32 justify-center mt-20">
                <div class="flex flex-col gap-4 hover:scale-105 items-center">
                    <div
                        class="flex justify-center items-center w-[135px] h-[135px] rounded-[13.5px] bg-[#111315] border-[2.7px] border-none">
                        <img src="@/assets/images/bank.png" />
                    </div>
                    <div class="text-center text-slate-900 dark:text-white font-bold font-Monda">
                        {{ $t('payInfo-2.options.1') }}
                    </div>
                </div>

                <div class="flex flex-col gap-4 hover:scale-105 items-center">
                    <div
                        class="flex justify-center items-center w-[135px] h-[135px] rounded-[13.5px] bg-[#111315] border-[2.7px] border-none">
                        <img src="@/assets/images/phone.png" />
                    </div>
                    <div class="text-center text-slate-900 dark:text-white font-bold font-Monda">
                        {{ $t('payInfo-2.options.2') }}
                    </div>
                </div>

                <div class="flex flex-col gap-4 hover:scale-105 items-center">
                    <div
                        class="flex justify-center items-center w-[135px] h-[135px] rounded-[13.5px] bg-[#111315] border-[2.7px] border-none">
                        <img src="@/assets/images/clock.png" />
                    </div>
                    <div class="text-center text-slate-900 dark:text-white font-bold font-Monda">
                        {{ $t('payInfo-2.options.3') }}
                    </div>

                </div>
            </div>
        </div>

        <div class="relative w-full min-h-[450px] md:min-h-[600px] 2xl:min-h-[700px] bg-[#9898D1]">
            <div class="absolute inset-0">
                <div class="hidden md:flex">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="flex min-h-full flex-col pl-32 items-start justify-center w-full gap-4">
                            <h3 class="text-3xl !text-white font-bold capitalize">{{ $t('payInfo-3.title') }}</h3>
                            <p class="text-base text-white font-Monda">{{ $t('payInfo-3.paragraph-1') }}
                            </p>
                            <p class="text-base text-white font-Monda">{{ $t('payInfo-3.paragraph-2') }}</p>
                            <p class="text-base text-white font-Monda">{{ $t('payInfo-3.paragraph-3') }}</p>
                            <p class="text-base text-white font-Monda"> {{ $t('payInfo-3.paragraph-4') }}</p>

                        </div>

                        <div class="hidden md:flex justify-center items-center mt-16">
                            <img src="@/assets/images/phonelogin.png" alt="Avatar"
                                class="object-contain w-[450px] h-[450px] 2xl:w-[521px] 2xl:h-[521px] " />
                        </div>
                    </div>
                </div>
                <div class="flex md:hidden p-4">
                    <div class="flex flex-col text-center gap-4 mt-20">
                        <span class="text-xl text-slate-900 dark:text-white font-bold font-Monda capitalize">{{
                                    $t('payInfo-3.title') }}</span>
                        <p class="text-sm text-slate-900 dark:text-white font-Monda">{{ $t('payInfo-3.paragraph-1') }}
                        </p>
                        <p class="text-sm text-slate-900 dark:text-white font-Monda">{{ $t('payInfo-3.paragraph-2') }}
                        </p>
                        <p class="text-sm text-slate-900 dark:text-white font-Monda">{{ $t('payInfo-3.paragraph-3') }}
                        </p>
                        <p class="text-sm text-slate-900 dark:text-white font-Monda">{{ $t('payInfo-3.paragraph-4') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-20">
            <div class="flex flex-col items-center text-center gap-2 p-4">
                <span class="text-lg md:text-2xl text-slate-900 dark:text-white font-bold font-Monda">{{
                                    $t('payInfo-5.title') }}</span>
                <span class="text-sm text-slate-900 dark:text-white font-Monda">{{ $t('payInfo-5.paragraph') }}</span>
            </div>

            <div class="relative w-full min-h-[300px] md:min-h-[450px] 2xl:min-h-[500px] bg-[#9898D1] mt-20">
                <div class="absolute inset-0">
                    <div class="hidden md:flex">
                        <div class="grid grid-cols-1 md:grid-cols-3 mt-20">
                            <div class="hidden md:flex justify-center items-center">
                                <img src="@/assets/images/bro.png" alt="Avatar" class="object-contain" />
                            </div>
                            <div class="md:col-span-2 flex flex-col pl-32 gap-4 justify-center pr-4">
                                <h3 class="text-3xl !text-white font-bold font-Monda">{{ $t('payInfo-4.title') }} </h3>
                                <p class="text-base text-white font-Monda">{{ $t('payInfo-4.paragraph') }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex md:hidden mt-20 p-5">
                        <div class="text-center space-y-4">
                            <h3 class="text-xl !text-white font-bold font-Monda">{{ $t('payInfo-4.title') }}</h3>
                            <p class="text-sm text-white font-Monda">{{ $t('payInfo-4.paragraph') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20 mb-20">
                <div class="grid grid-cols-1 md:grid-cols-2 p-4">
                    <p class="flex justify-center items-center text-xl text-slate-900 dark:text-white font-Monda md:pl-20 p-6">
                        {{ $t('payInfo-6') }}

                    </p>
                    <div class="flex justify-center items-center">
                        <img src="@/assets/images/handpay.png" />
                    </div>
                </div>

            </div>

        </div>
        <div class="bg-[#181818] flex justify-center gap-4 md:p-8  ">

            <card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
                <ContactForm :refer="'Impulse Pay'" />
            </card>
        </div>

    </div>
</template>
<script>
import Card from "@/components/Card/index.vue"
import ContactForm from "@/components/ContactForm.vue"
export default {
    components: { Card, ContactForm },

};
</script>