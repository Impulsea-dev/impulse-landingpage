<template>
    <div>
  
     
  
  
  
    </div>
  </template>
  <script>
  import img from "@/assets/images/logo/logo-white.svg"
  
  import CardCustom from "@/components/CardCustom.vue"
  import SwipperCard from "@/components/SwipperCard.vue"
  export default {
    components:{CardCustom,SwipperCard},
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
  