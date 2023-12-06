<template>
    <div>
        <div class="flex h-96 w-screen !-m-6 bgwd relative">
            <div class="absolute top-[30%] lg:top-[40%] animated-container opacity-0">
                <div class="grid grid-cols-1 xl:grid-cols-2 justify-between px-8 md:px-10 gap-4">
                    <div class="font-bold font-Monda flex flex-row gap-1">
                        <h1 class="!text-white text-2xl md:text-5xl">Impulse </h1>
                        <h1 class="!text-[#04c5fe] text-2xl md:text-5xl">Website Design</h1>
                    </div>
                    <div class="font-Monda">
                        <p class="!text-white">Impulse focuses on digital marketing for telecom companies. We build
                            websites,
                            mobile
                            apps, and manage marketing to help telecoms & communication service providers achieve growth.
                        </p>
                    </div>
                </div>


            </div>

        </div>

        <div class="p-20 bg-slate-900 !-mx-6 !my-6">
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :navigation="true" :effect="'flip'" :modules="modules" class="mySwiper md:my-20" :autoplay="{
    delay: 3000, disableOnInteraction: false,
}">
                <swiper-slide v-for="carousel in carousels">
                    <div class="relative" @mouseover="showOverlay = true" @mouseleave="showOverlay = false">
                        <img :src="carousel.img" class="rounded-xl md:h-screen  w-screen cursor-pointer" alt="">
                        <transition name="fade">
                            <div v-if="showOverlay"
                                class="absolute inset-0 flex items-center justify-center bg-[#007aff] bg-opacity-80">
                                <a :href="carousel.imgfull" target="_blank"
                                    class="px-8 py-4 bg-white text-[#007aff] rounded-md">
                                    See full template
                                </a>
                            </div>
                        </transition>
                    </div>
                </swiper-slide>


            </swiper>
            <!-- <div class="flex flex-row gap-2">
                <img :src="carousel.img" class="hover:border rounded-md p-1 w-[150px] cursor-pointer"
                    v-for="carousel in carousels" style="width:150px">
            </div> -->
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center gap-10 lg:mx-40 xl:mx-60 mt-32">
            <div class="flex flex-col md:w-[700px] animated-container opacity-0 font-Monda">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">Websites for Lead Generation</h1>
                <p>
                    Telecom companies need websites that attract leads, customers, partners and advocates.
                    We build websites that make publishing easy, are highly responsive, dynamic and optimized to convert.
                </p>
            </div>
            <div>
                <img src="https://www.ironpaper.com/hs-fs/hubfs/website-development.png?width=537&name=website-development.png"
                    alt="" class="animated-container opacity-0">
            </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse justify-between items-center gap-10 lg:mx-40 xl:mx-60 mt-32">
            <div class="flex flex-col md:w-[700px] animated-container opacity-0 font-Monda">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">Responsive, Integrated, Optimized</h1>
                <p class="md:text-left md:w-full">
                    Websites are the center piece for Inbound marketing. Websites must be built with careful consideration
                    of
                    SEO, social sharing, content strategy, marketing automation, dynamic personalization, lead scoring, and
                    progessive profiling.
                </p>
            </div>
            <div>
                <img src="https://www.ironpaper.com/hs-fs/hubfs/icon-inbound-marketing.gif?width=537&name=icon-inbound-marketing.gif"
                    alt="" class="rounded-full animated-container opacity-0">
            </div>
        </div>

        <div class="mt-20 pb-20 !-mx-6 p-20 bg-slate-900">
            <div class="flex justify-center">
                <h1 class="text-2xl md:text-3xl xl:text-5xl !text-white font-Monda ">Why Every Business
                    Needs A
                    Website</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:px-20 mt-20">
                <div class="flex flex-row items-start gap-4 mb-10 animated-container opacity-0" v-for="reason in reasons">
                    <img :src="reason.img" alt="">
                    <div class="flex flex-col gap-1 font-Monda">
                        <h4 class="text-base md:text-xl !text-white font-bold">{{ reason.title }}</h4>
                        <p class="text-xs md:text-sm">{{ reason.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" flex justify-center md:p-8  !-mx-6 ">
            <Card :className="'dark:!bg-gray-900 mt-6 md:col-span-6 col-span-1'">
                <ContactForm :refer="'Impulse Pay'" />
            </Card>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { onMounted, ref } from 'vue';
import Card from "@/components/Card/index.vue"
import ContactForm from "@/components/ContactForm.vue"
import Carousel from "@/components/Carousel/index.vue";
import carousel1Img from "../assets/images/design1.webp";
import carousel2Img from "../assets/images/design2.webp";
import carousel3Img from "../assets/images/design3.webp";
import carousel1Imgfull from "../assets/images/design1full.png";
import carousel2Imgfull from "../assets/images/design2full.png";
import carousel3Imgfull from "../assets/images/design3full.png";
import useIntersectionObserver from '@/composables/useIntersectionObserver';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Card,
        ContactForm,
        Carousel
    },
    setup() {
        const carousels = ref([{
            img: carousel1Img,
            imgfull: carousel1Imgfull
        },
        {
            img: carousel2Img,
            imgfull: carousel2Imgfull
        },
        {
            img: carousel3Img,
            imgfull: carousel3Imgfull
        }
        ])

        const reasons = ref([
            {
                title: 'CREDIBILITY',
                text: `One of the main reasons you should have a website for your business is to increase your organization's credibility. 
                Chances are there are several providers offering a similar service to yours. One way you can stand out is by having a website 
                that looks good and clearly communicates quality information to your consumers. Without a website, people may question your legitimacy as a business. Having a website is an opportunity to make a great first impression and give people comfort that you’re a real business. `,
                img: `https://thriveagency.com/files/web-design-brand-new.svg`
            },
            {
                title: 'BRAND',
                text: `Showcasing your brand to your prospective customers is one of the most important things that you can do. By clearly establishing 
                who you are, what you represent and what you stand for, you increase the chances of your customers buying from you. This is also something that can set you apart from your competitors. Without a website, 
                it can be incredibly challenging to do this because people can't easily find quality and reliable information on your business.`,
                img: `https://thriveagency.com/files/web-design-ranking-new.svg`
            },
            {
                title: 'LEADS',
                text: `Perhaps one of the most intriguing reasons to have a website for your business is because it can increase your chances of getting 
                leads. Once people find you online, become interested in your product or service and want to know more, they'll know how to contact you thanks to the information on your website, which gives you the opportunity to increase your sales.
                 Even though websites have a cost, when used correctly, they have a positive ROI.`,
                img: `https://thriveagency.com/files/web-design-leads-new.svg`
            },
            {
                title: 'ORGANIC TRAFFIC',
                text: `Once you're online and have an SEO-optimized website, you have a chance of showing up in Google search results. 
                This means that when people are searching for a product or service, there is a chance your website will show up in the results.
                 This gives you the opportunity to drastically increase your customer base. `,
                img: `https://thriveagency.com/files/web-design-optimize-new.svg`
            }
        ])

        const showOverlay = ref(false)

        const { observe } = useIntersectionObserver('scale-up-bottom');

        onMounted(() => {
            const elementsToAnimate = document.querySelectorAll('.animated-container');
            elementsToAnimate.forEach((element) => {
                observe(element);
            });
        });

        return {
            carousels,
            reasons,
            showOverlay,
            modules: [Navigation, Autoplay]
        };
    },
};


</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.bgwd {
    background: url(@/assets/images/bgs/wd.webp) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>