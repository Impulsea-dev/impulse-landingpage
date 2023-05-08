<template>
  <router-link :to="{ name: 'home' }">
    <img
      src="@/assets/images/logo/impulse.svg"
      alt="impulse logo"
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      src="@/assets/images/logo/impulse.svg"
      alt="impulse logo"
      v-if="this.$store.themeSettingsStore.isDark"
      class="w-auto h-auto" 

    />
  </router-link>
</template>
<script></script>
