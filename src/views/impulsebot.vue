<template>
    <div class="bg-[#0B0121] !-m-6">
        <div class="bgbotpage">
            <div class="flex justify-center items-center pt-20 lg:pt-40">
                <div
                    class="border rounded-full px-8 py-2 text-xs md:text-lg font-Manrope text-white/80 hover:text-white cursor-pointer">
                    {{$t('botInfoTitle-1')}}
                </div>
            </div>

            <div class="text-center font-Manrope text-3xl md:text-6xl mt-6 font-bold text-white">
                Impulse Bot
            </div>
            <div class="flex justify-center mt-6">
                <div class="text-center font-Manrope text-xs md:text-lg  text-white/80 w-[600px]">
                    {{ $t('botInfoDescription-2') }}
                </div>
            </div>

            <div class="flex justify-center mt-10 px-10 md:px-20">
                <img src="../assets/images/bgbotcenter.svg" alt="">
            </div>

            <div class="flex justify-center mt-10">
                <div
                    class="text-center font-Manrope text-xl md:text-5xl mt-10 font-bold text-white w-[749px] md:leading-[4rem]">
                    {{ $t('botInfo-3.title') }}
                </div>
            </div>

            <div class="text-center font-Manrope text-sm md:text-lg text-white/80 mt-6">
                {{ $t('botInfo-3.description')  }}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-10 md:my-20 px-10 md:px-20">
                <div class="border rounded-2xl shadow-[0_0_4px_4px] md:mb-4 shadow-white/50 cursor-pointer p-4 hover:scale-95 duration-500"
                    v-for="(benefit,i) in benefits" :key="i">
                    <div class="flex flex-row pl-10 items-center gap-2 mt-2">
                        <img :src="benefit.img" class="h-10 w-10" alt="">
                        <div class="text-white font-bold font-Manrope text-sm md:text-base lg:text-xl"> {{ $t(benefit.title) }}
                        </div>
                    </div>
                    <div class="pl-10 pr-2 mt-4 text-xs md:text-sm">
                        <div class="mb-1" v-for="(anw,x) in benefit.anws" :key="x">{{ $t(anw) }}</div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center border rounded-2xl shadow-[0_0_4px_4px] shadow-white/50 p-10 my-10 
                    mx-20 overflow-hidden cursor-pointer">
                <iframe class="w-full md:h-96"
                    src="https://www.youtube.com/embed/ffA7SXO0ugU?si=DQ4zMVGlFLbY7oPq&autoplay=1&controls=0" title=""
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>


            <div class="flex justify-center mt-10">
                <div class="text-center font-Manrope text-xl md:text-5xl mt-10 font-bold text-white mb-4 max-w-3xl">
                    It’s your secret weapon to win untapped opportunities
                </div>
            </div>
            <div class="flex justify-center my-6 mx-4">
                <div class="text-center font-Manrope text-sm md:text-lg text-white/80 max-w-2xl">
                    ImpulseBot is a fun, easy-to-use platform that allowsyou to design and deploy any chatbot you can think
                    of.
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-2 mt-10 px-5">
                <button :class="{ 'bg-white text-black-900': btnselected == index }"
                    class="text-center px-6 py-2 border rounded-full duration-300" v-for="(social, index) in socials"
                    :key="index" @click="() => { btnselected = index }">{{ $t(social.title) }}</button>
            </div>
            
            <div class="flex flex-col md:flex-row justify-center items-center py-10 gap-8">
                <img :src="socials[btnselected].img" class="max-w-xs md:max-w-lg xl:max-w-3xl flex-shrink-0" alt="">
                <div class="flex flex-col text-white px-5">
                    <h5 class="text-xl md:text-4xl mb-2">{{ $t(socials[btnselected].title) }}</h5>
                    <p class="text-sm md:text-base max-w-sm mb-4">{{ $t(socials[btnselected].subtitle) }}</p>
                    <div v-for="(benefit,x) in socials[btnselected].benefits" :key="x">
                        <div class="flex flex-row items-start gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-green-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class=" text-sm md:text-base">{{ $t(benefit) }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 md:gap-10">
                <div class="flex flex-col w-full items-start gap-2 px-6">
                    <div class="text-xl md:text-4xl text-white font-bold font-Manrope"> {{ $t('botInfo-7.title') }}</div>
                    <p class="text-sm md:text-lg text-white font-Manrope">
                        {{ $t('botInfo-7.description') }}
                    </p>
                </div>
                <img src="../assets/images/botlivechat.svg" alt="" class="w-full md:w-1/2 h-auto md:flex-shrink-0 scale-75">
            </div>


            <div class="mt-20 px-8 md:px-20 md:pb-20">
                <div class="text-center text-2xl font-bold text-white mb-10">Pick the Perfect Plan</div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-Manrope">
                    <div class="flex flex-col p-6 text-center rounded-lg border shadow-[0_0_4px_4px] shadow-white/50
                     hover:scale-95 duration-300" v-for="(plan, index) in plans">
                     <div class="flex justify-between">
                        <img :src="plan.img" class="h-24 w-24" alt="">
                        <img :src="popular" class="h-24 w-24" alt="" v-if="index == 0"> 
                     </div>
                     <div class="flex justify-start">
                        <h3 class="text-xl font-semibold">{{ $t(plan.title) }}</h3>                     
                     </div> 
                     <div class="flex justify-start items-baseline my-5">
                            <span class="mr-2 text-4xl font-extrabold" v-if="plan.price">{{ plan.price }}</span>
                            <span class="text-gray-500 dark:text-gray-400" v-if="plan.price">/{{ $t('botInfoMonth') }}</span>
                        </div>
                        <p class="font-light text-white sm:text-lg px-4 mb-4" v-if="index == 2">{{ $t(plan.subtitle) }}</p>

                        <a :href="plan.to" target="_blank"
                                class=" w-full text-white bg-gradient-to-r from-[#B936F5] to-[#F1005B] font-medium rounded-lg text-base px-6 py-3 text-center">
                                {{ $t(plan.titlebutton) }}
                        </a>
                        <div class="flex flex-row gap-1 justify-center items-center mt-2">
                            <p class="font-light text-red-500 sm:text-lg" v-if="index != 2">{{ $t(plan.subtitle) }}</p>
                            <img :src="redclock" class="h-6 w-6" alt="" v-if="index != 2">   
                        </div>
                        <ul role="list" class="mt-6 mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3" v-for="benefit in plan.benefit">
                                <svg class="flex-shrink-0 w-9 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span>{{ $t(benefit) }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import botquestion from '../assets/images/botquestions.svg'
