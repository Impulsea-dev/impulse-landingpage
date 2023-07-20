<template>
<div>
  <div class="bg-[#060607] !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mt-4 ">
            <div class="flex flex-col justify-center">
               <div class="text-2xl lg:text-[64px] text-white">Impulse Boost</div> 
               <div class="text-[#ffffffb3] text-base lg:text-2xl lg:mt-8">
                Impulse Boost empowers CEOs and Managers to make informed decisions, track progress, optimize performance and achieve profitable business growth.
               </div>
            </div>
            <div class="flex">
                <div class="bgBoost transform scale-75 lg:scale-100"></div>
            </div>

        </div>
    </div>
    <div class="bg-[#111315] !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
            <div class="flex flex-col justify-center">
               <div class="text-xl lg:text-4xl text-white">Increase Sales</div> 
               <div class="text-[#ffffffb3] text-base">
                Impulse Boost provides powerful insights and tools to help sales representatives increase their sales.
                 By uncovering upsell and cross-sale opportunities.
                 Impulse Boost helps residential and corporate sales reps close more deals and hit their targets.
               </div>
            </div>
            <div class="flex">
                <div class="bgsales transform scale-75 lg:scale-100"></div>
            </div>

        </div>
    </div>

 
        <div class="grid grid-cols-1 md:grid-cols-2 md:mt-20 md:mb-20">
            <div class="flex justify-center md:justify-start">
                <div class="bgilus transform scale-75 lg:scale-100"></div>
            </div>
            <div class="flex flex-col justify-center">
               <div class="text-xl lg:text-4xl text-white">Improve Efficiency</div> 
               <div class="text-[#ffffffb3] text-xs md:text-base">
                Impulse Boost streamlines the sales process by providing a central platform for managing all 
                sales-related tasks. From lead generation to pipeline management to closing deals, 
                Impulse Boost helps sales reps save 9me and focus on what matters most - selling.
               </div>
            </div>
        </div>

        <div class="rounded-lg bg-[#111315] mt-10 md:mt-0">
  <div class="flex flex-col justify-center items-center gap-2 pt-10 ">
    <p class="text-lg lg:text-[32px] font-bold text-left text-white">
      Enhance Customer Satisfaction
    </p>
    <p class=" lg:w-[870px] text-sm lg:text-base  text-center text-white/70 p-4">
      With smart insights and tracking, Impulse Boost enables sales reps to better understand their
      customers' needs and preferences, and provide personalized solutions that exceed their
      expectations. This leads to greater customer satisfaction and loyalty, and ultimately more
      sales opportunities.
    </p>

    <img :src="img" alt="" class="md:h-[301px]  md:w-[596px] w-[45vw] h-auto">
  </div>
</div>

  <div class="rounded-lg mt-10"  style="background: linear-gradient(224.95deg, #111315 -1.95%, #000 104.5%);">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-10 md:p-20">
            <div class="flex flex-col justify-start items-start gap-2">
    <p class="text-xl lg:text-[32px] font-bold text-left text-white">AI Alerts</p>
    <p class="text-xs lg:text-base font-medium text-left text-white/70">
      Impulse Boost leverages the power of AI to provide real-time alerts to sales reps, enabling
      them to react quickly to sales opportunities and improve their sales effectiveness.
    </p>
  </div>
  <div class="flex flex-col justify-start items-start gap-2">
    <p class="text-xl lg:text-[32px] font-bold text-left text-white">
      Easy Integration
    </p>
    <p class="text-xs lg:text-base font-medium text-left text-white/70">
      Impulse Boost is designed to integrate seamlessly with existing sales and customer
      relationship management (CRM) systems, making it easy for companies to get up and running
      quickly and start seeing results right away
    </p>
  </div>
        </div>

       <div class="flex">
        <div class="bgintegration transform scale-75 md:scale-100 mt-[-100px] md:mt-0"></div>
       </div>

    </div>
</div>
<div class="bg-[#181818] flex justify-center gap-4 md:p-8   "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
    <ContactForm :refer="'Impulse Boost'" />
    </card>
</div>
</div>

    
</template>
<script>
import Card from "@/components/Card/index.vue"  
import ContactForm from "@/components/ContactForm.vue" 
import img from "@/assets/images/Satisfaction.svg"
export default {
  components:{Card, ContactForm},
    data(){
      return {img}
    }
  };
</script> 
<style>
.bgBoost{
     background: url(@/assets/images/boost.svg) no-repeat;
     background-size: 100% 100%;
     background-color: transparent!important;
     width: 601.43px;
     height: 481.3px;
     }
     .bgsales{
     background: url(@/assets/images/Sales.svg) no-repeat;
     background-size: 100% 100%;
     background-color: transparent!important;
     width: 447px;
     height: 374px;
     }
     .bgilus{
     background: url(@/assets/images/ilus.svg) no-repeat;
     background-size: 100% 100%;
     background-color: transparent!important;
     width: 464px;
     height: 376px;
     }

     .bgsatisfaction{
     background: url(@/assets/images/Satisfaction.svg) no-repeat;
     background-size: 100% 100%;
     background-color: transparent!important;
      }

     .bgintegration{
     background: url(@/assets/images/integration.svg) no-repeat;
     background-size: 100% 100%;
     background-color: transparent!important;
     width: 707.98px;
     height: 408.75px;
     }
</style>