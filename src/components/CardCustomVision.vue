<template>
<div class="flex flex-wrap w-full justify-start rounded-lg"
  style="background: linear-gradient(-37.79deg, #000 -1.06%, #303030 100.71%);">

    <div class="grid md:grid-cols-2 grid-cols-1 text-white items-center justify-start mx-auto">
       <div class="flex-row p-6">
        <div class="flex flex-col justify-start items-start gap-8">
  <div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-[32px] bg-[#000000] border-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">{{ $t("aboutUsVision-1") }}</p>
  </div>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
    <p class="flex-grow-0 flex-shrink-0  font-semibold text-left text-white">
      <span
        class="flex-grow-0 flex-shrink-0  flex-wrap text-3xl font-semibold text-left text-white"
        >{{ $t("aboutUsVisionDescription-1") }}</span
      >
    </p>
    <p class="flex-grow-0 flex-shrink-0 flex-wrap text-base font-medium text-left text-white/70">
     {{ $t("aboutUsVisionSubDescription-1") }}
    </p>
  </div>  
</div>
     
       </div> 
       <div class="flex-row flex-1 h-full">
        
        <img
      :src="img"
      alt=""
      class="flex-1 h-full object-fill rounded-lg"
    />
  </div>
      
    </div>
   
    
</div>
</template>
<script>
import img from "@/assets/images/svgs/mission.svg"
import { useI18n } from 'vue-i18n'
export default {
  name: 'Card',
  props: { 
    title: {
      type: String,
      default: '',
    },
    
    paragraph: {
      type: String,
      default: '',
    }, 
    classBackground: {
      type: String,
      default: '',
    },
  },
  data(){
      return {img}      
    },
    setup() {
    const { t } = useI18n()
    return { t }
  }
};
</script>
