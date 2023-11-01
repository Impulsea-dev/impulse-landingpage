<template>
<div>
    <div class="bg-[#3C007C] !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <div class="text-4xl lg:text-[64px] leading-[72px] font-Manrope text-white  mt-4 md:mt-14">Telemetrics</div>
                <div class="text-[#ffffffb3] text-xs lg:text-base">
                    Telemetrics is a revolutionary SaaS solution to increase upsell and cross sell opportunities by up to 200%
                </div>

                <div class="rounded-2xl bg-[#5f29ad] mt-5 p-10">
                    <p class="text-xs lg:text-base font-medium  text-white">
                        Telemetrics analysis bandwidth trends and behaviours from your residential and corporate customers and proactively sends emails and sms at the perfect time for them to upgrade increasing revenue immediately!
                    </p>
                </div>
            </div>
            <div class="bgtm hidden md:flex"></div>
        </div>
    </div>
    <div class="bg-[#511e98]  !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">

        <div class="text-center text-lg md:text-3xl text-white">
            When was the last time you told your customers they needed an upgrade?
        </div>
        <div class="text-xs md:text-base text-[#ffffffb3] pl-10 md:pl-32  pr-10 md:pr-32 mt-2">
            Don't be discouraged; you're in the same boat as 95% of ISPs. The process of achieving these integrations is challenging and expensive. The major ISPs have already poured millions into developing this technology. Impulse is leveling the playing field for small and medium-sized ISPs, and Telemetrics is a revolutionary advancement!
        </div>        
    </div>
    
    <div class="!p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw] bg-[#5F29AD]">
    <div class="grid grid-cols-1 md:grid-cols-2 mt-[-80px] md:mt-10">
            <div class="flex flex-col justify-center mb-[-80px] md:mb-0">
                <div class="text-white text-xl lg:text-3xl font-Manrope lg:mt-10">
                    Discover New Revenue Opportunities
                </div>
                <div class="text-[#ffffffb3] text-xs lg:text-base mt-4">
                    Significant revenue potential is going untapped. Impulse not only identifies these opportunities but also actively contributes to realizing this revenue by handling trend analysis and the execution of sales campaigns. We provide recommendations for email and SMS copy and facilitate their distribution. Our objective is to deliver the outcomes to your doorstep
                </div>
            </div>
            <div class="flex justify-center mb-[-180px] md:mb-0 mt-[-80px]">
                <div class="pieChart transform scale-75 lg:scale-100"></div>
            </div>
        </div>
    </div>
    <div class="md:bg-[#181818] flex justify-center gap-4 md:p-8  "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
    <ContactForm :refer="'Impulse Telemetrics'" />
    </card>
</div>
</div>
 
</template>
<script>
 import ContactForm from "@/components/ContactForm.vue" 
 import Card from "@/components/Card/index.vue" 
 export default {
    components:{Card, ContactForm},
   
    methods:{
     
    },
    
  };
</script>
<style>
 .bgtm{
    background: url(@/assets/images/tm.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 615px;
    height: 615px;
}

.progress {
    background: url(@/assets/images/progress.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 638px;
    height: 102px;
}

.barchart {
    background: url(@/assets/images/Barchart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1082px;
    height: 374px;
}

.degree {
    background: url(@/assets/images/360-degree.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1000px;
    height: 400px;

}

.pieChart {
    background: url(@/assets/images/pieChart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 614.68px;
    height: 614.61px;
}

.timesaving {
    background: url(@/assets/images/Timesaving.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1100px;
    height: 700px;
}
</style>