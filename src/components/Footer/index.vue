<template>
  <footer
    class="flex flex-col md:flex-row justify-center md:justify-between w-full h-60 bg-[#7F39E9] relative overflow-hidden">
    <div class="flex md:hidden px-5 py-5">
      <div>
        <img src="@/assets/images/logo/impulse.webp" alt="logo" />
        <span class="text-sm text-white">{{ $t('footer-1') }}</span>
      </div>
    </div>
    <div class="hidden md:block">
      <img src="../../assets/images/bgfooter.svg" class="hidden md:block h-full object-cover" alt="" />
      <div class="absolute top-1/2 left-4">
        <img src="@/assets/images/logo/impulse.webp" alt="logo" />
        <span class="text-sm text-white">{{ $t('footer-1') }}</span>
      </div>
    </div>
    <div class="flex items-center flex-wrap gap-10 md:gap-x-40 px-5 xl:px-40">
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">Legal</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/impulse-privacy">Privacy Policy</router-link>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/impulse-terms">Terms</router-link>
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">Resources</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/blog">Blog</router-link>
        <a class="text-gray-300 text-xs md:text-sm"
          href="https://open.spotify.com/show/2xsbT6w1MOuEe2DSyV1Mnx" target="_blank">Podcast</a>
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">About Company</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/aboutus">About Us</router-link>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/contactus">Contact Us</router-link>
      </div>
      <div class="flex gap-x-2">
        <a class="bg-[#00BCD4] rounded-full p-2 flex transition-all hover:scale-125 duration-300"
          href="https://www.linkedin.com/company/impulseltd/" target="_blank">
          <img src="../../assets/images/social-linkedin.svg" class="h-5 w-5" alt="Linkedin" />
        </a>
        <a class="bg-[#00BCD4] rounded-full p-2 flex transition-all hover:scale-125 duration-300"
          href="https://www.youtube.com/@Impulseky" target="_blank">
          <img src="../../assets/images/social-youtube.svg" class="h-5 w-5" alt="Youtube" />
        </a>
        <a class="bg-[#00BCD4] rounded-full p-2 flex transition-all hover:scale-125 duration-300"
          href="https://www.instagram.com/impulseky/" target="_blank">
          <img src="../../assets/images/social-instagram.svg" class="h-5 w-5" alt="Instagram" />
        </a>
      </div>
    </div>


    <div class="hidden 2xl:flex flex-grow">
      <img src="../../assets/images/splash.svg" class="absolute top-0 right-0 h-full" alt="">
    </div>

  </footer>
  <!-- <footer :class="footerClass()">
    <div class="site-footer px-6 bg-[#111315] text-white py-6 static left-0 w-full bottom-0">
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-1 space-y-8 md:col-end-6 md:col-span-3">
        <div class="flex-col space-y-4">
          <div class="flex-col ">
            <img src="@/assets/images/logo/impulse.webp" alt="logo" />

          </div>
          <div class="flex-col text-start  text-base">
            {{ $t('footer-1') }}

          </div>
          <div class="flex flex-col space-y-1">
            <a href="/impulse-privacy" target="_blank"
              class=" flex-grow-0 underline flex-shrink-0 text-base text-left text-white hover:cursor-pointer">
              {{ $t('footer-2') }}
            </a>
            <a href="/impulse-terms" target="_blank"
              class=" flex-grow-0 underline flex-shrink-0 text-base text-left text-white hover:cursor-pointer">
              {{ $t('footer-3') }}
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 space-x-4 md:w-52 md:ml-auto">


          <div class="flex flex-col space-y-6">
            <a href="/aboutus" target="_blank"
              class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer">
              {{ $t('footer-4') }}
            </a>
            <a href="/services" target="_blank"
              class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer">
              {{ $t('footer-5') }}
            </a>
            <a href="https://www.youtube.com/@Impulseky/featured" target="_blank"
              class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer">
              Youtube
            </a>
          </div>
          <div class="flex flex-col space-y-6">
            <a href="https://www.linkedin.com/company/impulseltd/" target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
              Linkedin
            </a>
            <a href="https://www.instagram.com/impulseky/" target="_blank"
              class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
              Instagram
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer> -->
</template>
<script>
export default {
  methods: {
    footerClass() {
      switch (this.$store.themeSettingsStore.footerType) {
        case "sticky":
          return "sticky bottom-0 z-[999]";
        case "static":
          return "static";
        case "hidden":
          return "hidden";
      }
    },
  },
};
</script>
<style lang=""></style>
