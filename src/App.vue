<template>
  <router-view />
</template>

<script>
import { useThemeSettingsStore } from "@/store/themeSettings";
export default {
  mounted() {
    this.$store.themeSettingsStore = useThemeSettingsStore()
    let themeSettingsStore = useThemeSettingsStore()
    themeSettingsStore.setTheme("light")
  }
}
</script>

<style></style>
