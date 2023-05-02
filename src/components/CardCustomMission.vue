<template>
<div class="flex flex-wrap w-full justify-start rounded-lg mt-3"
  style="background: #103045">

    <div class="grid md:grid-cols-2 grid-cols-1 text-white items-center justify-start mx-auto">
       <div class="flex-row p-6">
        <div class="flex flex-col justify-start items-start gap-8">
  <div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-[32px] bg-[#086C88] border-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">Our Mission</p>
  </div>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
    <p class="flex-grow-0 flex-shrink-0  font-semibold text-left text-white">
      <span
        class="flex-grow-0 flex-shrink-0  flex-wrap text-3xl font-semibold text-left text-white"
        >The telecommunications industry holds vast untapped potential.</span
      >
    </p>
    <p class="flex-grow-0 flex-shrink-0 flex-wrap text-base font-medium text-left text-white/70">
      Our aim is to assist companies in increasing their profitability through our solutions and services. We are dedicated to creating top-notch solutions for the industry and achieving this by attentively listening to our customers and being their most reliable partners.
    </p>
  </div>
  <!-- <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-4">
    <div
      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-lg border border-white"
    >
      <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
        Our Story
      </p>
    </div>
    <div
      class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2 py-3 rounded-lg"
    >
      <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
        Get in touch
      </p>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_61_649)">
          <path
            d="M5.75113 7.99921L0.452374 2.13865C0.000250243 1.67598 0.000250243 0.927143 0.452374 0.462728C0.904498 5.4121e-05 1.63494 5.4121e-05 2.08705 0.462728L8.54814 7.15953C9.00025 7.62391 9.00025 8.37449 8.54814 8.83716L2.08705 15.534C1.63664 16.0001 0.904498 15.9966 0.452374 15.534C0.000250243 15.073 0.000250243 14.3224 0.452374 13.858L5.75113 7.99921Z"
            fill="white"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_61_649"><rect width="9" height="16" fill="white"></rect></clipPath>
        </defs>
      </svg>
    </div>
  </div> -->
</div>
     
       </div> 
       <div class="flex-row flex-1 h-full">
        
        <img
      :src="img"
      alt=""
      class="flex-1  object-fill rounded-lg"
    />
  </div>
      
    </div>
   
    
</div>
</template>
<script>
import img from "@/assets/images/svgs/mission.svg"
export default {
  name: 'Card',
  props: { 
    title: {
      type: String,
      default: '',
    },
    
    paragraph: {
      type: String,
      default: '',
    }, 
    img: {
      type: String,
      default: '',
    },
    classBackground: {
      type: String,
      default: '',
    },
  },
  data(){
      return {img}      
    }
};
</script>
