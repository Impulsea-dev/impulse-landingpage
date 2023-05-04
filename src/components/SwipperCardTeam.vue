<!-- autopaly -->
<template>
  <div class="flex flex-wrap w-full justify-center">
    <swiper
  :modules="[ Autoplay,Pagination]"
  :pagination="{
      clickable: true,
    }"
  :autoplay="{ delay: 4000 }"
  class="max-w-max mx-auto mb-5 rounded-md"
  id="slider2"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="item" class="w-96 h-full object-cover" alt="" />
      <div class="absolute text-white top-[80%] ltr:left-12 rtl:right-12 bg-black-600 p-2">
        <div class="sm:text-base text-base font-semibold">Chan Adrews</div>  
        <div class="sm:text-2xl text-2xl font-bold">Founder/CEO</div>        
      </div>
    </swiper-slide>
  </template>
  
</swiper>
</div>
</template>

<!-- script -->
<script   setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import chan from "@/assets/images/svgs/chan.svg"
import chan1 from "@/assets/images/svgs/chan1.svg"
import chan2 from "@/assets/images/svgs/chan2.svg"
import chan3 from "@/assets/images/svgs/chan3.svg"
import window from "@/mixins/window"

const items = ref([chan,chan1, chan2,chan3]);
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