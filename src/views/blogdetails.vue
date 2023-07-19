<template>
  <div class="flex flex-wrap flex-col justify-start items-start w-[100vw]">
   <div v-if="blogcontent"> 
    <img class="w-[100vw] h-[486px] overflow-hidden !p-0 !m-0 md:!-top-6 md:-left-6 !-top-4 relative "
      :src="blogcontent.header" />
    <div class="flex flex-col justify-start items-start absolute top-72 gap-4">
      <div class="flex flex-col justify-center items-start bottom-0 left-0 flex-grow-0 relative gap-1 space-y-4">
        <p class="flex-grow-0  md:text-base text-sm font-semibold text-left">
          <span class="flex-grow-0  md:text-base text-sm font-semibold text-left text-white">Posted on {{
            blogcontent.timeAgo }} . </span><span
            class="flex-grow-0 md:text-base text-sm font-semibold text-left text-white/50">Posted by {{
              blogcontent.author }}</span>
        </p>
        <p class="flex-grow-0  md:text-[64px] text-xl md:text-3xl font-semibold text-center text-white">
          {{ blogcontent.title }}
        </p>
        <p class="flex-grow-0 w-3/4  text-sm md:text-base text-left text-white">
          {{ blogcontent.description }}
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center cursor-pointer mb-4 gap-2 px-8 py-3 rounded-[32px] bg-[#e2e8ea]"
      @click="() => { router.go(-1) }">
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-2.5 h-4 relative" preserveAspectRatio="xMidYMid meet">
        <g clip-path="url(#clip0_115_3527)">
          <path
            d="M4.99062 5.53127L9.24063 9.78127C9.53437 10.075 10.0094 10.075 10.3 9.78127L11.0063 9.07502C11.3 8.78127 11.3 8.30627 11.0063 8.01565L7.99375 5.00315L11.0063 1.99065C11.3 1.6969 11.3 1.2219 11.0063 0.931276L10.3 0.225025C10.0063 -0.0687246 9.53125 -0.0687246 9.24063 0.225025L4.99062 4.47502C4.69688 4.76252 4.69688 5.23752 4.99062 5.53127Z"
            fill="#141414"></path>
        </g>
        <defs>
          <clipPath id="clip0_115_3527">
            <rect width="10" height="16" fill="white" transform="matrix(0 -1 -1 0 16 10)"></rect>
          </clipPath>
        </defs>
      </svg>
      <p class="text-base font-bold text-center text-[#141414]">Back</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div></div>
      <div class="col-span-1 md:col-span-2 lg:col-span-4 pl-2 pr-8 md:p-0" v-html="blogcontent.content" />
    </div>
   </div>


  </div>
</template>
<script>
import { ref,onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import BlogServices from "@/services/Blog"
export default {
  props: ["name"],
  
  setup(props) {
    const blogcontent = ref();
    const router = useRouter()

     onBeforeMount(async ()=>{
  const getrev= await BlogServices.getBlog(props.name)
      console.log(getrev)
      blogcontent.value=getrev
     })
  
    return {
      blogcontent,
      router
    }
  }, 
};
</script>
