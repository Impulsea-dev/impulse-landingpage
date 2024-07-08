<template>
    <section class="l-section bg-gradient-to-r from-[#7F39E9] to-[#472083]" data-header-color="black"
        data-header-bg="white">
        <div
            class="flex justify-center text-white font-bold text-2xl md:text-3xl xl:text-5xl py-16 md:py-20 xl:py-32 w-1/2 mx-auto text-center">
            The world’s only revenue-focused operational system for CSPs
        </div>
        <div class="flex flex-col xl:flex-row justify-center py-2 gap-x-32 2xl:gap-x-40">
            <div class="flex flex-col gap-y-2 md:gap-y-10 text-white details-container mx-10 xl:ml-40">
                <details v-for="(re, index) in reqs" :key="index" name="req" @click="active = index">
                    <summary class="text-base md:text-lg xl:text-xl 2xl:text-3xl font-bold">{{ re.title }}</summary>
                    <p class="pt-4 max-w-md 2xl:max-w-2xl">{{ re.details }}</p>
                </details>
            </div>
            <Blocks :active-block="active" :key="active" class="hidden xl:block" />
        </div>

        <div class="flex justify-center py-10 md:py-20">
            <a href="https://impulse.na.chilipiper.com/book/me/brian-molina?type=impulse-introduction" target="_blank"
                class="text-white hover:text-white/80 font-bold text-base xl:text-xl cursor-pointer mt-20">Learn more
                about
                Impulse Services ></a>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import Blocks from "./Blocks.vue"
const reqs = [
    {
        title: "Simplify operations and increase revenue",
        details: "Impulse Pay makes running your business a breeze. We handle everything from onboarding and coordinating installs to complex billing. Boost your efficiency, improve your NPS, and speed up your GTM with our all-in-one solution."
    },
    {
        title: "Transform into a revenue driven organization",
        details: "Impulse CRM gathers data from all your customer interactions—calls, SMS, emails, in-person meetings, and more—giving you a complete picture of their needs. Empower your sales team to sell more effectively."
    },
    {
        title: "Revenue-focused insights",
        details: "Easily identify revenue opportunities, bandwidth needs, circuit upgrades, top-selling packages, and untapped potential with our proprietary Sales AI."
    },
    {
        title: "Plug and play network integrations",
        details: "We integrate seamlessly with your preferred GPON, Wireless, and COAX solutions using our plug-and-play technology. Our system also supports the latest IoT devices and smart home technologies, ensuring a comprehensive and hassle-free setup."
    },
    {
        title: "Streamline your processes",
        details: "We've dedicated thousands of hours to refining every process in your organization, crafting our software stack with the best practices for your business, enabling you to improve your NPS score and boost revenue."
    }
];

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