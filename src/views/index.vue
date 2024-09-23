<template>
  <div>
    <Homepage>
      <template v-slot:videol>
        <div class="absolute top-0 bottom-0 w-full">
          <div class="video-container">
            <video ref="videoRef" class="videoStyle" src="../assets/images/Video.mp4" autoplay muted loop></video>
          </div>
        </div>
      </template>
    </Homepage>
    <LeadingGlobal />
    <CSPs />
    <RevenuePotencial />
    <ImpulseAction />
  </div>
</template>
<script>
import img from "@/assets/images/logo/logo-white.svg"
import bi from "@/assets/images/sales.png"
import dev from "@/assets/images/outs.png"
import bpo from "@/assets/images/ads.png"
import whoarewe from "@/assets/images/whoarewe.webp"
import consult from "@/assets/images/svgs/consult.svg"
import Button from "@/components/Button";
import Card from "@/components/Card"
import CardCustomAll from "@/components/CardCustomAll.vue"
import CardCustom from "@/components/CardCustom.vue"
import CardCustomWhoAre from "@/components/CardCustomWhoAre.vue"
import SwipperCard from "@/components/SwipperCard.vue"
import SwipperCard2 from "@/components/SwipperCard2.vue"
import SwipperCardHome from "@/components/SwipperCardHome.vue"
import window from "@/mixins/window"
import ModalNewsletter from "@/components/ModalNewsletter.vue"
import SolveProblems from "@/components/SolveProblems.vue"
import Homepage from "@/components/HomePage.vue"
import LeadingGlobal from "@/components/LeadingGlobal.vue"
import CSPs from "@/components/CSPS.vue"
import RevenuePotencial from "@/components/RevenuePotencial.vue"
import ImpulseAction from "@/components/ImpulseAction.vue"
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from "vue"

export default {
  mixins: [window],
  components: {
    SwipperCardHome, Card, CardCustom, CardCustomAll, SwipperCard, Button, CardCustomWhoAre, ModalNewsletter,
    SwipperCard2, SolveProblems, Homepage, LeadingGlobal, CSPs, RevenuePotencial, ImpulseAction
  },
  data() {
    return {
      img, bi, dev, bpo, consult, whoarewe
    }
  },
  methods: {
    btnLink(link) {
      this.$router.push({ name: link })
    },
  },

  mounted() {
    this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))
  },
  setup() {
    const { t } = useI18n()
    const videoRef = ref(null);
    onMounted(() => {
      if (videoRef.value) {
        videoRef.value.playbackRate = 0.8;
      }
    });
    return { t, videoRef }
  }
};
</script>
<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.video-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 0;
}

.videoStyle {
  object-fit: cover;
  height: 25%;
  /* h-1/4 */
  width: 100%;
  clip-path: inherit;
  border-radius: inherit;
  position: relative;
  z-index: 0;
}

@media (min-width: 768px) {
  .videoStyle {
    height: 100%;
    border-radius: none;
  }

  .video-container::before {
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
}
</style>
