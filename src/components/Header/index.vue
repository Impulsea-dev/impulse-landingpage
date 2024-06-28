<template>
  <header id="l-header" class="flex justify-between items-center fixed top-0 w-full py-6 px-5 md:px-10 z-40 shadow-base
  transition-colors duration-500">
    <div class="flex flex-grow basis-0">
      <Logo :logoC="logoColor" v-if="logoColor" />
    </div>
    <nav class="hidden md:flex">
      <ul class="flex text-base font-bold [&>li]:inline-block [&>li]:px-4 [&>li]:py-2 [&>li]:text-current
                [&>li]:transition-colors [&>li]:duration-500">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutus">About Us</router-link></li>
        <li> <router-link to="/services">What We Do</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>
    <nav class="hidden md:flex flex-grow justify-end basis-0">
      <ul class="flex text-sm [&>li]:inline-block [&>li]:px-4 [&>li]:py-2 [&>li]:text-current
                [&>li]:transition-colors [&>li]:duration-500">
        <!-- <li>
          <LanguageVue />
        </li> -->
        <li>
          <router-link class="px-4 py-2 rounded-full text-white bg-[#7F39E9] text-base hover:bg-[#662ebb]
                        transition-colors duration-300" to="">CONTACT US</router-link>
        </li>
      </ul>
    </nav>
    <handle-mobile-menu class="flex md:hidden" />

  </header>
  <!-- <header :class="navbarTypeClass()" id="l-header">
    <div :class="`app-header md:px-6 px-[15px]  shadow-base fixed top-0 z-40 w-full ${borderSwicthClass()} ${this.$store.themeSettingsStore.navbarColor
    }
      ${this.$store.themeSettingsStore.menuLayout === 'horizontal' && window.width > 1023
      ? 'h-20'
      : 'md:py-2 h-14 '
    }
      `">
      <div class="flex justify-between items-center h-full">
        <div v-if="this.$store.themeSettingsStore.menuLayout === 'vertical'"
          class="flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse">
          <button class="ltr:mr-5 rtl:ml-5 text-xl text-slate-900 dark:text-white"
            v-if="this.$store.themeSettingsStore.sidebarCollasp && window.width > 1023"
            @click="this.$store.themeSettingsStore.sidebarCollasp = false">
            <Icon icon="akar-icons:arrow-right" v-if="!this.$store.themeSettingsStore.direction" />
            <Icon icon="akar-icons:arrow-left" v-if="this.$store.themeSettingsStore.direction" />
          </button>
          <MobileLogo v-if="window.width < 1024" />

        </div>
        <div v-if="this.$store.themeSettingsStore.menuLayout === 'horizontal'"
          class="flex items-center space-x-4 rtl:space-x-reverse">
          <Logo v-if="window.width > 1023" />
          <MobileLogo v-else />
        </div>
        <Mainnav class="xl:ml-auto lg:ml-0 lg:flex md:hidden hidden" v-if="this.$store.themeSettingsStore.menuLayout === 'horizontal' && window.width > 1024
    " />
        <LanguageVue class="pr-3 pl-2" />
        <div v-if="window.width > 1024">
          <Button :text="$t('indexContactUs')" btnClass="btn-primary "
            style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" />
        </div>
        <div class="nav-tools flex items-center lg:space-x-6 space-x-3 rtl:space-x-reverse">

          <handle-mobile-menu v-if="window.width <= 1024" />
        </div>
      </div>
    </div>
  </header> -->
</template>
<script>
import Mainnav from "./horizental-nav.vue";
import Icon from "../Icon";
import LanguageVue from "./Navtools/Language.vue";
import Logo from "./Navtools/Logo.vue";
import MobileLogo from "./Navtools/MobileLogo.vue";
import window from "@/mixins/window";
import HandleMobileMenu from "./Navtools/HandleMobileMenu.vue";
import Button from "@/components/Button";
export default {
  mixins: [window],
  components: {

    Mainnav,
    Icon,
    LanguageVue,
    Logo,
    MobileLogo,
    HandleMobileMenu,
    Button
  },
  data() {
    return {
      logoColor: null
    }
  },
  mounted() {
    const $header = document.querySelector('#l-header');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.90
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
          const color = entry.target.getAttribute('data-header-color')
          const bg = entry.target.getAttribute('data-header-bg')
          $header.style.color = color
          $header.style.backgroundColor = bg
          this.logoColor = color
          console.log(this.logoColor);
        }
      })
    }, observerOptions);

    const $sections = document.querySelectorAll('.l-section');
    $sections.forEach((section) => observer.observe(section));
  },

  methods: {
    btnContackUs() {
      this.$router.push({ name: "contactus" })
    },
    navbarTypeClass() {
      switch (this.$store.themeSettingsStore.navbarType) {
        case "floating":
          return "floating";
        case "sticky":
          return "sticky top-0 z-[999]";
        case "static":
          return "static top-0 z-[999]";
        case "hidden":
          return "hidden";
        default:
          return "sticky top-0";
      }
    },
    borderSwicthClass() {
      if (
        this.$store.themeSettingsStore.skin === "bordered" &&
        this.$store.themeSettingsStore.navbarType !== "floating"
      ) {
        return "border-b border-gray-5002 dark:border-slate-700";
      } else if (
        this.$store.themeSettingsStore.skin === "bordered" &&
        this.$store.themeSettingsStore.navbarType === "floating"
      ) {
        return "border border-gray-5002 dark:border-slate-700";
      } else {
        return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.floating .app-header {
  @apply md:mx-6 md:my-8 mx-[15px] my-[15px] rounded-md;
}
</style>
