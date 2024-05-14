<template>
  <div class="flex sm:w-[350px]  h-[450px] md:h-[400px] 2xl:h-[450px]  items-center justify-center mb-6">
    <div class="group w-full h-full [perspective:1000px]">
      <div
        class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        :class="bgc">
        <div class="absolute inset-0">          
          <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-60 group-hover:opacity-0"
            :src="img" alt="" />
        </div>
        
        <div
          class="absolute inset-0 h-full w-full rounded-xl bg-[#111315] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div class="flex min-h-full flex-col items-center justify-center">
            <h1 class="text-3xl font-extrabold text-white font-Monda">{{ title }}</h1>
            <h2 class="text-sm font-extrabold text-white font-Monda">{{ subtitle }}</h2>
            <p class="text-sm md:text-base mt-4 font-Monda">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title","subtitle", "description", "url", "bgc"],
  methods: {
    sendTo(link) {
      this.$router.push({ path: link })
    }
  }

}
</script>

<style> .gb-btn {
   padding: 12px;
   background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)
 }
</style>