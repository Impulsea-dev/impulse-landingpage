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
        Telecom Expertise meets SaaS innovation.
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
          >Telecom </span
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
          >Sales Analytics</span
        >
      </p>
      <p class="flex-shrink-0 p-4 text-lg text-center text-white/70">
        Maximize revenue, optimize processes, and reduce cost with our solutions
      </p>
     <div class="flex-grow-0 flex-shrink-0"> <Button text="Contact Us" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnLink('contactus')" /> </div>
    </div>
  </div>
</div>

    </section>
     

 
    <div class="w-[100vw] h-[712px] relative ml-auto mr-auto -left-6 lg:flex md:hidden hidden">
  <div
    class="w-[100vw] h-[712px] absolute left-[-1px] top-[-1px] rounded-lg"
    style="background: linear-gradient(-37.79deg, #000 -1.06%, #303030 100.71%);"
  ></div>
  <div class="flex flex-row w-[100vw] h-[712px justify-center items-center ml-auto mr-auto ">
  <div class="flex flex-col justify-start items-start absolute left-16 top-[148px] gap-8">
    <Button
    class="btn-primary flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-[32px] dark:bg-[#000000] border-white"
    @click="btnLink('aboutus')"
    >
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Who are We</p>
  </Button>
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
      <p class="flex-grow-0 flex-shrink-0 w-[666px] font-semibold text-left text-white">
        <span
          class="flex-grow-0 flex-shrink-0 w-[666px] text-[32px] font-semibold text-left text-white"
          >Impulse is a reliable ally to prominent technology companies and telecommunications
          firms.</span
        ><span
          class="flex-grow-0 flex-shrink-0 w-[666px] text-base font-semibold text-left text-white"
        >
        </span>
      </p>
      <p class="flex-grow-0 flex-shrink-0 w-[606px] text-base font-medium text-left text-white/70">
        We aim to assist our partners in increasing their revenue, minimizing expenses, and
        optimizing their processes through our solutions via automation and analytics. Our priority
        is to build relationships with clients for mutual success, through open communication,
        teamwork, and a positive work environment that meets their objectives.
      </p>
    </div>
    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-4">
      <Button
        :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-lg border border-white'"
         @click="btnLink('aboutus')"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
          Our Story
        </p>
      </Button>
      <Button
      icon="material-symbols:chevron-right"
        :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-3 py-3 rounded-lg text-base font-semibold text-left text-white'" 
        @click="btnLink('contactus')"
        text="Contact Us"
        iconPosition="right"
     />
     
        
      
    </div>
  </div>
  <img class="w-[512px] h-[552px] absolute  xl:right-16 top-[79px] rounded-2xl" :src="whoarewe" 
  alt="telco women"/>
</div>
</div>
<!-- mobile -->
<div class="w-[100vw] relative lg:hidden md:grid md:grid-cols-1 grid grid-cols-1 -left-[16.86px] right-[16.86px] pl-5" style="background: linear-gradient(-37.79deg, #000 -1.06%, #303030 100.71%);">
 
<div class="flex mt-20 mb-10">
       <Button
    class="btn-primary flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-[32px] dark:bg-[#000000] border-white"
    @click="btnLink('aboutus')"
    >
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Who are We</p>
  </Button>
</div>
  <div class="flex flex-col justify-start items-start left-6 top-28 gap-4">
    <p class="flex-grow-0 flex-shrink-0 w-[85vw] text-2xl font-semibold text-left text-white">
      Impulse is a reliable ally to prominent technology companies and telecommunications firms.
    </p>
    <p class="flex-grow-0 flex-shrink-0 w-[85vw] text-base font-medium text-left text-white/70 ">
      We aim to assist our partners in increasing their revenue, minimizing expenses, and optimizing
      their processes through our solutions via automation and analytics. Our priority is to build
      relationships with clients for mutual success, through open communication, teamwork, and a
      positive work environment that meets their objectives.
    </p>
  </div>
  <div class="flex justify-center items-center left-6 gap-4 mt-14 mb-9">
    <Button
        :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-lg border border-white'"
         @click="btnLink('aboutus')"
      >
        <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
          Our Story
        </p>
      </Button>
      <Button
      icon="material-symbols:chevron-right"
        :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-3 py-3 rounded-lg text-base font-semibold text-left text-white'" 
        @click="btnLink('contactus')"
        text="Contact Us"
        iconPosition="right"
     />
  </div>
  <img class="w-[382px] h-[368px]   rounded-lg mb-4 flex ml-auto mr-auto left-0 pr-[16px] justify-center" :src="whoarewe" alt="tech women networking"/>
