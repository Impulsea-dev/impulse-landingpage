<template>
<div class="flex flex-wrap w-auto justify-center  ">
  <div class="md:p-10 text-center " :class="classBackground"
  >
    <div class="text-white w-80 h-auto rounded-full flex items-center justify-center mb-6 mx-auto" >
        <img
      :src="img"
      alt=""
      class="rounded-md"
    />
    </div>
    <p class="text-white text-base mb-3.5 flex items-center justify-center">{{ paragraph }}</p>
    <h1 class="text-2xl	 font-semibold mb-3.5 text-white flex items-center justify-center">{{ title }}</h1>   
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
