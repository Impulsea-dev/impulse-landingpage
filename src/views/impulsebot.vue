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
                Impulse Bot
            </div>
            <div class="flex justify-center mt-6">
                <div class="text-center font-Manrope text-xs md:text-lg  text-white/80 w-[600px]">
                    Empowering ISPs to Treat Their Customers like VIPs
                </div>
            </div>

            <div class="flex justify-center mt-10 px-10 md:px-20">
                <img src="../assets/images/bgbotcenter.svg" alt="">
            </div>

            <div class="flex justify-center mt-10">
                <div
                    class="text-center font-Manrope text-xl md:text-5xl mt-10 font-bold text-white w-[749px] md:leading-[4rem]">
                    Here's Why Impulse Bot is Right For You.
                </div>
            </div>

            <div class="text-center font-Manrope text-sm md:text-lg text-white/80 mt-6">
                Customers come first, always! Let's treat them right!
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-10 md:my-20 px-10 md:px-20">
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
                    :key="index" @click="() => { btnselected = index }">{{ social.title }}</button>
            </div>
            
            <div class="flex flex-col md:flex-row justify-center items-center py-10 gap-8">
                <img :src="socials[btnselected].img" class="max-w-xs md:max-w-lg xl:max-w-3xl flex-shrink-0" alt="">
                <div class="flex flex-col text-white px-5">
                    <h5 class="text-xl md:text-4xl mb-2">{{ socials[btnselected].title }}</h5>
                    <p class="text-sm md:text-base max-w-sm mb-4">{{ socials[btnselected].subtitle }}</p>
                    <div v-for="benefit in socials[btnselected].benefits">
                        <div class="flex flex-row items-start gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-green-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class=" text-sm md:text-base">{{ benefit }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flex flex-col md:flex-row justify-center items-center gap-2 mt-10 md:gap-10">
                <div class="flex flex-col w-full items-start gap-2 px-6">
                    <div class="text-xl md:text-4xl text-white font-bold font-Manrope">LiveChat with Agent Fallback</div>
                    <p class="text-sm md:text-lg text-white font-Manrope">
                        Speed up your customer service and positively impact your sales with live chat. Let a human agent
                        take
                        over and resolve queries personally within minutes!
                        Get Started For Free
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
                        <h3 class="text-xl font-semibold">{{ plan.title }}</h3>                     
                     </div> 
                     <div class="flex justify-start items-baseline my-5">
                            <span class="mr-2 text-4xl font-extrabold" v-if="plan.price">{{ plan.price }}</span>
                            <span class="text-gray-500 dark:text-gray-400" v-if="plan.price">/month</span>
                        </div>
                        <p class="font-light text-white sm:text-lg px-4 mb-4" v-if="index == 2">{{ plan.subtitle }}</p>

                        <a :href="plan.to" target="_blank"
                                class=" w-full text-white bg-gradient-to-r from-[#B936F5] to-[#F1005B] font-medium rounded-lg text-base px-6 py-3 text-center">
                                {{ plan.titlebutton }}
                        </a>
                        <div class="flex flex-row gap-1 justify-center items-center mt-2">
                            <p class="font-light text-red-500 sm:text-lg" v-if="index != 2">{{ plan.subtitle }}</p>
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
                                <span>{{ benefit }}</span>
                            </li>
                        </ul>

                       
                        <!-- <div class="flex flex-grow items-end justify-center">
                            <a href="#"
                                class=" w-full text-white bg-gradient-to-r from-[#B936F5] to-[#F1005B] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                {{ plan.titlebutton }}
                            </a>
                        </div> -->
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
        subtitle: `Conversations are a natural way to engage your website visitors.
         Capture attention in real time, build stronger relationships and increase conversion rates. `,
        img: botweb,
        benefits: ['Turn you visitors into paying customers', 'Collect information', 'Provide great service in real-time'],
    },
    {
        title: 'Telegram Chatbot',
        subtitle: ` Build your community on telegram & engage with them using Botsify Chatbot. 
        Chatbot for telegram can help you achieve more sales & improved conversion rates. `,
        img: bottelegram,
        benefits: ['Engage with your customers ', ' Collect lead information ', 'Automatic responses using AI Chatbot '],
    },
    {
        title: 'WhatsApp',
        subtitle: `Within WhatsApp, you can create conversational marketing campaigns, engage existing consumers, 
        and give outstanding customer care. `,
        img: botwatsp,
        benefits: ['Engage your customers instantly', 'Create conversational marketing campaigns', 'Provide excellent customer service'],
    },
    {
        title: 'Facebook Messenger',
        subtitle: ` Automate customer support and sales from meta pahe, messenger, comments and even ads. `,
        img: botmessenger,
        benefits: ['Turn queries into purchases', 'Create effective communication', 'Reduce response wait time to 0 seconds']
    },
    {
        title: 'Instagram',
        subtitle: ` Reply anywhere automatically, DMs, Comments, Ads, stories and mentions `,
        img: botinstagram,
        benefits: ['Handle more conversations with powerful bot', 'Speed up customer resolutions',
            'Make it easier for followers and potential customers to reach you']
    },
    {
        title: 'API & SDK',
        subtitle: `With our comprehensive API and SDK, you can use Botsify to deploy chatbots in your own apps and channels.  `,
        img: botapi,
        benefits: ['Reduce customer service costs','Monitor consumer data to gain Insights', 'Make customer journey smoother ']
    }
])

const btnselected = ref(0)

const plans = ref([
    {
        title: 'CHATBOT + LIVE AGENT',
        titlebutton: 'Lets Chat',
        subtitle: '1 Spots Left',
        img: planpopular,
        to: 'https://impulse.na.chilipiper.com/book/me/brian-molina',
        price: '$2,499',
        benefit: ['Live Agent (8 Hour Shift)', 'L1 Support Resolution', 'Impulse Bot via Website', 'Meeting Scheduler', 'Daily Reports', 'Analytics']
    },
    {
        title: 'CHATBOT',
        titlebutton: 'Lets Chat',
        subtitle: '1 Spots Left',
        img: planbot,
        to: 'https://impulse.na.chilipiper.com/book/me/brian-molina',
        price: '$499',
        benefit: ['Impulse Bot via Website', 'Automated Sign Up forms', 'Pre-Configured Support Flows', 'Meeting Scheduler', '24/7 Support', 'Daily Reports']
    },
    {
        title: 'Quick Meeting',
        titlebutton: 'Book a Call',
        subtitle: `Any questions? Let’s hop on a quick call to learn more about how ImpulseBot works.`,
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