<template>
   <div>
    <div class="grid grid-cols-1 mb-20 mt-10 sm:mt-20">
        <div>
            <div class="sm:w-[664px] sm:h-36 text-[40px] sm:text-[50px] md:text-[64px] text-white sm:leading-[72px] font-semibold font-Manrope">
                Creating exceptional solutions
            </div>
            <!-- <div class="mt-8 sm:w-[603px] sm:h-[72px] text-xs sm:text-[16px] leading-6 text-slate-400 font-Manrope">
                Lorem ipsum dolor sit amet consectetur. Odio posuere mattis nisl enim elit integer. 
                Fermentum feugiat scelerisque arcu et purus enim vulputate consectetur. 
                Vitae in non ultricies nisl tortor proin integer diam. Ut ante.
            </div> -->
        </div>
    </div>
    <div class="bg-[#282832] !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">
        <div class="mt-10 text-center md:text-start">
            <button class="w-40 h-12 bg-[#E2E8EA] rounded-[32px] gap-2 p-3 text-[#141414] mb-8 text-[16px]">
                Our Services
            </button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 md:gap-6 md:space-y-0 space-y-4 mb-6">
      
      <CardCustom 
      title="Business Inteligence and Analytics"
       paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
       :img="BI"
       classBackground="cardDisplay"
       /> 
       
      <CardCustom 
      title="Product Design and Development"
       paragraph="Our comprehensive software development services cover everything from identifying problems, researching and designing solutions, to building and supporting user-friendly, adaptable, and easily expandable applications."
       :img="PDD"
       
       classBackground="cardDisplay"
       /> 
       
      <CardCustom 
      title="BPO Services"
       paragraph="Our BPO services include sales, support, and outbound services to streamline your business operations and enhance customer satisfaction."
       :img="BPO"
       
       classBackground="cardDisplay"
       /> 
       
      <CardCustom 
      title="Consulting"
       paragraph="Our data consultinng services for the telecommunications industry offer tailored solutions for analyzing complex data, optimizing opera9ons, and driving growth. Gain valuable insights and stay ahead of the competition."
       :img="Consul"
       
       classBackground="cardDisplay"
       /> 
    
        </div>

    </div>

    <div class="mt-20 grid   grid-cols-1  gap-6  ">
 <SwipperCard2  :title="'Blog Posts'" :titleblog="'Telco Innovation'"
 :subtitleblog="'Are you struggling with the complexities of Telco Data? Is your day-to-day matching information from different systems to try and analyze it? Do you feel you can do more to grow your business? <br/> <br/>At Impulse, we know exactly what that feels like as we are industry veterans who have decided to help with some of the major issues we know exist. '"
 :titleBtn="'Open Blog Post'"/>
      </div>

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
    <!-- <div class="rounded-2xl bg-[#103045] p-10 mt-20"> 
        <div class="text-center text-xl md:text-3xl text-white">Client’s Feedback</div>  
    <SwipperFeedback :carousels="carousels"/>
    </div> -->


    
    <div class="mt-20 mb-20">
        <div class="text-3xl text-white font-Manrope text-center">Let’s Work Together </div>
        <div class="mt-5 text-center">
            <button class="bgbutton text-white">
                Get in touch
            </button>
        </div>
    </div>

   </div>
</template>
<script>
import CardCustom from "@/components/CardCustom.vue"
import BI from "@/assets/images/BI.webp"
import PDD from "@/assets/images/PDD.webp"
import BPO from "@/assets/images/BPO.webp"
import Consul from "@/assets/images/Consul.webp"
import window from "@/mixins/window"
import SwipperCard2 from "@/components/SwipperCard2.vue"
import SwipperFeedback from "@/components/SwipperFeedback.vue"
import carousel1Img from "@/assets/images/all-img/c1.png";
import carousel2Img from "@/assets/images/all-img/c2.png";
import carousel3Img from "@/assets/images/all-img/c3.png";
import carousel4Img from "@/assets/images/all-img/c4.png";
export default{
    mixins: [window],
    components:{
        CardCustom,
        SwipperCard2,
        SwipperFeedback,
    },
    data(){
        return{
            BI,
            PDD,
            BPO,
            Consul,
            carousels: [
        {
          img: carousel1Img,
        },
        {
          img: carousel2Img,
        },
        {
          img: carousel3Img,
        },
        {
          img: carousel4Img,
        },
      ],
        }
    }
}
</script>
<style lang="scss">
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