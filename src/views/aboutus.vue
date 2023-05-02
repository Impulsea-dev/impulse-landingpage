<template>
    <div>
      <Button text="About Us" btnClass="btn-primary mb-6"  style="background:#086C88;border-radius: 32px;"  />
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-14 mb-12">
        <div class="text-6xl text-white">
          Leading the Industry for more than 30 years
        </div>    
        <div class="text-base text-[#ffffffb3]">
          Impulse is a telecommunications solution provider established and managed by leading industry and technology professionals with more than 30 years of collective experience in the field.
        </div>     
      </div>
      
      <!-- Grid Cards Start-->
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 mb-10">
        
        <CardCustom 
        title="60+ Client"
        paragraph="Cutting-edge business intelligence software, tailor-made for over 60 clients globally."
        :img="client"
        classBackground="cardDisplay"
        /> 
        
        <CardCustom 
        title="300+ Projects"
        paragraph="Cutting-edge business intelligence software, tailor-made for over 120 clients globally."
        :img="projects"
        
        classBackground="cardDisplay"
        /> 
        
        <CardCustom 
        title="30+ Team"
        paragraph="Cutting-edge business intelligence software, tailor-made for over 120 clients globally."
        :img="team"
        
        classBackground="cardDisplay"
        /> 
        
        <CardCustom 
        title="30+ Experience"
        paragraph="Cutting-edge business intelligence software, tailor-made for over 120 clients globally."
        :img="experience"
        
        classBackground="cardDisplay"
        /> 
  
      </div>
      <!-- Grid Cards End -->
      
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
      <!-- <div class="grid   grid-cols-1  gap-6  ">
      <SwipperCard></SwipperCard>
        </div> -->
      
      <div class="grid grid-cols-1 md:gap-6   mb-10 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative ">
        <CardCustomVision/>
       </div>
       <div class="text-white text-center text-3xl">
          <span>Our Team of Experts</span>
       </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 md:gap-4 md:space-y-0  mt-9">
        
        <CardCustomTeam 
        paragraph="Chan Adrews"
        title="Founder/CEO"        
        :img="chan"
        />  
        <CardCustomTeam
        paragraph="Chan Adrews"
        title="Founder/CEO"        
        :img="chan1"
        />
        <CardCustomTeam
        paragraph="Chan Adrews"
        title="Founder/CEO"        
        :img="chan2"
        />
        <CardCustomTeam
        paragraph="Chan Adrews"
        title="Founder/CEO"        
        :img="chan3"
        />
      </div>
      <div class="text-white text-center text-3xl mb-3">
        <span>Let’s Work Together </span>
      </div>
      <div class="text-white text-center text-3xl">
        <Button text="Get in touch" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"  />
      </div>
  
  
  
    </div>
  </template>
  <script>
  import img from "@/assets/images/logo/impulse.svg"
  import client from "@/assets/images/svgs/client.svg"
  import projects from "@/assets/images/svgs/projects.svg"
  import experience from "@/assets/images/svgs/experience.svg"
  import chan from "@/assets/images/svgs/chan.svg"
  import chan1 from "@/assets/images/svgs/chan1.svg"
  import chan2 from "@/assets/images/svgs/chan2.svg"
  import chan3 from "@/assets/images/svgs/chan3.svg"
  import team from "@/assets/images/svgs/team.svg"
  import innovation from "@/assets/images/svgs/innovation.svg"
  import phone from "@/assets/images/svgs/phone.svg"
  import trend from "@/assets/images/svgs/trend.svg"
  import people from "@/assets/images/svgs/people.svg"
  import drone from "@/assets/images/svgs/drone.svg"
  import CardCustom from "@/components/CardCustom.vue"
  import SwipperCard from "@/components/SwipperCard.vue"
  import Button from "@/components/Button";
  import CardCustomMission from "@/components/CardCustomMission.vue"
  import CardCustomVision from "@/components/CardCustomVision.vue"
  import CardCustomTeam from "@/components/CardCustomTeam.vue"
  import CardCustomValue from "@/components/CardCustomValue.vue"
  export default {
    components:{
      CardCustom,
      Button,
      CardCustomMission,
      CardCustomVision,
      CardCustomTeam,
      CardCustomValue,
      SwipperCard},
    data(){
      return {client,projects,team,experience,img,chan,chan1,chan2,chan3,innovation,phone,trend,people,drone}      
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
  