<template>
    <div>
      
<!-- <div class="flex justify-center  flex-col">
  <div class="text-white text-center text-3xl mb-3">
          <span>Our Executive Team</span>
       </div> 
<div class="flex justify-center p-4 mt-5">
  <div class="md:flex lg:grid-cols-6 md:grid-cols-1 gap-2 md:space-y-0  mt-9">        
         
         <CardCustomTeam
         paragraph="Brian Molina"
         title="Impulse Founder and CEO"        
         :img="chan1"
         classBackground="bg-[#111315]"
         />
         <CardCustomTeam
         paragraph="Rob McNabb"
         title="Co-founder and NED"        
         :img="chan2"
         classBackground="bg-[#111315]"
         />
       </div>
</div>
</div> -->
      <!--<SwipperCardTeam class="md:hidden flex"/> -->
      <!-- <div class="flex justify-center md:items-center flex-col">
        <div class="text-white text-center text-3xl mb-3">
          <span>Our Executive Team</span>
       </div> 
        <div class="flex justify-center flex-col">
          <div class="sm:flex grid-cols-1 md:grid-cols-3 gap-6 p-4"  >
          <Flipcard2 :bgc="Flipcard2.background" :img="Flipcard2.img" :title="Flipcard2.title" :subtitle="Flipcard2.subtitle" 
          :url="Flipcard2.url" :description="Flipcard2.description" v-for="(Flipcard2,i) in Flipcard2s" :key="i"  /> 
        </div>
        </div>       
      </div> -->
      <div class="bg-[#111315] w-full h-auto items-center justify-center mt-4 mb-10 rounded-lg p-2">
      <div class="flex justify-start md:items-start flex-col" >
        <Button text="Our Executive Team" btnClass="btn-primary mt-2"  style="background:#086C88;border-radius: 32px;"  />
        <!-- <div class="text-lg md:text-5xl lg:text-5xl text-white mb-4">
          Our Executive Team
        </div>  -->
      <div class="md:flex grid-cols-1  md:grid-cols-3 md:gap-6 md:space-y-0 md:space-x-14 mb-12 mt-5 items-center">
      
        <div class="flex items-center rounded-lg shadow sm:flex p-5 lg:flex-row flex-col">
              <a href="#">
                  <img class="sm:w-50 sm:h-auto rounded-lg" :src="chan1">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-white">
                      <a href="#">Brian Molina</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Impulse Founder and CEO</span>
                  <p class="mt-3 font-light text-white">Software Engineer and Technologist with 15 years of telecom and technology experience.  
                    Developed apps with millions of downloads, successfully exited two companies.  Top sales executive at multiple CSP’s.</p>
                </div>  
        </div>
        <div class="flex items-center rounded-lg shadow sm:flex p-5 lg:flex-row flex-col">
              <a href="#">
                  <img class="sm:w-50 sm:h-auto rounded-lg" :src="chan2">
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-white">
                      <a href="#">Rob McNabb</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Co-founder and NED</span>
                  <p class="mt-3 font-light text-white">Currently - Google Telco Industry Business Principal working with telco’s on AI and Cloud transformation A former CEO of a startup to  $50M/ARR CSP, McNabb brings a wealth of experience knowing exactly what our target market needs to succeed</p>
                </div>  
        </div>

      </div>
      </div>
     </div>

      <Button text="About Us" btnClass="btn-primary mb-6"  style="background:#086C88;border-radius: 32px;"  />
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-14 mb-12">
        <div class="text-lg md:text-5xl lg:text-5xl text-white mb-4">
          Leading the Industry with unmatched expertise and innovation
        </div>    
        <div class="text-base text-[#ffffffb3]">
          Impulse is a telecommunications solution provider established and managed by leading industry and technology professionals
          With over 100 years of combined experience, our telco experts understand the challenges clients face with data, legacy systems, and customer information. We simplify these complexities and make data easy to understand, empowering clients to make informed decisions and manage their businesses with confidence. Trust us to navigate the complexities of the telecommunications industry.
        </div>     
      </div>
            
      <div class="grid grid-cols-1 md:gap-6   mb-10 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative ">
       <CardCustomMission/>
      </div>

      <!-- Grid Value Start-->
      <div class="bg-[#111315] w-full h-auto items-center justify-center mt-4 mb-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 md:space-y-0 space-y-4">
          <CardCustomValue
            title="Innovation"
            paragraph="We encourage creative thinking, experimenting, and willingness to take a risk to bring new ideas to life"
            :img="innovation"
           /> 
           <CardCustomValue
            title="Customer Obsession"
            paragraph="We strive to create exceptional experiences for our customers. We listen to their feedback and use it continuously to improve our products and services"
            :img="phone"
           /> 
           <CardCustomValue
            title="Long-Term Thinking"
            paragraph="We value long-term thinking over short-term gains. We prioritize sustainability and growth, even if it means sacrificing immediate profits in order to build a strong lasting company."
            :img="trend"
           /> 
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4">
          <CardCustomValue
            title="Ownership"
            paragraph="We encourage our team to take ownership of their work and decisions. Take the initiative and make decisions that will benefit the company but also take responsibility of the outcomes and learn from your mistakes."
            :img="people"
           /> 
           <CardCustomValue
            title="Operational Excellence"
            paragraph="We strive for excellence in all areas of operations, aiming for efficiency, productivity and quality. We set a high standard of performance and continuously measure and improve processes to achieve optimal results"
            :img="drone"
           /> 
        </div>
      </div>      
      <!-- Grid Value End -->
      <div class="grid grid-cols-1 md:gap-6   mb-10 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative ">
        <CardCustomVision/>
       </div>      
      <div class="mb-20">
      <div class="text-white text-center text-3xl mb-5">
        <span>Let’s Work Together </span>
      </div>
      <div class="text-white text-center text-3xl">
        <Button text="Contact Us" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" />
      </div>
    </div>
  
    
  
    </div>
  </template>
  <script>
  import img from "@/assets/images/logo/impulse.svg"
  import client from "@/assets/images/svgs/client.svg"
  import projects from "@/assets/images/svgs/projects.svg"
  import experience from "@/assets/images/svgs/experience.svg"
  import chan from "@/assets/images/svgs/chan.svg"
  import chan1 from "@/assets/images/svgs/brian.jpg"
  import chan2 from "@/assets/images/svgs/rob.jpg"
  import chan3 from "@/assets/images/svgs/chan3.svg"
  import team from "@/assets/images/svgs/team.svg"
  import innovation from "@/assets/images/svgs/innovation.svg"
  import phone from "@/assets/images/svgs/phone.svg"
  import trend from "@/assets/images/svgs/trend.svg"
  import people from "@/assets/images/svgs/people.svg"
  import drone from "@/assets/images/svgs/drone.svg"
  import CardCustom from "@/components/CardCustom.vue"
  import SwipperCardTeam from "@/components/SwipperCardTeam.vue"
  import Button from "@/components/Button";
  import CardCustomMission from "@/components/CardCustomMission.vue"
  import CardCustomVision from "@/components/CardCustomVision.vue"
  import CardCustomTeam from "@/components/CardCustomTeam.vue"
  import CardCustomValue from "@/components/CardCustomValue.vue"
  import Flipcard2 from "@/components/FlipCard2.vue"
  import { ref } from "vue"
  export default {
    components:{
      CardCustom,
      Button,
      CardCustomMission,
      CardCustomVision,
      CardCustomTeam,
      Flipcard2,
      CardCustomValue,
      SwipperCardTeam
    },
    data(){
      return {client,projects,team,experience,img,chan,chan1,chan2,chan3,innovation,phone,trend,people,drone}      
    },
    setup(){
      const Flipcard2s = ref([
        {
          title:'Brian Molina',
          subtitle:'Impulse Founder and CEO',
          description:'Software Engineer and Technologist with 15 years of telecom and technology experience.  Developed apps with millions of downloads, successfully exited two companies.  Top sales executive at multiple CSP’s.',
          img:chan1,
          background:'none'
        },
        {
          title:'Rob McNabb',
          subtitle:'Co-founder and NED',
          description:'Currently - Google Telco Industry Business Principal working with telco’s on AI and Cloud transformation A former CEO of a startup to  $50M/ARR CSP, McNabb brings a wealth of experience knowing exactly what our target market needs to succeed',
          img:chan2,
          background:'none'
        },
      ])

      return{
        Flipcard2s
      }
  },
    methods:{
    btnContackUs(){
      this.$router.push({name:"contactus"})
    }
  }
  };
  
  </script>
  <style>
  .cardDisplay{
     
     background: linear-gradient(-37.79deg, #000 -1.06%, #111315 100.71%);
     background-color: #111315;
     transition: all 400ms ease-in;
   }
   .cardDisplay:hover{
     background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); 
   }
  </style>
  