import botsupport from '../assets/images/botsupport.svg'
import botrevenue from '../assets/images/botrevenue.svg'
import botpowerup from '../assets/images/botpowerup.svg'
import botworkfoce from '../assets/images/botworkforce.svg'
import botjourney from '../assets/images/botjourney.svg'
import planpopular from '../assets/images/planpopular.png'
import planbot from '../assets/images/planbot.png'
import planmeeting from '../assets/images/planmeeting.svg'
import botweb from "../assets/images/imgs/impulseweb.png"
import botwatsp from "../assets/images/imgs/impulsewhatsapp.png"
import botmessenger from "../assets/images/imgs/impulsemessenger.png"
import botinstagram from "../assets/images/imgs/impulseinstagram.png"
import bottelegram from "../assets/images/imgs/impulsetelegram.png"
import botapi from "../assets/images/imgs/impulseapi.png"
import redclock from "../assets/images/redclock.png"
import popular from "../assets/images/popular.png"

const benefits = ref([
    {
        title: 'botInfoBenefits-1.title',
        img: botquestion,
        anws: ['botInfoBenefits-1.anws.1',
            'botInfoBenefits-1.anws.2']

    },
    {
        title: 'botInfoBenefits-2.title',
        img: botsupport,
        anws: ['botInfoBenefits-2.anws.1',
            'botInfoBenefits-2.anws.2','botInfoBenefits-2.anws.3']
    },
    {
        title: 'botInfoBenefits-3.title',
        img: botrevenue,
        anws: ['botInfoBenefits-3.anws.1']
    },
    {
        title: 'botInfoBenefits-4.title',
        img: botpowerup,
        anws: ['botInfoBenefits-4.anws.1',
            'botInfoBenefits-4.anws.2','botInfoBenefits-4.anws.3']
    },
    {
        title: 'botInfoBenefits-5.title',
        img: botworkfoce,
        anws: ['botInfoBenefits-5.anws.1']
    },
    {
        title: 'botInfoBenefits-6.title',
        img: botjourney,
        anws: ['botInfoBenefits-6.anws.1',
            'botInfoBenefits-6.anws.2','botInfoBenefits-6.anws.3']
    },

])

