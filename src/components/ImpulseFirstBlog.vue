<template>
    <div>
        <article class="rounded-xl h-48 xl:h-60 w-full md:w-80 xl:w-96 relative" v-if="firstBlog">
            <a :href="firstBlog.titleurl" target="_blank">
                <img :src="firstBlog.header" class="w-full h-full rounded-xl" alt="">
                <div class="absolute inset-0 bg-gradient-to-r from-[#2B8CFF]/80 to-[#EB10EF]/80 rounded-xl"></div>
                <div class="flex flex-col gap-y-1 mt-4 absolute bottom-4 left-4">
                    <span class="text-white text-xl font-bold">Impulse Blog</span>
                    <span class="text-base text-white font-bold">{{ firstBlog.title }}</span>
                </div>
            </a>
        </article>

    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import BlogServices from "@/services/Blog"
const firstBlog = ref(null)

onMounted(async () => {
    const bl = await BlogServices.getBlogs()
    for (let i = 0; i < bl.length; i++) {
        bl[i].title = bl[i].title.slice(0,17)
        if (bl[i].titleurl) {
            bl[i].titleurl = 'blog/' + bl[i].titleurl
        }
    }
    firstBlog.value = bl[0]
})
</script>