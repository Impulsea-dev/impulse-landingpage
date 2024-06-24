<template>
  <div class="flex flex-wrap w-full justify-center">
    <div class="card rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 text-center
  bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:text-white transition-all duration-100">
      <div class="w-20 h-20 rounded-full flex items-center justify-center mb-2 mx-auto">
        <img :src="img" alt="" />
      </div>
      <span class="text-2xl font-semibold mb-3.5">{{ title }}</span>
      <p class="text-base mb-3.5">{{ paragraph }}</p>

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
<style scoped>
.card:hover {
  background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);
}
</style>
