<template>
  <router-link :to="{ name: 'home' }">
    <img
      src="@/assets/images/logo/impulse.svg"
      alt=""
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      src="@/assets/images/logo/impulse.svg"
      alt=""
      v-if="this.$store.themeSettingsStore.isDark"
    />
  </router-link>
</template>
<script></script>
