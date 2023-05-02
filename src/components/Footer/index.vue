<template>
  <footer :class="footerClass()">
    <div
      class="site-footer px-6 bg-[#111315] text-white py-6 static left-0 w-full bottom-0"
    >
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-1 space-y-8 md:col-end-6 md:col-span-3">
        <div class="flex-col space-y-4">
          <div class="flex-col ">
            <img
      src="@/assets/images/logo/logo-white.svg"
    />
           
          </div>
          <div class="flex-col text-start  text-base">
            Lorem ipsum dolor sit amet consectetur. Tristique odio velit tristique lectus tempus eleifend blandit.

</div>
        </div>
        <div class="grid grid-cols-2 gap-5 space-x-4 md:w-52 md:ml-auto">
         
        
        <div class="flex flex-col space-y-6">
            <a
            href="#"
            target="_blank"
            class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
          >
            About us
          </a>
          <a
            href="#"
            target="_blank"
            class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
          >
            Services
          </a>
          <a
            href="#"
            target="_blank"
            class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
          >
            Products
          </a>
          <a
            href="#"
            target="_blank"
            class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
          >
            Blog
          </a>
        </div> 
        <div class="flex flex-col space-y-6">
          <a
            href="#"
            target="_blank"
            class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
         
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
         
          >
            Instagram
          </a>
        </div>
   
        </div>
      </div>
    </div>
  </footer>
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
