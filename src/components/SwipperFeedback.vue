<template>
    <swiper
      :modules="modules"
      :slides-per-view="sliderPreview"
      :space-between="space"
      navigation
      :pagination="{ clickable: true }"
      class="main-caro"
    >
      <swiper-slide v-for="(item, i) in carousels" :key="i">
        <div class="relative bg-[#111315] border-t-8 border-[#00ABD0] mt-14">
            <div class="transform scale-75 md:scale-100 absolute m-auto z-10 top-[-48px] right-0 left-0 w-[104px] h-[104px] bg-[#000] rounded-full border-4 border-[#00ABD0]">
                <div class="mt-10 flex justify-center">
                    <img :src="logo" class="w-20" alt="">
                </div>
            </div>
        <div class=" text-white pt-14 md:pt-20 text-xs md:text-base ml-12 md:ml-24 mr-12 md:mr-24">
                    Our aim is to assist companies in increasing their profitability through our solutions and services.
                     We are dedicated to creating most innovative solutions for the industry and achieving this by attentively
                      listening to our customers and being their most reliable partners.
                </div>
                <div class="text-xs md:text-sm ml-12 md:ml-24 mt-6 text-[#ffffffb3]">
                    Andrew Adams
                </div>
                <div class="text-xs md:text-base ml-12 md:ml-24 text-white pb-10">
                    Founder Impulse
                </div>

      
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/effect-fade";
  import img from "@/assets/images/logo/impulse.webp"
import { ref } from "vue";
  
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      sliderPreview: {
        type: Number,
        default: 1,
      },
      space: {
        type: Number,
        default: 0,
      },
  
      carousels: {
        type: Array,
        default: [],
      },
    },
  
    setup() {
        const logo=ref(img)
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
        logo
      };
    },
  };
  </script>
  
  <style lang="scss">
  .main-caro {
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-family: unset !important;
      @apply rtl:rotate-180;
    }
    .swiper-button-next:after {
      content: url("https://api.iconify.design/heroicons-outline/chevron-right.svg?color=white&width=24");
    }
    .swiper-button-prev:after {
      content: url("https://api.iconify.design/heroicons-outline/chevron-left.svg?color=white&width=24");
    }
    .swiper-pagination-bullet {
      height: 2px;
      width: 24px;
      @apply rounded-[1px] bg-white bg-opacity-70;
      &.swiper-pagination-bullet-active {
        @apply bg-opacity-100;
      }
    }
  }
  </style>
  