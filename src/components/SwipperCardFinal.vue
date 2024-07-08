<template>
    <div class="bg-[#F6F6F6] shadow-2xl rounded-lg px-10 py-10">
        <span class="text-xl xl:text-4xl font-bold text-black-500">Top Pick</span>
        <div class="flex flex-col lg:flex-row gap-10 py-5 lg:py-10" v-if="firstItem">
            <div class="relative basis-3/4">
                <img :src="firstItem.header" class="w-full h-full object-cover rounded-lg" alt="">
                <div class="absolute inset-0 bg-black-500/90 rounded-lg"></div>
                <div class="absolute bottom-10 left-10 w-full">
                    <span class="flex w-3/4 text-base md:text-2xl font-bold text-white">{{ firstItem.title }}</span>
                    <p class="text-white text-xs md:text-base">Time Ago: {{ firstItem.timeAgo }}</p>
                </div>
            </div>

            <div class="flex flex-col basis-1/4 gap-4">
                <p v-html="firstItem.description" class="text-base xl:text-xl grow text-black-500"></p>
                <ButtonProgress :to="firstItem.titleurl" :target="'_blank'"
                    :class="'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base xl:text-xl bg-[#7F39E9] before:bg-[#662ebb] text-white !border-none font-bold'">
                    OPEN BLOG POST
                </ButtonProgress>
            </div>

        </div>
    </div>
    <!-- <div class="flex flex-wrap w-full justify-center relative">
      <div
        class="absolute -top-5 z-20 justify-start left-0 md:left-0 
        md:w-[23%] xl:w-[25%] 2xl:w-[18%] w-[80%] text-center m-auto gap-2 px-8 py-1 rounded-[32px] bg-white">
        <p class="text-base font-bold text-center text-[#141414] ">
          {{ title }}
        </p>
      </div>
  
      <swiper :modules="[Autoplay, Pagination]" :pagination="{
        clickable: true,
      }" :autoplay="{ delay: 2000 }" class="max-w-max mx-auto mb-5 rounded-md main-caro" id="slider2">
        <template v-for="(item, i) in items" :key="i">
          <swiper-slide class="hidden md:flex">
            <img :src="item.header" class="w-full h-[480px] object-cover" alt="" />
            <div class="absolute text-white top-0 bottom-0 right-1/2 bg-[#141414f2]">
              <div class="md:mt-5 lg:mt-12 ml-10">
                <img :src="logo" alt="">
              </div>
              <div class="mt-2 lg:mt-5 text-xl lg:text-3xl font-bold ml-10 pr-1">{{ item.title }}</div>
              <div class="mt-2 lg:mt-5 text-xs lg:text-sm leading-6 text-[#ffffffb3] ml-10 mr-10"
                v-html="item.description">
  
              </div>
              <div class="transform md:scale-75 lg:scale-100 mt-10 text-start ml-10">
                <a type="button" class="bgbutton1 hover:opacity-80"
                  :href="item.titleurl"
                  target="_blank">{{ $t('blog-4') }}</a>
              </div>
            </div>
          </swiper-slide>
  
          <swiper-slide class="flex md:hidden">
            <img :src="item.header" class="w-full h-[570px] object-cover" alt="" />
            <div class="absolute text-white top-48 bottom-0 w-full bg-[#141414f2]">
              <div class="mt-5 font-bold ml-5">{{ item.title }}</div>
              <div class="mt-2  text-xs leading-6 text-[#ffffffb3] ml-5 mr-5" v-html="item.description">
  
              </div>
  
              <div class="mt-4 text-start ml-5 text-xs mb-4">
                <a type="button" class="bgbutton1"
                :href="item.titleurl"
                  target="_blank">{{ $t('blog-4') }}</a>
              </div>
            </div>
          </swiper-slide>
        </template>
</swiper>
</div> -->
</template>

<!-- script -->
<script>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import ButtonProgress from "@/components/ButtonProgress.vue"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from "@/assets/images/logo/impulse.svg"
import window from "@/mixins/window"
import BlogServices from "@/services/Blog"
import { useI18n } from 'vue-i18n'
const logo = ref(img)
export default {
    mixins: [window],
    components: { Swiper, SwiperSlide, ButtonProgress },
    props: ["title"],
    data: { logo, Autoplay, Pagination },

    setup() {
        const { t } = useI18n()
        const items = ref([])
        const firstItem = ref(null)
        onMounted(async () => {

            const bl = await BlogServices.getBlogs()
            for (let i = 0; i < bl.length; i++) {
                if (bl[i].titleurl) {
                    bl[i].titleurl = 'blog/' + bl[i].titleurl
                }
            }
            items.value = bl
            firstItem.value = bl[0]

        })
        return {
            items,
            firstItem
        }
        return { t }
    },

}
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

}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    left: 10px;
}

.swiper-pagination {
    text-align: left;
}

.swiper-pagination-bullet-active {
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    border: 1px solid #FFFFFF;
    border-radius: 8px;
}

.bgbutton1 {
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    padding: 11px 32px;
    border-radius: 8px;
}
</style>