const socials = ref([
    {
        title: 'botInfoSocials-1.title',
        subtitle: 'botInfoSocials-1.subtitle',
        img: botweb,
        benefits: ['botInfoSocials-1.benefits.1', 'botInfoSocials-1.benefits.2', 'botInfoSocials-1.benefits.3'],
    },
    {
        title: 'botInfoSocials-2.title',
        subtitle: 'botInfoSocials-2.subtitle',
        img: bottelegram,
        benefits: ['botInfoSocials-2.benefits.1', 'botInfoSocials-2.benefits.2', 'botInfoSocials-2.benefits.3'],
    },
    {
        title: 'botInfoSocials-3.title',
        subtitle: 'botInfoSocials-3.subtitle',
        img: botwatsp,
        benefits: ['botInfoSocials-3.benefits.1', 'botInfoSocials-3.benefits.2', 'botInfoSocials-3.benefits.3'],
    },
    {
        title: 'botInfoSocials-4.title',
        subtitle: 'botInfoSocials-4.subtitle',
          img: botmessenger,
        benefits: ['botInfoSocials-4.benefits.1', 'botInfoSocials-4.benefits.2', 'botInfoSocials-4.benefits.3']
    },
    {
        title: 'botInfoSocials-5.title',
        subtitle: 'botInfoSocials-5.subtitle',
        img: botinstagram,
        benefits: ['botInfoSocials-5.benefits.1', 'botInfoSocials-5.benefits.2', 'botInfoSocials-5.benefits.3']
    },
    {
        title: 'botInfoSocials-6.title',
        subtitle: 'botInfoSocials-6.subtitle',
          img: botapi,
        benefits: ['botInfoSocials-6.benefits.1', 'botInfoSocials-6.benefits.2', 'botInfoSocials-6.benefits.3']
    }
])

const btnselected = ref(0)

const plans = ref([
    {
        title: 'botInfoPlans-1.title',
        titlebutton: 'botInfoPlans-1.titlebutton',
        subtitle: 'botInfoPlans-1.subtitle',
        img: planpopular,
        to: 'https://impulse.na.chilipiper.com/book/me/brian-molina',
        price: '$2,499',
        benefit: ['botInfoPlans-1.benefit.1', 'botInfoPlans-1.benefit.2', 'botInfoPlans-1.benefit.3','botInfoPlans-1.benefit.4', 'botInfoPlans-1.benefit.5', 'botInfoPlans-1.benefit.6']
    },
    {
        title: 'botInfoPlans-2.title',
        titlebutton: 'botInfoPlans-2.titlebutton',
        subtitle: 'botInfoPlans-2.subtitle',
        img: planbot,
        to: 'https://impulse.na.chilipiper.com/book/me/brian-molina',
        price: '$499',
        benefit: ['botInfoPlans-2.benefit.1', 'botInfoPlans-2.benefit.2', 'botInfoPlans-2.benefit.3','botInfoPlans-2.benefit.4', 'botInfoPlans-2.benefit.5', 'botInfoPlans-2.benefit.6']
    },
    {
        title: 'botInfoPlans-3.title',
        titlebutton: 'botInfoPlans-3.titlebutton',
        subtitle: 'botInfoPlans-3.subtitle',
        img: planmeeting,
        to: 'https://impulse.na.chilipiper.com/book/me/brian-molina'

    }
])

</script>
<style>
.bgbotpage {
    background: url(@/assets/images/bgbotpage.svg) no-repeat;
    background-size: contain;
    background-position: center top;
    min-height: 100vh;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>