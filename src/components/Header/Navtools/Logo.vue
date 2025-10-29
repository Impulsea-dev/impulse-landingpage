<template>
  <router-link :to="{ name: 'home' }">
    <img
      :src="logoSrc"
      alt="impulse logo"
      class="w-auto h-auto"
    />
  </router-link>
</template>
<script>
import impulseLogoWhite from '@/assets/images/logo/impulse.svg'
import impulseLogoColor from '@/assets/images/logo/logo.svg'

export default {
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logoSrc() {
      // Si el header es transparente, usar impulse.svg (blanco)
      // Si el header es sólido, usar logo.svg (con colores)
      return this.isTransparent ? impulseLogoWhite : impulseLogoColor;
    }
  }
}
</script>
