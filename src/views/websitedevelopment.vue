<template>
    <div class="flex h-96 w-screen !-m-6 bgwd relative">
        <div
            class="absolute bottom-40 left-10 font-bold font-Monda flex flex-col sm:flex-row gap-1 animated-container opacity-0">
            <h1 class="!text-white text-3xl md:text-5xl">Impulse </h1>
            <h1 class="!text-[#04c5fe] text-3xl md:text-5xl">Website Design</h1>
        </div>
    </div>

    <div class="p-20 bg-slate-900 !-mx-6 !my-6">
        <div class="flex flex-col justify-center items-center gap-4 xl:mx-96 font-Monda animated-container opacity-0">
            <h2 class="!text-white font-bold text-2xl md:text-4xl">Impulse Website Design</h2>
            <p class="!text-white">Impulse focuses on digital marketing for telecom companies. We build websites, mobile
                apps, and manage marketing to help telecoms & communication service providers achieve growth.
            </p>
        </div>
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" :navigation="true" :effect="'flip'" :modules="modules" class="mySwiper my-20" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
}">
            <swiper-slide>
                <div class="flex justify-center">
                    <img src="../assets/images/design1.webp" class="w-full md:w-2/3  md:max-h-[80vh] rounded-xl" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex justify-center">
                    <img src="../assets/images/design2.webp" class="w-full md:w-2/3 md:max-h-[80vh] rounded-xl" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex justify-center">
                    <img src="../assets/images/design3.webp" class="w-full md:w-2/3 md:max-h-[80vh] rounded-xl" alt="">
                </div>
            </swiper-slide>
        </swiper>


    </div>
    <div class="flex flex-col md:flex-row justify-between items-center gap-10 lg:mx-40 xl:mx-60 mt-32">
        <div class="flex flex-col md:w-[700px]  animated-container opacity-0 font-Monda">
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
                Websites are the center piece for Inbound marketing. Websites must be built with careful consideration of
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
            <h1 class="text-2xl md:text-5xl !text-white font-Monda animated-container opacity-0">Why Every Business Needs A
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
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { onMounted, ref } from 'vue';
import Card from "@/components/Card/index.vue"
import ContactForm from "@/components/ContactForm.vue"
export default {
    components: {
        Swiper,
        SwiperSlide,
        Card,
        ContactForm
    },
    setup() {
        const observer = ref(null);
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
        onMounted(() => {
            const options = {
                root: null,
                rootMargin: '20px',
                threshold: 1.0,
            };


            observer.value = new IntersectionObserver(handleIntersection, options);

            const elementsToAnimate = document.querySelectorAll('.animated-container');

            elementsToAnimate.forEach((element) => {
                observer.value.observe(element);
            });
        });

        return {
            reasons,
            observer,

            modules: [Navigation, Autoplay]
        };
    },
};

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1.0) {
            entry.target.style.opacity = '1';
            entry.target.classList.add("scale-up-bottom");
            observer.unobserve(entry.target);
        }
    });
}
</script>
<style lang="scss">
.scale-up-bottom {
    animation: scale-up-bottom 1s;
}

@keyframes scale-up-bottom {
    0% {
        transform: scale(.5);
        transform-origin: center bottom
    }

    100% {
        transform: scale(1);
        transform-origin: center bottom
    }
}

.bgwd {
    background: url(@/assets/images/bgs/wd.webp) no-repeat;
    background-size: cover;
    background-position: center;
}
</style>