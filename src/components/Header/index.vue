<template>
  <header :class="[
    'flex justify-between items-center fixed top-0 w-full py-4 px-5 md:px-10 z-40 md:shadow-base transition-colors duration-500',
    route.path === '/' && isScrolled
      ? 'bg-white text-black-500'
      : route.path === '/'
        ? 'bg-transparent text-white'
        : 'bg-white text-black-500'
  ]">
    <div class="flex flex-grow basis-0">
      <Logo :logo="isScrolled || route.path !== '/'" />
    </div>
    <nav class="hidden md:flex">
      <ul class="flex text-base [&>li]:inline-block [&>li]:px-4 [&>li]:py-2 [&>li]:text-current font-medium
                [&>li]:transition-colors [&>li]:duration-500">
        <li><router-link to="/">{{ $t('homeModule') }}</router-link></li>
        <li><router-link to="/aboutus">{{ $t('aboutModule') }}</router-link></li>
        <!-- <li> <router-link to="/services">What We Do</router-link></li> -->
        <li>
          <a href="https://impulse.ky/blog/">{{ $t('blogModule') }}</a>
        </li>
      </ul>
    </nav>
    <nav class="hidden md:flex flex-grow justify-end basis-0">
      <ul class="flex text-sm justify-center items-center [&>li]:inline-block [&>li]:px-2 [&>li]:py-2 [&>li]:text-current
                [&>li]:transition-colors [&>li]:duration-500">
        <li>
          <LanguageVue />
        </li>
        <li>
          <ButtonProgress :to="'/contactus'"
            :class="'normal-case px-4 py-2 text-sm md:text-base bg-[#7F39E9] before:bg-[#662ebb] text-white !border-none'">
            {{ $t('contactUsModule') }}
          </ButtonProgress>
        </li>
      </ul>
    </nav>
    <handle-mobile-menu class="flex md:hidden" />

  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LanguageVue from "./Navtools/Language.vue";
import ButtonProgress from "@/components/ButtonProgress.vue"
import Logo from "./Navtools/Logo.vue";
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import HandleMobileMenu from "./Navtools/HandleMobileMenu.vue";

const route = useRoute()
const { t } = useI18n()

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const isScrolledOnHome = computed(() => {
  return route.path === '/' && isScrolled.value
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>
<style lang="scss" scoped>
.floating .app-header {
  @apply md:mx-6 md:my-8 mx-[15px] my-[15px] rounded-md;
}
</style>
