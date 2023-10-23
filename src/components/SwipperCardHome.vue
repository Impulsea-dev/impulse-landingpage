<!-- autopaly -->
<template>
  <div class="flex flex-wrap w-full justify-center relative">
    <div
      class="absolute -top-5 z-20 justify-start left-0 md:left-0 
      md:w-[23%] xl:w-[25%] 2xl:w-[18%] w-[80%] text-center m-auto gap-2 px-8 py-1 rounded-[32px] bg-[#e2e8ea]">
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
              @click="btnLink('blog')"
                target="_blank">Open Blog Post</a>
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
              @click="btnLink('blog')"
                target="_blank">Open Blog Post</a>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<!-- script -->
<script>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "@/assets/images/bgcode.webp";
import img2 from "@/assets/images/billingportal.jpeg";
import img3 from "@/assets/images/linkedin.png";
import img from "@/assets/images/logo/impulse.svg"
import window from "@/mixins/window"
import BlogServices from "@/services/Blog"
const items = ref([
{
    title: 'LinkedIn for CSPs: The Ultimate Lead Generation Guide for the Industry!',
    description: 'Discover effective strategies and valuable tips to optimize your LinkedIn presence, connect with your target audience, and drive meaningful engagement. . </br></br>Learn how to leverage LinkedIns unique features and resources to establish your brand as an industry expert, network with key influencers, and distribute compelling content. ',
    header: img3,
    titleurl:'https://medium.com/@impulseky/linkedin-for-csps-the-ultimate-lead-generation-guide-for-the-industry-7c5bd411af25'
  },
  {
    title: 'Your Ultimate Billing Portal!',
    description: 'A pre-built customer billing portal designed exclusively for Telecommunication Companies. </br></br>Automation at its best. Say hello to efficiency and accuracy. Impulse Pays fully automated solution simplifies billing processes, saving time and resources for your Telecommunication Company. </br></br>Join the digital revolution. Empower your customers with Impulse Pay - the ultimate billing portal for Telcos.',
    header: img2,
    titleurl:'https://medium.com/@impulseky/empowering-telecom-companies-introducing-impulse-pays-game-changing-billing-portal-6e7504b650fa'
  },
  {
    title: 'Telco Innovation',
    description: 'Are you struggling with the complexities of Telco Data? Is your day-to-day matching information from different systems to try and analyze it? Do you feel you can do more to grow your business? <br/> <br/>At Impulse, we know exactly what that feels like as we are industry veterans who have decided to help with some of the major issues we know exist.',
    header: img1,
    titleurl:'https://medium.com/@impulseky/impulse-the-ultimate-telco-solution-provider-f9dc5697aa86'
  }]);
const logo = ref(img)
export default {
  mixins: [window],
  components: { Swiper, SwiperSlide },
  props: ["title"],
  data: {  logo, Autoplay, Pagination },
  methods: {
    btnLink(link) {
      this.$router.push({ name: link })
    },
  },
  setup(){
  //  const items = ref([])
  //   onMounted(async()=>{
  //       const bl = await BlogServices.getBlogs()
  //       for (let i = 0; i < bl.length; i++) {
  //           if (bl[i].titleurl) {
  //             bl[i].titleurl='blog/'+bl[i].titleurl
  //           }
  //       }
  //       items.value=bl
       
  //   })
   return{
    items
   }

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