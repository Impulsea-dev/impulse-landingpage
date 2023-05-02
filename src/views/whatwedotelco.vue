<template>
    <div>
      <div class="grid lg:grid-rows-2 md:grid-rows-2 grid-rows-1 md:gap-6 md:space-y-0 space-x-14 mb-12">
        <div class="text-6xl text-white text-bold">
          Specialised telecom software delivered with deep industry experience
        </div>    
        <div class="text-base text-[#ffffffb3]">
          Lorem ipsum dolor sit amet consectetur. Odio posuere mattis nisl enim elit integer. Fermentum feugiat scelerisque arcu et purus enim vulputate consectetur. Vitae in non ultricies nisl tortor proin integer diam. Ut ante. </div>     
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
  import img from "@/assets/images/logo/logo-white.svg"
  
  import CardCustom from "@/components/CardCustom.vue"
  import SwipperCard from "@/components/SwipperCard.vue"
  import Button from "@/components/Button"
  export default {
    components:{
      CardCustom,
      Button,
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
  