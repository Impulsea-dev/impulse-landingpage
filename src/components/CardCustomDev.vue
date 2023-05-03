<template>
<div class="">
  <div class="bg-[#000000] p-6 text-start border-r-2 border-t-2 border-white -mt-6 mb-6" 
  :class="classBackground">    
    <h5 class="text-2xl	 font-bold mb-3.5 text-white">{{ title }}</h5>
    <p class="text-white text-base mb-3.5">{{ paragraph }}</p>
    <div class="text-white w-60 h-60 rounded-full flex items-center justify-center mt-1 mx-auto">
      <img
    :src="img"
    alt=""
  />
  </div>
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
