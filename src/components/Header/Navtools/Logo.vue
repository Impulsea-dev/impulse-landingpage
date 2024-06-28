<template>
  <router-link :to="{ name: 'home' }">
    <img src="@/assets/images/logo/logo.svg" alt="impulse logo" v-if="logoC == 'black'" />

    <img src="@/assets/images/logo/impulse.svg" alt="impulse logo" v-else class="w-auto h-auto" />
  </router-link>
</template>
<script>
export default {
  props: ['logoC'],
  mounted() {
    // console.log(this.logoC);
  }
}
</script>
