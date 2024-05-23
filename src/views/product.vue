<template>
  <div class="grid grid-cols-1 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative -!pb-[2px] ">
    <CardCustomProduct :class="' overflow-hidden xl:h-[327px] md:h-[50vh]'"/>
    <!-- Grid Value Start-->
      <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 -mt-6 border-t-2">
        <CardCustomDev
          :title="$t('productInfo-2.title')"
          :paragraph="$t('productInfo-2.paragraph')"
         :img="solutions"
         /> 
         <CardCustomDev
         :title="$t('productInfo-3.title')"
          :paragraph="$t('productInfo-3.paragraph')" 
          :img="expertise"
         /> 
         <CardCustomDev
         :title="$t('productInfo-4.title')"
          :paragraph="$t('productInfo-4.paragraph')"
         
          :img="success"
         /> 
      </div>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 border-t-2 border-white">
        <CardCustomDev
          :title="$t('productInfo-5.title')"
          :paragraph="$t('productInfo-5.paragraph')"
          :img="clock"
         /> 
         <CardCustomDev
         :title="$t('productInfo-6.title')"
          :paragraph="$t('productInfo-6.paragraph')"
          :img="data"
         /> 
      </div>
    <!-- Grid Value End -->
    <div class="md:bg-[#181818] flex justify-center gap-4 p-8   "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 md:p-8'">
    <ContactForm :refer="'Product&Development'" />
    </card>
</div>
  </div>
</template>
  <script>  
  import CardCustomProduct from "@/components/CardCustomProduct.vue"
  import CardCustomDev from "@/components/CardCustomDev.vue"
  import solutions from "@/assets/images/svgs/solutions.svg"
  import expertise from "@/assets/images/svgs/expertise.svg"
  import success from "@/assets/images/svgs/success.svg"
  import clock from "@/assets/images/svgs/clock.svg"
  import data from "@/assets/images/svgs/data.svg"
  import Card from "@/components/Card/index.vue"  
import ContactForm from "@/components/ContactForm.vue" 
  export default {
    components:{
      CardCustomProduct,
      CardCustomDev,
      Card,
      ContactForm
      
    },
    data(){
      return {solutions,expertise,success,clock,data}
    }
  };
  </script>
  <style>
 
  </style>
  