<template>
  <footer :class="footerClass()">
    <div
      class="site-footer px-6 bg-[#111315] text-white py-6 static left-0 w-full bottom-0"
    >
      <div class="grid md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-1 space-y-8 md:col-end-6 md:col-span-3">
        <div class="flex-col space-y-4">
          <div class="flex-col ">
            <img
      src="@/assets/images/logo/impulse.svg"
      alt="logo"
    />
           
          </div>
          <div class="flex-col text-start  text-base">
            Copyright © 2023 Impulse. All rights reserved.

          </div>
          <a
             href="/impulse-privacy"
             target="_blank"
            
             class=" flex-grow-0 underline flex-shrink-0 text-sm text-left text-white hover:cursor-pointer"
           >
             Privacy Policy
           </a>
        </div>
        <div class="grid grid-cols-2 gap-5 space-x-4 md:w-52 md:ml-auto">
         
        
         <div class="flex flex-col space-y-6">
             <a
             href="/aboutus"
             target="_blank"
            
             class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer"
           >
             About us
           </a>
           <a
           href="/services"
             target="_blank"
              
             class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer"
           >
             Services
           </a>
           <a
           href="https://www.youtube.com/@Impulseky/featured"
             target="_blank"
              
             class=" flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white hover:cursor-pointer"
           >
             Youtube
           </a>
         </div> 
         <div class="flex flex-col space-y-6">
           <a
             href="https://www.linkedin.com/company/impulseltd/"
             target="_blank"
             class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white"
          
           >
             Linkedin
           </a>
           <a
             href="https://www.instagram.com/impulseky/"
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
