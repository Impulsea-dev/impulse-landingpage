<template>
  <div >
    <!-- Heroe Start -->
    <section class="w-[100vw] h-[47rem] overflow-hidden !p-0 !m-0 md:!-top-6 md:-left-6 !-top-4 -left-4 relative">
      <!-- <img src="@/assets/images/svgs/entrance1.svg" class="md:hidden ml-auto w-36 h-[17rem] -mt-24 p-0 block" alt=""> -->
      <img src="@/assets/images/svgs/entrance.svg" class="animate-pulse lg:hidden xl:hidden md:hidden w-[100vw] -mt-24 p-0  -left-10" alt="">
      <img src="@/assets/images/svgs/entrace1.svg" class="animate-pulse md:block md:h-[650px] w-[100vw] -mt-3 p-0  -left-10 hidden" alt="">
      
      <div  >
  <div class="flex flex-col justify-center items-center absolute  left-0 right-0 mr-auto ml-auto md:w-[50%] w-[70%] text-center m-auto md:ml-auto top-32 ">
    <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 p-2  py-2 rounded-[32px] bg-[#086c88]"
    >
      <p class="flex-grow-0 flex-shrink-0 lg:text-xl text-xs  font-medium text-center text-white">
        Telecom Expertise meets Saas innovation.
      </p>
    </div>
    <div class="flex flex-col justify-center items-center flex-shrink-0 relative gap-2 mt-3 lg:space-y-2">
      <p class="flex-shrink-0  text-6xl text-center text-white lg:leading-[5rem]">
        <span class="flex-shrink-0  lg:text-6xl text-[40px] text-center text-white lg:mb-3"
          >Leading the way in</span
        ><span
          class="flex-shrink-0  lg:text-6xl text-[40px] font-bold text-center text-white"
        >
        </span
        ><br /><span
          class=" flex-shrink-0  lg:text-6xl text-[40px] font-semibold text-center text-white lg:text-s"
          >Telecom Analytics </span
        ><span
          class="flex-shrink-0  lg:text-6xl text-[40px] font-bold text-center text-white lg:mb-3"
        >
        </span
        ><span class="flex-shrink-0  lg:text-6xl text-[40px] text-center text-white lg:mb-3"
          >and </span
        ><span
          class="flex-shrink-0  lg:text-6xl text-[40px] font-bold text-center text-white lg:mb-3"
        >
        </span
        ><span
          class="flex-shrink-0  lg:text-6xl text-[40px] font-semibold text-center text-white lg:mb-3"
          >Sales</span
        >
      </p>
      <p class="flex-shrink-0 p-4 text-lg text-center text-white/70">
        Maximize revenue, optimize processes, and reduce cost with our solutions
      </p>
     <div class="flex-grow-0 flex-shrink-0"> <Button text="Contact Us" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" /> </div>
    </div>
  </div>
</div>

    </section>
     

    <div class="grid grid-cols-1 md:gap-6   mb-6 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative ">
      <CardCustomWhoAre 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="img1"
   
   classBackground="cardDisplay"
   /> 
    </div>
    <div class="h-20"></div>

   
    
      <div class="flex justify-center left-0 right-0 mr-auto ml-auto md:w-[12%] w-[70%] mt-6 mb-4 items-center relative gap-2 px-8 py-2 rounded-[32px] bg-[#e2e8ea]">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold  text-center text-[#141414]">Our Services</p>
</div>

    <!-- Grid Cards Start-->
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 mb-6 lg:pr-11 lg:pl-11">
      
  <CardCustom 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="bi"
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="Product Design and Development"
   paragraph="Our comprehensive software development services cover everything from identifying problems, researching and designing solutions, to building and supporting user-friendly, adaptable, and easily expandable applications."
   :img="dev"
   
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="BPO Services"
   paragraph="Our BPO services include sales, support, and outbound services to streamline your business operations and enhance customer satisfaction."
   :img="bpo"
   
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="Consulting"
   paragraph="Our data consultinng services for the telecommunications industry offer tailored solutions for analyzing complex data, optimizing opera9ons, and driving growth. Gain valuable insights and stay ahead of the competition."
   :img="consult"
   
   classBackground="cardDisplay"
   /> 

    </div>
    <!-- Grid Cards End -->
    <div class="h-20"></div>

    <div class="mt-20 grid   grid-cols-1  gap-6 lg:pr-20 lg:pl-20 ">
      <SwipperCard2  :title="'CASE STUDIES'" :titleblog="'Software Development'"
 :subtitleblog="'Lorem ipsum dolor sit amet consectetur. Sem sed pretium cras mi. Aliquam eget risus augue lectus tellus viverra convallis nisl. Nunc quam felis lorem mauris ac sed euismod. Et eros ullamcorper volutpat nibh aliquam mauris volutpat. Enim consequat at vitae.'"
 :titleBtn="'Open case study'"/>
      </div>

 
      <div class="h-20"></div>
<div class="lg:pr-11 lg:pl-11">
  <Card :className="'relative dark:!bg-[#141414]  mt-4 '">
        <div class="absolute -top-5  	  justify-center  left-0 right-0 mr-auto ml-auto md:w-[16%] w-[70%] text-center m-auto  gap-2 px-8 py-1 rounded-[32px] bg-[#e2e8ea]">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#141414]">
    TELECOM SOLUTIONS
  </p>
</div>

        <div class="space-y-4 mt-4 ">
          <div class="grid   grid-cols-1 lg:grid-cols-2  gap-6  ">
 <CardCustomTelemetric></CardCustomTelemetric>
 <card-custom-boost></card-custom-boost>
      </div>
      <div class="grid   grid-cols-1 lg:grid-cols-1  gap-6  ">

 <card-custom-product-dev></card-custom-product-dev>
      </div>
        </div>
 
    </Card>

</div>
     
    <div class="h-20"></div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2">
        <div class="mt-10">
          <div class="text-white text-[40px] leading-10">
            Our Integration partners
          </div>
          <div class="mt-4 text-[#ffffffb3] text-[16px] leading-6 font-medium">
            We aim to assist our partners in increasing their revenue, minimizing expenses, 
            and optimizing their processes through our solutions via automaton and analytics. 
          </div>
        </div>
            <div :class="window.width<640?'bgLogosPhone':'bgLogos' ">        
        </div>
    </div>
    <div class="h-20"></div>
    <div class="flex justify-center items-center gap-6 mb-2">
      <p class=" w-[327px] text-[32px] font-bold text-center text-white">Let’s Work Together</p>
    </div>
   
<div class="flex justify-center items-center gap-6 mb-6">
  <div
    class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-[11px] rounded-lg"
    style="background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
      Get in touch
    </p>
  </div>
</div>




  </div>
</template>
<script>
import img from "@/assets/images/logo/logo-white.svg"
import bi from "@/assets/images/svgs/bi.svg"
import dev from "@/assets/images/svgs/dev.svg"
import bpo from "@/assets/images/svgs/bpo.svg"
import consult from "@/assets/images/svgs/consult.svg"
import Button from "@/components/Button";
import Card from "@/components/Card"
import CardCustom from "@/components/CardCustom.vue"
import CardCustomWhoAre from "@/components/CardCustomWhoAre.vue"
import CardCustomTelemetric from "@/components/CardCustomTelemetric.vue"
import CardCustomBoost from "@/components/CardCustomBoost.vue"
import CardCustomProductDev from "@/components/CardCustomProductDev.vue"
import SwipperCard from "@/components/SwipperCard.vue"
import SwipperCard2 from "@/components/SwipperCard2.vue"
import img1 from "@/assets/images/all-img/image-1.webp";
import window from "@/mixins/window"

export default {
  mixins: [window],
  components:{SwipperCard2,Card,CardCustom,SwipperCard,Button,CardCustomWhoAre,CardCustomTelemetric,CardCustomBoost,CardCustomProductDev},
  data(){
    return {img,img1,bi,dev,bpo,consult}
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
 
 .bgLogos{
        background: url(@/assets/images/logos.webp) no-repeat;
    background-size: 100% 100%;
  background-color: transparent!important;
  height: 224px;
  
}
 .bgLogosPhone{
    margin-top: 10px;
    background: url(@/assets/images/logosPhone.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    height: 384px; 
} 

.bgbutton{
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    padding: 11px 32px;
    border-radius: 8px;
}

</style>
