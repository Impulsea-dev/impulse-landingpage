<template>
  <router-link :to="{ name: 'home' }">
    <img src="@/assets/images/logo/logo.webp" alt="impulse logo" class="w-36 h-auto" v-if="logo" />

    <img src="@/assets/images/logo/impulse.webp" alt="impulse logo" v-else class="w-36 h-auto" />
  </router-link>
</template>
<script>
export default {
  props: ['logo'],
}
</script>
