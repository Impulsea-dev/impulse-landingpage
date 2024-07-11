<template>
    <div>
        <section class="l-section text-black-900" data-header-color="black" data-header-bg="white"></section>
        <div class="p-0 lg:p-10 mt-32 mx-5 animate-fade-up animate-delay-300">
            <div>
                <SwipperCardFinal :title="$t('blog-2')" />
            </div>
            <div class="my-8 md:my-16">
                <div class="text-xl lg:text-[32px] xl:text-[38px] text-slate-900 dark:text-white font-semibold mb-10">{{
                    $t('blog-3') }}</div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-4" v-if="blogs.length > 0">
                    <article
                        class="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg cursor-pointer transition-all hover:scale-90 duration-300"
                        v-for="(blog, i) in blogs" :key="i" @click="openBlog(blog)">
                        <img class="h-full w-full md:w-1/2 object-cover object-left rounded-t-lg md:rounded-l-lg"
                            :src="blog.header" alt="Blog Img">
                        <div class="flex flex-col justify-center gap-4 py-4 w-full md:w-3/4 px-2 md:px-10">
                            <span class="text-xl font-bold text-black-500">{{ blog.title }}</span>
                            <p class="text-sm md:text-base text-left text-slate-900/70">
                                {{ blog.description }}
                            </p>
                        </div>
                    </article>
                </div>
                <SkeletonCard v-else />

            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';
import SwipperCard2 from "@/components/SwipperCard2.vue"
import SwipperCardFinal from "@/components/SwipperCardFinal.vue"
import { useRouter } from 'vue-router';
import BlogServices from "@/services/Blog"
import SkeletonCard from '@/components/Skeleton/SkeletonCard.vue';
import { useI18n } from 'vue-i18n'
export default defineComponent({
    components: { SwipperCard2, SwipperCardFinal, SkeletonCard },

    mounted() {
        this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))
    },
    setup() {
        const selectedType = ref('All');
        const router = useRouter()
        const blogs = ref([])
        const { t } = useI18n()
        onMounted(async () => {
            try {
                const bl = await BlogServices.getBlogs();
                blogs.value = bl;
            } catch (error) {
                console.log(error)

            }

        })
        const openBlog = (blog) => {
            router.push('/blog/' + blog.titleurl)
        }
        return {
            selectedType,
            blogs,
            router,
            openBlog,
            t
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