</div>
    <div class="h-20"></div>

   
    
      <Button @click="btnLink('services')" :className="'flex justify-center left-0 right-0 mr-auto ml-auto md:w-[18%] w-[70%] mt-6 mb-4 items-center relative gap-2 px-8 py-2 rounded-[32px] dark:bg-[#e2e8ea]'">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold  text-center text-[#141414]">Our Services</p>
      </Button>

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
   paragraph="Our data consultinng services for the telecommunications industry offer tailored solutions for analyzing complex data, optimizing operations, and driving growth. Gain valuable insights and stay ahead of the competition."
   :img="consult"
   
   classBackground="cardDisplay"
   /> 

    </div>
    <!-- Grid Cards End -->
    <div class="h-20"></div>

    <div class="lg:w-[84vw] w-[92vw] max-h-auto -left-4 pl-2 mt-20 grid   grid-cols-1  gap-6 lg:pr-20 lg:pl-40 pr-2">
      <SwipperCardHome  :title="'Blog Posts'" :titleblog="'Telco Innovation'"
 :subtitleblog="'Are you struggling with the complexities of Telco Data? Is your day-to-day matching information from different systems to try and analyze it? Do you feel you can do more to grow your business? <br/> <br/>At Impulse, we know exactly what that feels like as we are industry veterans who have decided to help with some of the major issues we know exist. '"
 :titleBtn="'Open Blog Post'"/>
      </div>

 
      <div class="h-20"></div>
<div class="lg:pr-11 lg:pl-11">
  <Card :className="'relative dark:!bg-[#141414]  mt-4 '">
        <Button @click="btnLink('telemetrics')" :className="'absolute -top-5  	  justify-center  left-0 right-0 mr-auto ml-auto md:w-[19%] w-[70%] text-center m-auto  gap-2 px-8 py-1 rounded-[32px] dark:bg-[#e2e8ea]'">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#141414]">
    TELECOM SOLUTIONS
  </p>
</Button>

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
            and optimizing their processes through our solutions via automation and analytics. 
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
  <Button text="Contact Us" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnLink('contactus')" />
</div>




  </div>
</template>
<script>
import img from "@/assets/images/logo/logo-white.svg"
import bi from "@/assets/images/svgs/bi.svg"
import dev from "@/assets/images/svgs/dev.svg"
import bpo from "@/assets/images/svgs/bpo.svg"
import whoarewe from "@/assets/images/whoarewe.webp"
import consult from "@/assets/images/svgs/consult.svg"
import Button from "@/components/Button";
import Card from "@/components/Card"
import CardCustom from "@/components/CardCustom.vue"
import CardCustomWhoAre from "@/components/CardCustomWhoAre.vue"
import CardCustomTelemetric from "@/components/CardCustomTelemetric.vue"
import CardCustomBoost from "@/components/CardCustomBoost.vue"
import CardCustomProductDev from "@/components/CardCustomProductDev.vue"
import SwipperCard from "@/components/SwipperCard.vue"
import SwipperCardHome from "@/components/SwipperCardHome.vue"
import window from "@/mixins/window"

export default {
  mixins: [window],
  components:{SwipperCardHome,Card,CardCustom,SwipperCard,Button,CardCustomWhoAre,CardCustomTelemetric,CardCustomBoost,CardCustomProductDev},
  data(){
    return {img,bi,dev,bpo,consult,whoarewe}
  },
  methods:{
    btnLink(link){
      this.$router.push({name:link})
    },
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
