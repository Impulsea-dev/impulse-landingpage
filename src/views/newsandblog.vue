<template>
    <div class="p-0 lg:p-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 lg:mt-28">
            <div class="flex flex-col ">
                <div class="text-3xl lg:text-[56px] xl:text-[64px] text-white font-semibold">News and Blog</div>
                <div class="text-sm lg:text-base text-white font-medium mt-8">
                    Lorem ipsum dolor sit amet consectetur. Odio posuere mattis nisl enim elit integer.
                    Fermentum feugiat scelerisque arcu et purus enim vulputate consectetur.
                    Vitae in non ultricies nisl tortor proin integer diam. Ut ante.
                </div>
            </div>
            <div class="hidden md:block"></div>

        </div>

        <div class="mt-28">
 <SwipperCard2 :title="'Top Picks'" :titleblog="'2023 Product News'" :subtitleblog="'Lorem ipsum dolor sit amet consectetur. loerd sdle dl re se Tristique odio velit tristique lectus tempus eleifend blandit.'"
  :title-btn="'Open Blog'"/>
      </div>

        <div class="mt-16 md:mt-28">

<div class="text-sm font-medium text-center text-gray-50">
    <ul class="flex flex-col md:flex-row justify-center gap-4 md:gap-0">
        <li class="mr-2">
            <a href="#" class="bgTab text-black-500">All</a>
        </li>
        <li class="mr-2">
            <a href="#" class="bgtabdark" aria-current="page">Blog Type 1</a>
        </li>
        <li class="mr-2">
            <a href="#" class="hover:bgTab bgtabdark">Blog Type 2</a>
        </li>
        <li class="mr-2">
            <a href="#" class="bgtabdark">Blog Type 3</a>
        </li>
        <li class="mr-2">
            <a href="#" class="bgtabdark">Blog Type 4</a>
        </li>
    </ul>
</div>

            <div class="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10"  >
            <div class="w-full h-96 mb-10" v-for="(blog,i) in blogs" :key="i">
                <img class="w-full h-60 rounded-lg" src="@/assets/images/bgcode.webp" />
                <div class="flex flex-col justify-center items-start absolute gap-1 mt-4">
                    <p class="text-xs font-semibold text-left">
                        <span class="text-xs font-semibold text-left text-white/70">Posted on {{ blog.posted }} . </span>
                        <span class="text-xs font-semibold text-left text-white/40">Read Time: {{ blog.readTime }}</span>
                    </p>
                    <p class="text-base font-bold text-center text-white">
                       {{ blog.title }}
                    </p>
                    <p class="w-[309px] text-base text-left text-white/70">
                       {{ blog.subtitle }}
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-20">
        <div class="text-3xl text-white font-Manrope text-center">Let’s Work Together </div>
        <div class="mt-5 text-center">
            <button class="bgbutton text-white">
                Get in touch
            </button>
        </div>
    </div>
        </div>


    </div>
</template>
<script>
import { defineComponent } from 'vue';
import SwipperCard2 from "@/components/SwipperCard2.vue"

export default defineComponent({
    components:{SwipperCard2},
    data(){
        return{
            blogs:[{
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            },
            {
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            },
            {
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            },
            {
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            },
            {
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            },
            {
                title:'2023 Product News',
                subtitle:'Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.',
                posted:'January 20, 2023',
                readTime:'2min'
            }]
        }
    }
})
</script>
<style> 
.bgTab{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px;
gap: 8px;
background: #E2E8EA;
border-radius: 32px;
}

.bgtabdark{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px;
gap: 8px;

background: #111315;
border-radius: 32px;
}

.bgbutton{
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    padding: 11px 32px;
    border-radius: 8px;
}
</style>