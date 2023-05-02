<template>
  <router-view />
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";
export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
    let themeSettingsStore = useThemeSettingsStore()
    themeSettingsStore.toogleDark()
  }
}
</script>

<style></style>
