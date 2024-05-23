<template>
    <div>
      <div class="grid grid-cols-1 mt-16">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4 mb-8">
        <p class="flex-grow-0 flex-shrink-0   md:text-8xl text-3xl font-bold text-left text-white">
          Case Studies
        </p>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70 w-7/12">
          
        </p>
        </div>

      </div>
<div class="flex flex-row md:space-x-4 space-x-2">
 <div class="flex flex-row">
  <div class="flex justify-center items-center relative gap-2 px-8 py-3 rounded-[32px] bg-[#e2e8ea]">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#141414]">All</p>
</div>

 </div> 
 <div class="flex flex-row">
  <div class="flex justify-center items-center relative gap-2 px-8 py-3 rounded-[32px] bg-[#111315]">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Study Type 1</p>
</div>
 </div> 
 <div class="flex flex-row">

  <div class="flex justify-center items-center relative gap-2 px-8 py-3 rounded-[32px] bg-[#111315]">
  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Study Type 2</p>
</div>
 </div>

</div>
  
      <!-- Grid Cards Start-->
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 mb-6 mt-4 h-auto">
    <div class="flex flex-col col-span-1 h-[348px] w-full relative " v-for="(index) in [1,2,3,4,5,6,8,9]">
      <img :src="img1" class=" object-cover w-full h-[348px] absolute rounded-tr-lg rounded-bl-lg" alt="" />
      <div class="flex flex-col relative text-white mt-auto justify-end   bg-[#141414f2] bg-opacity-40 rounded-bl-lg">
        <div class="mt-5 font-bold ml-5">Software Development</div>
        <div class="mt-2  text-xs leading-6 text-[#ffffffb3] ml-5 mr-5">
            Lorem ipsum dolor sit amet consectetur. Sem sed pretium cras mi. Aliquam eget risus augue lectus tellus viverra convallis nisl. 
            Nunc quam felis lorem mauris ac sed euismod. Et eros ullamcorper volutpat nibh aliquam mauris volutpat. 
            Enim consequat at vitae.
         </div>
   
         
      </div>
    </div>
      </div>
  
  
  
  
    </div>
  </template>
  <script>
  import img from "@/assets/images/logo/logo-white.svg"
  import img1 from "@/assets/images/bgcode.webp";
  import CardCustom from "@/components/CardCustom.vue"
  import SwipperCard from "@/components/SwipperCard.vue"
  export default {
    components:{CardCustom,SwipperCard},
    data(){
      return {img,img1}
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
  