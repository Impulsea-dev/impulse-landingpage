<template>
    <div>
        <section class="l-section text-black-900" data-header-color="black" data-header-bg="white"></section>
        <div class="p-0 lg:p-10 mt-32 mx-5">
            <!-- <div class="grid grid-cols-1 md:grid-cols-2  gap-4 mt-12 lg:mt-18">
                <div class="flex flex-col l-section" data-header-color="black" data-header-bg="white">
                    <div class="text-3xl lg:text-[56px] xl:text-[64px] text-slate-900 dark:text-white font-semibold">{{
                        $t('blog-1') }}</div>

                </div>
            </div> -->
            <div>
                <!-- <SwipperCard2 :title="$t('blog-2')" /> -->
                <SwipperCardFinal :title="$t('blog-2')"/>
            </div>
            <div class="my-8 md:my-16">
                <div class="text-xl lg:text-[32px] xl:text-[38px] text-slate-900 dark:text-white font-semibold mb-10">{{
                    $t('blog-3') }}</div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-4" v-if="blogs.length > 0">
                    <article
                        class="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg cursor-pointer transition-all hover:scale-90 duration-300"
                        v-for="(blog, i) in blogs" :key="i" @click="openBlog(blog)">
                        <img class="h-full w-full md:w-1/2 object-cover object-left rounded-t-lg md:rounded-l-lg" :src="blog.header"
                            alt="Blog Img">
                        <div class="flex flex-col justify-center gap-4 py-4 w-full md:w-3/4 px-2 md:px-10">
                            <span class="text-xl font-bold text-black-500">{{ blog.title }}</span>
                            <p class="text-sm md:text-base text-left text-slate-900/7">
                                {{ blog.description }}
                            </p>
                        </div>
                    </article>
                    <!-- <div class="w-full h-full bg-white dark:bg-black-500 rounded-lg cursor-pointer hover:duration-700 hover:scale-95 
                hover:border-2" v-for="(blog, i) in blogs" :key="i" @click="openBlog(blog)">
                        <img class="w-full h-60" :src="blog.header" />
                        <div class="flex flex-col justify-center items-start gap-1 mt-4 ml-4 mb-10 mr-4">
                            <div class="flex flex-row gap-2 text-xs font-semibold text-left">
                                <span
                                    class="text-xs font-semibold text-left text-slate-900/70 dark:text-white/70">Posted
                                    on
                                    {{ blog.timeAgo }}
                                </span>
                                <span
                                    class="text-xs font-semibold text-left text-slate-900/40 dark:text-white/40">Posted
                                    by
                                    {{ blog.author }}</span>
                            </div>
                            <p class="text-base font-bold text-center text-slate-900 dark:text-white">
                                {{ blog.title }}
                            </p>
                            <p class="text-sm md:text-base text-left text-slate-900/70 dark:text-white/70">
                                {{ blog.description }}
                            </p>
                        </div>
                    </div> -->
                </div>
                <SkeletonCard v-else />

                <!-- <div class="mt-20">
                    <div class="text-3xl text-slate-900 dark: font-Manrope text-center">{{ $t('indexLetsWorkTogether')
                        }}
                    </div>
                    <div class="mt-5 text-center">
                        <button class="bgbutton text-white" @click="() => { router.push('/contactus') }">
                            {{ $t('indexContactUs') }}
                        </button>
                    </div>
                </div> -->
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