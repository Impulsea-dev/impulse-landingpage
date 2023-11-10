<template>
    <div class="bg-[#0B0121] !-m-6">
    <div class="bgbotpage">
        <div class="flex justify-center items-center pt-20 lg:pt-40">
            <div
                class="border rounded-full px-8 py-2 text-xs md:text-lg font-Manrope text-white/80 hover:text-white cursor-pointer">
                So your millionth customer feels like your first
            </div>
        </div>

        <div class="text-center font-Manrope text-3xl md:text-6xl mt-6 font-bold text-white">
            ImpulseBot
        </div>
        <div class="flex justify-center mt-6">
            <div class="text-center font-Manrope text-xs md:text-lg  text-white/80 w-[600px]">
                Empowering Businesses to Treat TheirCustomers like a VIP
            </div>
        </div>

        <div class="flex justify-center mt-10 px-10 md:px-20">
            <img src="../assets/images/bgbotcenter.svg" alt="">
        </div>

        <div class="flex justify-center mt-10">
            <div
                class="text-center font-Manrope text-xl md:text-5xl mt-10 font-bold text-white w-[749px] md:leading-[4rem]">
                Here's Why ImpulseBot it’s Right For You.
            </div>
        </div>

        <div class="text-center font-Manrope text-sm md:text-lg text-white/80 mt-6">
            Don't waste your time anymore
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-20 px-10 md:px-20">
            <div class="border rounded-2xl shadow-[0_0_4px_4px] md:mb-4 shadow-white/50 cursor-pointer p-4 hover:scale-95 duration-500"
                v-for="benefit in benefits">
                <div class="flex flex-row pl-10 items-center gap-2 mt-2">
                    <img :src="benefit.img" class="h-10 w-10" alt="">
                    <div class="text-white font-bold font-Manrope text-sm md:text-base lg:text-xl"> {{ benefit.title }}
                    </div>
                </div>
                <div class="pl-10 pr-2 mt-4 text-xs md:text-sm">
                    <div class="mb-1" v-for="anw in benefit.anws">{{ anw }}</div>
                </div>
            </div>
        </div>

        <div class="flex justify-center border rounded-2xl shadow-[0_0_4px_4px] shadow-white/50 p-10 my-10 
                    mx-20 overflow-hidden cursor-pointer">
            <iframe class="w-full md:h-96"
                src="https://www.youtube.com/embed/NW-EZm_6JCk?si=Y_0JD3iQQkVcwUbo&autoplay=1&controls=0" title=""
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>


        <div class="flex justify-center mt-10">
            <div class="text-center font-Manrope text-xl md:text-5xl mt-10 font-bold text-white 
                                    mb-4 w-[749px]">
                It’s your secret weapon to win untapped opportunities
            </div>
        </div>
        <div class="flex justify-center my-6">
            <div class="text-center font-Manrope text-sm md:text-lg  text-white/80 w-[600px]">
                ImpulseBot is a fun, easy-to-use platform that allowsyou to design and deploy any chatbot you can think of.
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-2 mt-10">
            <a class="text-center px-10 py-2 border rounded-full font-bold hover:text-black-900 hover:bg-white duration-300"
                :href="social.url" target="_blank" v-for="social in socials">{{ social.title }}</a>
        </div>



        <div class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10">
            <img src="../assets/images/whatsappauto.svg" alt="" class="w-full md:w-1/2 h-auto md:flex-shrink-0 scale-75">
            <div class="flex flex-col items-center md:items-start gap-2 pl-6">
                <div class="text-xl md:text-4xl text-white font-bold font-Manrope">WhatsApp Automation</div>
                <div class="text-base md:text-lg text-white/80 font-Manrope">
                    Within WhatsApp, you can create conversational marketing campaigns, engage existing consumers, and give
                    outstanding customer care.
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 md:mt-0 md:gap-10">
            <div class="flex flex-col w-full items-center md:items-start gap-2 pl-6">
                <div class="text-xl md:text-4xl text-white font-bold font-Manrope">LiveChat with Agent Fallback</div>
                <div class="text-base md:text-lg text-white/80 font-Manrope">
                    Speed up your customer service and positively impact your sales with live chat. Let a human agent take
                    over and resolve queries personally within minutes!
                    Get Started For Free
                </div>
            </div>
            <img src="../assets/images/botlivechat.svg" alt="" class="w-full md:w-1/2 h-auto md:flex-shrink-0 scale-75">
        </div>

        <div class="mt-20 px-20">
            <div class="text-center text-2xl font-bold text-white mb-10">Pick the Perfect Plan</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-Manrope">
                <div class="flex flex-col justify-center items-center rounded-2xl border shadow-[0_0_4px_4px]
                 shadow-white/50 p-2 relative text-white hover:scale-105 duration-300" 
                v-for="plan in plans">
                    <img :src="plan.img" alt="" class="w-16 mt-4">
                    <div class="flex flex-col mb-4">
                        <div class="text-xs" v-if="plan.isessentital">Essential</div>
                        <div class="text-xl font-bold">{{ plan.title }}</div>
                    </div>
                    <a class="py-2 px-6 rounded bg-gradient-to-r from-[#B936F5] to-[#F1005B]"
                    :href="plan.to" target="_blank">
                        {{ plan.titlebutton }}
                </a>

                    <div class="mt-4 mb-4 text-xs text-center px-4">{{ plan.subtitle }}</div>

                </div>
            </div>
        </div>

        <div class="mt-10 flex justify-center gap-4 md:p-8">

            <card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
                <ContactForm :refer="'Impulse Telemetrics'" />
            </card>
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
import ContactForm from "@/components/ContactForm.vue"
import planpopular from '../assets/images/planpopular.svg'
import planbot from '../assets/images/planbot.svg'
import planmeeting from '../assets/images/planmeeting.svg'
import Card from "@/components/Card/index.vue"

