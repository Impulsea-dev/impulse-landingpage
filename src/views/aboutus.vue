<template>
  <div>
    <OurExecutiveTeam />
    <ImpulseSolution />
    <MissionVision />

  </div>
</template>
<script>
import OurExecutiveTeam from "@/components/aboutus/OurExecutiveTeam.vue"
import ImpulseSolution from "@/components/aboutus/ImpulseSolution.vue"
import MissionVision from "@/components/aboutus/MissionVision.vue"
import { useI18n } from 'vue-i18n'
export default {
  components: {
    OurExecutiveTeam,
    ImpulseSolution,
    MissionVision
  },
  mounted() {
    // this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }
  },

};

</script>