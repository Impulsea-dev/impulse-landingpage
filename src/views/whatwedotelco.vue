<template>
    <div>
      <div class="grid lg:grid-rows-2 md:grid-rows-2 grid-rows-1 md:gap-6 md:space-y-0 space-x-14 mb-12 mt-4">
        <div class="text-6xl text-white text-bold">
          Specialised telecom software delivered with deep industry experience
        </div>    
        <div class="text-base text-[#ffffffb3]">
          Lorem ipsum dolor sit amet consectetur. Odio posuere mattis nisl enim elit integer. Fermentum feugiat scelerisque arcu et purus enim vulputate consectetur. Vitae in non ultricies nisl tortor proin integer diam. Ut ante. </div>     
      </div>
      <div  class="relative dark:bg-[#000000]  mt-2">   
        <div class="space-y-4 mt-4">
          <div class="grid   grid-rows-1 lg:grid-rows-2  gap-6  ">
 <CardCustomTelemetric></CardCustomTelemetric>
 <card-custom-boost></card-custom-boost>
      </div>
      <div class="grid   grid-cols-1 lg:grid-cols-1  gap-6  ">

 <card-custom-product-dev></card-custom-product-dev>
      </div>
        </div>
 
        
      </div>
      <div class="text-white text-center text-3xl mb-3 mt-4">
        <span>Let’s Work Together </span>
      </div>
      <div class="text-white text-center text-3xl">
        <Button text="Get in touch" btnClass="btn-primary "  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"  />
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
  import Button from "@/components/Button"
  export default {
    components:{
      CardCustom,
      Button,
      Card,
      CardCustomTelemetric,
      CardCustomBoost,
      CardCustomProductDev,
      SwipperCard},
    data(){
      return {img}
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
  