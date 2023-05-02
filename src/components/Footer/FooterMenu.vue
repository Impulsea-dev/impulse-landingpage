<template lang="">
  <div
    class="bg-white bg-no-repeat custom-dropshadow footer-bg dark:bg-slate-700 flex justify-around items-center backdrop-filter backdrop-blur-[40px] fixed left-0 w-full z-[9999] bottom-0 py-[12px] px-4"
  >
    
    <router-link
      v-slot="{ isActive }"
      :to="{ name: 'home' }"
      class="relative bg-white bg-no-repeat backdrop-filter backdrop-blur-[40px] rounded-full footer-bg dark:bg-slate-700 h-[65px] w-[65px] z-[-1] -mt-[40px] flex justify-center items-center"
    >
      <div
        class="h-[50px] w-[50px] rounded-full relative left-[0px] top-[0px] custom-dropshadow"
      >
        <img
          src="@/assets/images/logo/logo.svg"
          alt=""
          class="w-full h-full rounded-full"
          :class="[
            isActive
              ? 'border-2 border-primary-500'
              : 'border-2 border-slate-100',
          ]"
        />
      </div>
    </router-link> 
  </div>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>
<style lang="scss"></style>
