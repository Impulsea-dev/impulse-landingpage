<template>
<div class="flex flex-wrap w-full justify-center">
  <div class="bg-dark border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 text-center" 
  :class="classBackground">
    <div class="text-white w-20 h-20 rounded-full flex items-center justify-center mb-2 mx-auto">
        <img
      :src="img"
      alt=""
    />
    </div>
    <h5 class="text-2xl	 font-semibold mb-3.5 text-white">{{ title }}</h5>
    <p class="text-[#ffffffb3] text-base mb-3.5">{{ paragraph }}</p>
    
  </div>
</div>
</template>
<script>
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
    img: {
      type: String,
      default: '',
    },
    classBackground: {
      type: String,
      default: '',
    },
  },
};
</script>
