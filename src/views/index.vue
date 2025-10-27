<template>
  <div>
    <!-- <section class="w-screen min-h-[55rem] md:min-h-[60rem] overflow-visible p-0 m-0 relative pb-24">
      <img src="@/assets/images/svgs/entrance.svg"
        class="animate-pulse lg:hidden xl:hidden md:hidden w-screen -mt-24 p-0 -left-10" alt="">
      <img src="@/assets/images/svgs/entrace1.svg"
        class="animate-pulse md:block md:h-[650px] w-screen -mt-3 p-0 -left-10 hidden" alt="">
      <div>
        <div
          class="absolute left-0 right-0 mx-auto top-10 flex flex-col items-center gap-10 w-full max-w-[1100px] px-6 md:px-12">
          <div class="flex flex-col items-center text-center gap-6">
            <div class="flex flex-col gap-4">
              <p class="text-4xl md:text-5xl font-extrabold text-[#6E4098] leading-tight pt-14">
                AI Driven Revenue Intelligence &
                <br />
                Telco Automation
              </p>
              <p class="text-lg md:text-xl text-[#6E4098]">
                The orchestration layer that unifies your data and enables AI and automation to optimize efficiency and
                workflows — one brain so your network runs itself and reacts in seconds.
              </p>
            </div>
            <div>
              <Button :text="$t('indexContactUs')" btnClass="btn-primary"
                style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"
                @click="btnLink('contactus')" />
            </div>
          </div>
          <div class="w-full max-w-[1100px] px-4 pb-12 md:pb-16">
            <StoryLaneEmbed class="w-full" />
          </div>
        </div>
      </div>
    </section> -->
    <HomePage>
      <template v-slot:videol>
        <div class="absolute top-0 bottom-0 w-full">
          <div class="video-container">
            <video ref="videoRef" class="videoStyle" src="../assets/images/Video.mp4" autoplay muted loop></video>
          </div>
        </div>
      </template>
    </HomePage>
    <CapabilitiesTabs  />
    <!-- <SolveProblems /> -->
    <TimelineShowcase />
    <RolesMarquee />
    <CSPs />
    <div class="bg-white">
      <RevenuePotencial/>
    </div>

    <!-- <div class="mt-20 lg:pr-11 lg:pl-11">
      <Card :className="'relative dark:!bg-[#141414]'">
        <Button
          :className="'absolute -top-5 justify-center  left-0 right-0 mr-auto ml-auto lg:w-[22%] md:w-[30%] w-[70%] text-center m-auto gap-2 px-8 py-1 rounded-[32px] dark:bg-[#e2e8ea]'">
          <p class="text-base font-bold text-center text-white dark:text-[#141414] mb-4">
            {{ $t('indexOurSolutions') }}
          </p>
        </Button>
        <CardCustomAll />
      </Card>
    </div> -->

    <!-- <ServicesOverview
      :cards="servicesCards"
      button-text-key="indexOurServices"
      @cta-click="btnLink('contactus')"
    /> -->


    <!-- <PartnersShowcase
      title-key="indexOurIntegrationPartnersTitle"
      description-key="indexOurIntegrationPartnersDescription"
      cta-title-key="indexLetsWorkTogether"
      cta-button-key="indexContactUs"
      @cta-click="btnLink('contactus')"
    /> -->
    <!-- <ModalNewsletter /> -->
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
import CardCustomWhoAre from "@/components/CardCustomWhoAre.vue"
import SwipperCard from "@/components/SwipperCard.vue"
import SwipperCard2 from "@/components/SwipperCard2.vue"
import SwipperCardHome from "@/components/SwipperCardHome.vue"
import window from "@/mixins/window"
import ModalNewsletter from "@/components/ModalNewsletter.vue"
import SolveProblems from "@/components/SolveProblems.vue"
import StoryLaneEmbed from "@/components/StoryLaneEmbed.vue"
import CapabilitiesTabs from "@/components/CapabilitiesTabs.vue"
import ServicesOverview from "@/components/ServicesOverview.vue"
import PartnersShowcase from "@/components/PartnersShowcase.vue"
import RolesMarquee from "@/components/RolesMarquee.vue"
import TimelineShowcase from "@/components/TimelineShowcase.vue"
import { useI18n } from 'vue-i18n'
import HomePage from "@/components/HomePage.vue"
import CSPs from "@/components/CSPS.vue"
import RevenuePotencial from "@/components/RevenuePotencial.vue"

export default {
  mixins: [window],
  components: {
    SwipperCardHome, HomePage, CardCustomAll, SwipperCard, Card, Button, CardCustomWhoAre, ModalNewsletter,
    SwipperCard2, SolveProblems, StoryLaneEmbed, CapabilitiesTabs, ServicesOverview, PartnersShowcase, RolesMarquee, TimelineShowcase, CSPs, RevenuePotencial
  },
  data() {
    return {
      img, bi, dev, bpo, consult, whoarewe
    }
  },
  computed: {
    servicesCards() {
      return [
        {
          id: 'bpo-services',
          titleKey: 'indexBPOServices',
          descriptionKey: 'indexBPOText',
          img: this.dev
        },
        {
          id: 'managed-services',
          titleKey: 'indexManagedServices',
          descriptionKey: 'indexManagedText',
          img: this.bpo
        },
        {
          id: 'sales-services',
          titleKey: 'indexSalesServices',
          descriptionKey: 'indexSalesText',
          img: this.bi
        }
      ]
    }
  },
  methods: {
    btnLink(link) {
      this.$router.push({ name: link })
    },
  },
  setup() {
    const { t } = useI18n()
    return { t }
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
