<!-- autopaly -->
<template>
    <div class="flex flex-wrap w-full justify-center">
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
    <swiper-slide>
      <img :src="item" class="w-full max-h-80 object-cover" alt="" />
      <div class="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
        <div class="sm:text-3xl text-base font-bold">This is blog Image</div>
        <div class="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </div>
        <button type="button" class="mt-4 btn btn-primary">Learn more</button>
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
import img1 from "@/assets/images/all-img/image-1.png";
import img2 from "@/assets/images/all-img/image-2.png";
import img3 from "@/assets/images/all-img/image-3.png";

const items = ref([img1, img2,img3]);
</script>
<style>
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
    left:6px;
}
.swiper-pagination {
text-align: left;
}
</style>