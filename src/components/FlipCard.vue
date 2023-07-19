<template>
<div class="flex min-h-screen items-center justify-center ">
  <div class="group h-full w-full [perspective:1000px]">
   
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    :class="bgc"
    >
        
        <div class="absolute inset-0">
            <div class="flex min-h-full flex-col items-center justify-center absolute w-full group-hover:hidden">
          <h1 class="text-3xl font-bold">{{ title }}</h1>
        </div>
        
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-60 group-hover:opacity-100" :src="img" alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">{{ title }}</h1>
          <p class="text-base">{{ description }}</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900" @click="sendTo(url)">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:["img","title","description","url","bgc"],
    methods:{
    sendTo(link){
      this.$router.push({path:link})
    }
  }
    
}
</script>