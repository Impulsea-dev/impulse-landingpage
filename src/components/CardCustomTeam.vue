<template>
<div class="flex flex-wrap w-full justify-center ">
  <div class="bg-dark p-10 text-center" 
  :class="classBackground">
    <div class="text-white w-80 h-96 rounded-full flex items-center justify-center mb-16 mx-auto">
        <img
      :src="img"
      alt=""
    />
    </div>
    <p class="text-white text-base mb-3.5 flex items-start justify-start">{{ paragraph }}</p>
    <h1 class="text-2xl	 font-semibold mb-3.5 text-white flex items-start justify-start">{{ title }}</h1>   
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
