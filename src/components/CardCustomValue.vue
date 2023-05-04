<template>
<div class="flex flex-wrap w-full justify-center">
  <div class="bg-[#111315] border-r-2 border-gray-500/20 p-6 text-center" 
  :class="classBackground">
    <div class="text-white w-20 h-20 rounded-full flex items-center justify-center mb-5 mx-auto">
        <img
      :src="img"
      alt=""
    />
    </div>
    <h5 class="text-2xl	 font-semibold mb-3.5 text-white">{{ title }}</h5>
    <p class="text-white text-base mb-3.5">{{ paragraph }}</p>
    
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
