<template>
  <div
    class="cursor-pointer text-current text-2xl"
    @click="toggleMsidebar"
  >
    <Icon icon="material-symbols:menu-rounded" />
  </div>
</template>
<script setup>
import Icon from "@/components/Icon";
import { useThemeSettingsStore } from "@/store/themeSettings";

const themeSettingsStore = useThemeSettingsStore()

// dispath toggleMsidebar
const toggleMsidebar = () => {
  themeSettingsStore.toggleMsidebar()
};
</script>
<style lang="scss"></style>
