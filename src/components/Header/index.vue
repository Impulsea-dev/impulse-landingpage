<template>
  <header :class="[
    navbarTypeClass(),
    shouldBeTransparent ? 'header-transparent' : 'header-scrolled',
    isHeaderVisible ? 'header-visible' : 'header-hidden'
  ]">
    <div
      :class="`app-header md:px-6 px-[15px] transition-all duration-300 ${
        shouldBeTransparent
          ? 'text-white bg-transparent shadow-none border-transparent'
          : 'text-slate-900 dark:text-white dark:bg-black-800 shadow-base dark:shadow-base3 bg-white ' + borderSwicthClass() + ' ' + this.$store.themeSettingsStore.navbarColor
      }
      ${
        this.$store.themeSettingsStore.menuLayout === 'horizontal' && window.width > 1023
          ? 'h-20'
          : 'md:py-2 h-14 '
      }
      `"
    >
      <div class="flex justify-between items-center h-full">
        <div
          v-if="this.$store.themeSettingsStore.menuLayout === 'vertical'"
          class="flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse"
        >
          <button
            class="ltr:mr-5 rtl:ml-5 text-xl text-slate-900 dark:text-white"
            v-if="this.$store.themeSettingsStore.sidebarCollasp && window.width > 1023"
            @click="this.$store.themeSettingsStore.sidebarCollasp = false"
          >
            <Icon
              icon="akar-icons:arrow-right"
              v-if="!this.$store.themeSettingsStore.direction"
            />
            <Icon
              icon="akar-icons:arrow-left"
              v-if="this.$store.themeSettingsStore.direction"
            />
          </button>
          <MobileLogo v-if="window.width < 1024" :isTransparent="shouldBeTransparent" />

        </div>
        <div
          v-if="this.$store.themeSettingsStore.menuLayout === 'horizontal'"
          class="flex items-center space-x-4 rtl:space-x-reverse"
        >
          <Logo v-if="window.width > 1023" :isTransparent="shouldBeTransparent" />
          <MobileLogo v-else :isTransparent="shouldBeTransparent" />
        </div>
        <Mainnav
          class="xl:ml-auto lg:ml-0 lg:flex md:hidden hidden"
          :class="shouldBeTransparent ? 'text-white' : ''"
          v-if="
            this.$store.themeSettingsStore.menuLayout === 'horizontal' && window.width > 1024
          "
        />
        <!-- <LanguageVue class="pr-3 pl-2" /> -->
        <div v-if="window.width > 1024">
          <Button
            :text="$t('indexContactUs')"
            :btnClass="shouldBeTransparent ? 'btn-outline-white' : 'btn-primary'"
            :style="shouldBeTransparent ? 'border: 2px solid white; color: white; background: transparent' : 'background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)'"
            @click="btnContackUs"
          />
        </div>
        <div
          class="nav-tools flex items-center lg:space-x-6 space-x-3 rtl:space-x-reverse"
        >

          <handle-mobile-menu
            v-if="window.width <= 1024"
            :class="shouldBeTransparent ? 'text-white' : ''"
          />
        </div>
      </div>
    </div>
  </header>
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
      isScrolled: false,
      lastScrollPosition: 0,
      isHeaderVisible: true
    };
  },
  computed: {
    isHomePage() {
      return this.$route.name === 'home' || this.$route.path === '/';
    },
    shouldBeTransparent() {
      // Solo transparente en la página de inicio y sin scroll
      return this.isHomePage && !this.isScrolled;
    }
  },
  mounted() {
    globalThis.window.addEventListener('scroll', this.handleScroll);
    // Verificar scroll inicial
    this.handleScroll();
  },
  beforeUnmount() {
    globalThis.window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = globalThis.window.scrollY;

      // Actualizar si ha hecho scroll
      this.isScrolled = currentScrollPosition > 50;

      // Si está en la parte superior, siempre mostrar
      if (currentScrollPosition < 50) {
        this.isHeaderVisible = true;
      } else {
        // Detectar dirección del scroll
        if (currentScrollPosition < this.lastScrollPosition) {
          // Scrolling hacia arriba - mostrar header
          this.isHeaderVisible = true;
        } else if (currentScrollPosition > this.lastScrollPosition) {
          // Scrolling hacia abajo - ocultar header
          this.isHeaderVisible = false;
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    },
    btnContackUs(){
      this.$router.push({name:"contactus"})
    },
    navbarTypeClass() {
      // Siempre usar fixed para que esté sobre el hero
      return "fixed top-0 left-0 right-0 z-[999]";
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

header {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.header-visible {
  transform: translateY(0);
}

.header-hidden {
  transform: translateY(-100%);
}

.header-transparent {
  background-color: transparent !important;
}

.header-transparent .app-header {
  background-color: transparent !important;
  box-shadow: none !important;
  border-color: transparent !important;
  border: none !important;
}

.header-transparent :deep(svg),
.header-transparent :deep(.iconify),
.header-transparent :deep(button) {
  color: white !important;
}

.header-transparent :deep(a) {
  color: white !important;
  font-weight: 700 !important;
}

.header-transparent :deep(span),
.header-transparent :deep(p),
.header-transparent :deep(.nav-link) {
  color: white !important;
  font-weight: 700 !important;
}

.header-scrolled .app-header {
  background-color: white !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
}
</style>
