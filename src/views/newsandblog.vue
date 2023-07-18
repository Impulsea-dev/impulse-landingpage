<template>
    <div class="p-0 lg:p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 lg:mt-28">
            <div class="flex flex-col">
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
            <SwipperCard2 :title="'Top Picks'" :titleblog="'2023 Product News'"
                :subtitleblog="'Lorem ipsum dolor sit amet consectetur. loerd sdle dl re se Tristique odio velit tristique lectus tempus eleifend blandit.'"
                :title-btn="'Open Blog'" />
        </div>

        <div class="mt-16 md:mt-28">
            <div class="text-sm font-bold text-center">
                <div class="block md:flex md:flex-row justify-center gap-2 items-center space-y-2 md:space-y-0">
                    <div class="cursor-pointer"
                        :class="{ 'bgTab text-black-500': selectedType === blogtype, 'bgtabdark': selectedType !== blogtype }"
                        @click="selectedType = blogtype" v-for="(blogtype, i) in blogsType" :key="i">{{ blogtype }}
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10">
                <div class="w-full h-full bg-black-500 rounded-lg cursor-pointer hover:duration-700 hover:scale-95 
                hover:border-2" v-for="(blog, i) in blogs" :key="i" @click="openBlog(blog)">
                    <img class="w-full h-60" :src="blog.header" />
                    <div class="flex flex-col justify-center items-start gap-1 mt-4 ml-4 mb-10 mr-4">
                        <div class="flex flex-row gap-2 text-xs font-semibold text-left">
                            <span class="text-xs font-semibold text-left text-white/70">Posted on {{ blog.timeAgo }}
                            </span>
                            <span class="text-xs font-semibold text-left text-white/40">Posted by: {{ blog.author }}</span>
                        </div>
                        <p class="text-base font-bold text-center text-white">
                            {{ blog.title }}
                        </p>
                        <p class="text-sm md:text-base text-left text-white/70">
                            {{ blog.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <div class="text-3xl text-white font-Manrope text-center">Let’s Work Together </div>
                <div class="mt-5 text-center">
                    <button class="bgbutton text-white" @click="()=>{router.push('/contactus')}">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';
import SwipperCard2 from "@/components/SwipperCard2.vue"
import { useRouter } from 'vue-router';
import BlogServices from "@/services/Blog"

export default defineComponent({
    components: { SwipperCard2 },

    setup() {
        const selectedType = ref('All');
        const router = useRouter()
        const blogs = ref([])

        onMounted(async()=>{
            const auth="v2.local.GVeOrs018trhRPqNO22QvpFcDM7WnG9nkuhWa8JeFowL5zCwffe61jg7zBvyyz9DEJ5F07ecNd7qrKMLY0YML1NdBqmu5TIw2nOIQM5BVymewVsNErPVNSoA_TOIA2ORc95Qp0RXU6fBuQ-OtBdQkZ7cI9In15UsD2IEj6x1QBUkT1Sd9bP0hETc1ZGsgCrfhrXKarAv-FgOiVv4pgVZVklS2F89M7iB4NpW9jE4kKru4zDveui7GSPX75vgwihiHldtM2neafLIBYRYTgnKim9GtZg0dMWGA4w4C4jpau_jil2jKNv8nUT15KM1eOgDrvSS6m8bjbH9c4LidtT1tSWwiF3JiPtxk5-QaKUrQb1nB5mZKd_jhoBkshMbRGFqesmoNAeixeosjIiG.bnVsbA"
            const bl= await BlogServices.getBlogs(auth)
            console.log(bl);
            blogs.value=bl
            
        })
        const openBlog = (blog) => {
            console.log(blog);
            sessionStorage.setItem('blogcontent', JSON.stringify(blog));
            router.push('/blogdetails')

        }
        return {
            selectedType,
            blogs,
            router,
            openBlog
        }
    },
    data() {
        return {
            blogsType: [
                'All', 'Blog Type 1', 'Blog Type 2', 'Blog Type 3',
                'Blog Type 4'
            ],
        }
    }
})
</script>
<style>
.bgTab {
    padding: 12px 32px;
    gap: 8px;
    background: #E2E8EA;
    border-radius: 32px;
}

.bgtabdark {
    padding: 12px 32px;
    gap: 8px;
    background: #111315;
    border-radius: 32px;
}

.bgbutton {
    background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
    padding: 11px 32px;
    border-radius: 8px;
}
</style>