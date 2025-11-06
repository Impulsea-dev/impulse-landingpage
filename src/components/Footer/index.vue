<template>
  <footer
    class="flex flex-col md:flex-row justify-center md:justify-between w-full h-60 bg-[#7F39E9] relative overflow-hidden">
    <div class="flex md:hidden px-5 py-5">
      <div>
        <img src="@/assets/images/logo/impulse.webp" class="h-auto w-36" alt="logo" />
        <span class="text-sm text-white">{{ $t('footer.tagline') }}</span>
      </div>
    </div>
    <div class="hidden md:block">
      <img src="../../assets/images/bgfooter.svg" class="hidden md:block h-full object-cover" alt="" />
      <div class="absolute top-1/2 left-4">
        <img src="@/assets/images/logo/impulse.webp" class="h-auto w-40" alt="logo" />
        <span class="text-sm text-white">{{ $t('footer.tagline') }}</span>
      </div>
    </div>
    <div class="flex items-center flex-wrap gap-10 md:gap-x-40 px-5 xl:px-40">
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">{{ $t('footer.legal.title') }}</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/impulse-privacy">{{ $t('footer.legal.privacy') }}</router-link>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/impulse-terms">{{ $t('footer.legal.terms') }}</router-link>
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">{{ $t('footer.resources.title') }}</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/blog">{{ $t('footer.resources.blog') }}</router-link>
        <a class="text-gray-300 text-xs md:text-sm"
          href="https://open.spotify.com/show/2xsbT6w1MOuEe2DSyV1Mnx" target="_blank">{{ $t('footer.resources.podcast') }}</a>
      </div>
      <div class="flex flex-col gap-y-1">
        <span class="text-white font-bold text-sm md:text-base">{{ $t('footer.company.title') }}</span>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/aboutus">{{ $t('footer.company.about') }}</router-link>
        <router-link class="text-gray-300 text-xs md:text-sm" to="/contactus">{{ $t('footer.company.contact') }}</router-link>
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
</template>
