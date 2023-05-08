<!-- autopaly -->
<template>
    <div class="flex flex-wrap w-full justify-center relative" 
    >
      <div class="absolute -top-5 z-20 justify-start left-0  md:w-[23%] w-[70%] text-center m-auto  gap-2 px-8  py-1 rounded-[32px] bg-[#e2e8ea]">
  <p class="text-base font-bold text-center text-[#141414] ">
   {{ title }}
  </p>
</div>

    <swiper
  :modules="[ Autoplay,Pagination]"
  :pagination="{
      clickable: true,
    }"
  :autoplay="{ delay: 2000 }"
  class="max-w-max mx-auto mb-5 rounded-md"
  id="slider2"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide class="hidden md:flex">
      <img :src="item" class="w-full h-[402px] object-cover" alt="" />
      <div class="absolute text-white top-0 bottom-0 right-1/2 bg-[#141414f2]">
        <div class="md:mt-5 lg:mt-16 ml-10">
            <img :src="logo" alt="">
        </div>
        <div class="mt-2 lg:mt-5 text-xl lg:text-3xl font-bold ml-10">{{ titleblog }}</div>
        <div class="mt-2 lg:mt-5 text-xs lg:text-sm leading-6 text-[#ffffffb3] ml-10 mr-10" v-html="subtitleblog">
         
         </div>
        <div class="transform md:scale-75 lg:scale-100 mt-4 text-start ml-10">
            <button type="button" class="bgbutton1">{{ titleBtn }}</button>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="flex md:hidden">
      <img :src="item" class="w-[100vw] h-[505px] object-cover" alt="" />
      <div class="absolute text-white top-48 bottom-0 w-full bg-[#141414f2]">
        <div class="mt-5 font-bold ml-5">{{ titleblog }}</div>
        <div class="mt-2  text-xs leading-6 text-[#ffffffb3] ml-5 mr-5" v-html="subtitleblog">
             
         </div>
   
        <div class="mt-4 text-start ml-5 text-xs mb-4">
            <button type="button" class="bgbutton1">{{titleBtn}}</button>
        </div>
      </div>
    </swiper-slide>
  </template>
  
</swiper>
</div>
</template>

<!-- script -->
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "@/assets/images/bgcode.webp";
import img2 from "@/assets/images/all-img/image-2.webp";
import img3 from "@/assets/images/all-img/image-3.webp";
import img from "@/assets/images/logo/impulse.svg"
import window from "@/mixins/window"

const items = ref([img1]);
const logo=ref(img)
const props = defineProps({
  title: String,
  titleblog:String,
  subtitleblog:String,
  titleBtn:String
})

</script>
<style>
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
    left:10px;
}
.swiper-pagination {
text-align: left;
}
.swiper-pagination-bullet-active {
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
border: 1px solid #FFFFFF;
border-radius: 8px;
}

.bgbutton1{
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    padding: 11px 32px;
    border-radius: 8px;
}
</style>