const benefits = ref([
    {
        title: 'Automate your sales processes',        
        img: botquestion,
        anws: ['Turn boring web forms into friendly conversations',
            'Get your meetings and sales calls scheduled']

    },
    {
        title: 'Perfect your customer support',
        img: botsupport,
        anws: ['Consistent 24/7 support across channels',
            'Solve Their problems faster', 'Consistent 24/7 support across channels']
    },
    {
        title: 'Boost Your Revenue And Conversations',
        img: botrevenue,
        anws: [`If you're still operating in the traditional manner, it can take time to convert, keep, and increase your consumer base. To grow your pipeline and convert customers like never before, you need an automated chatbot powered by AI.`]
    },
    {
        title: 'Power up your marketing',
        img: botpowerup,
        anws: ['Generate more qualified leads on autopilot', 'Make proactive contact with visitors.', 'Boost your conversions']
    },
    {
        title: 'Meet the Growth Workforce of the Future',
        img: botworkfoce,
        anws: ['Supercharge your workforce with customer service ai bots that work alongside your team as trusted digital team members, not just a tool — a fully automated system which helps you respond intelligently faster.']
    },
    {
        title: 'Smoothen your customer journey',
        img: botjourney,
        anws: ['Make proactive contact with visitors', 'Turn visitors into paying customers', 'Qualify prospects automatically']
    },

])

const socials = ref([
    {
        title: 'Website Chatbot',
        url: '#'
    },
    {
        title: 'WhatsApp',
        url: '#'
    },
    {
        title: 'Facebook',
        url: '#'
    },
    {
        title: 'Instagram',
        url: '#'
    }
])

const plans = ref([
    {
        title: 'CHATBOT + LIVE AGENT',
        titlebutton: 'Lets Chat',
        subtitle: '1 Spot Left',
        img: planpopular,
        to: 'https://google.com',
        isessentital:true
    },
    {
        title: 'CHATBOT',
        titlebutton: 'Lets Chat',
        subtitle: '1 Spot Left',
        img: planbot,
        to: 'https://google.com',
        isessentital:false
    },
    {
        title: 'Quick Meeting',
        titlebutton: 'Book a Call',
        subtitle: `Any questions? Let’s hop on a quick call to learn more about how ImpulseBot works.`,
        img: planmeeting,
        to: 'https://google.com',
        isessentital:false

    }
])

</script>
<style>
.bgbotpage {
    background: url(@/assets/images/bgbotpage.svg) no-repeat;
    background-size: auto;
    background-position: center top;
    min-height: 100vh;
}
</style>