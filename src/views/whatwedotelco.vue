<template>
    <div>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-28 mb-12">
        <div class="text-lg md:text-2xl lg:text-6xl lg:w-[875px] text-white mb-4 ml-4">
          Specialised telecom software delivered with deep industry experience
        </div>    
      </div>
      <div  class="relative dark:bg-[#000000]  mt-2">   
        <div class="space-y-4 mt-4">
          <div class="grid   grid-rows-1 lg:grid-rows-2  gap-6">
 <CardCustomTelemetric></CardCustomTelemetric>
 <card-custom-boost></card-custom-boost>
      </div>
      <div class="grid   grid-cols-1 lg:grid-cols-1  gap-6">

 <card-custom-product-dev></card-custom-product-dev>
      </div>
        </div>
 
        
      </div>
      <div class="grid   grid-cols-1 lg:grid-cols-3  gap-6 mt-6">
  <FlipCard  :bgc="'bg-bg-btnp'" :img="getImage('../assets/images/test1.png')" title="Telemetrics" url="/telemetrics" description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae, reiciendis voluptatibus laboriosam quos atque sapiente corrupti laudantium quibusdam quo repellendus nemo cumque consequatur, sunt fuga eum aliquam quae dignissimos."

/>
      </div>
      <div class="text-white text-center text-3xl mb-3 mt-4">
        <span>Let’s Work Together </span>
      </div>
      <div class="flex justify-center items-center gap-6 mb-6">
  <Button text="Contact Us" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" />
</div>
    </div>
  </template>
  <script>
  import img from "@/assets/images/logo/logo-white.svg"
  import Card from "@/components/Card"
  import CardCustom from "@/components/CardCustom.vue"
  import CardCustomTelemetric from "@/components/CardCustomTelemetric.vue"
  import CardCustomBoost from "@/components/CardCustomBoost.vue"
  import CardCustomProductDev from "@/components/CardCustomProductDev.vue"
  import SwipperCard from "@/components/SwipperCard.vue"
  import FlipCard from "@/components/FlipCard.vue"
  import Button from "@/components/Button"
  export default {
    components:{
      CardCustom,
      FlipCard,
      Button,
      Card,
      CardCustomTelemetric,
      CardCustomBoost,
      CardCustomProductDev,
      SwipperCard},
    data(){
      return {img}
    },
    methods:{
    btnContackUs(){
      this.$router.push({name:"contactus"})
    },
    getImage(img){
      return new URL(img, import.meta.url).href
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
  