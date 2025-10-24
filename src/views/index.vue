<template>
  <div>
    <section class="w-screen min-h-[55rem] md:min-h-[60rem] overflow-visible p-0 m-0 relative pb-24">
      <img src="@/assets/images/svgs/entrance.svg"
        class="animate-pulse lg:hidden xl:hidden md:hidden w-screen -mt-24 p-0 -left-10" alt="">
      <img src="@/assets/images/svgs/entrace1.svg"
        class="animate-pulse md:block md:h-[650px] w-screen -mt-3 p-0 -left-10 hidden" alt="">

      <div>
        <div
          class="absolute left-0 right-0 mx-auto top-10 flex flex-col items-center gap-10 w-full max-w-[1100px] px-6 md:px-12">

          <!-- Texto principal -->
          <div class="flex flex-col items-center text-center gap-6">
            <!-- <p class="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#7F39E9]">
              {{ $t('telcoslog') }}
            </p> -->
            <div class="flex flex-col gap-4">
              <p class="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                AI Driven Revenue Intelligence &
                <br />
                Telco Automation
              </p>
              <p class="text-lg md:text-xl text-white/80">
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

          <!-- Storylane Embed ancho -->
          <div class="w-full max-w-[1100px] px-4 pb-12 md:pb-16">
            <StoryLaneEmbed class="w-full" />
          </div>
        </div>
      </div>
    </section>
    <CapabilitiesTabs class="mt-12 md:mt-20" />
    <SolveProblems />
    <ServicesOverview
      class="mt-12"
      :cards="servicesCards"
      button-text-key="indexOurServices"
      @cta-click="btnLink('contactus')"
    />

    <div class="lg:pr-11 lg:pl-11 mt-20">
      <Card :className="'relative dark:!bg-[#141414]'">
        <Button
          :className="'absolute -top-5 justify-center  left-0 right-0 mr-auto ml-auto lg:w-[22%] md:w-[30%] w-[70%] text-center m-auto gap-2 px-8 py-1 rounded-[32px] dark:bg-[#e2e8ea]'">
          <p class="text-base font-bold text-center text-white dark:text-[#141414] mb-4">
            {{ $t('indexOurSolutions') }}
          </p>
        </Button>
        <CardCustomAll />
      </Card>
    </div>

    <div class="pt-40 grid grid-cols-1 pl-10 pr-10">
      <SwipperCard2 :title="$t('blog-2')" />
    </div>


    <PartnersShowcase
      class="mt-24"
      title-key="indexOurIntegrationPartnersTitle"
      description-key="indexOurIntegrationPartnersDescription"
      cta-title-key="indexLetsWorkTogether"
      cta-button-key="indexContactUs"
      @cta-click="btnLink('contactus')"
    />
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
import { useI18n } from 'vue-i18n'

export default {
  mixins: [window],
  components: {
    SwipperCardHome, Card, CardCustomAll, SwipperCard, Button, CardCustomWhoAre, ModalNewsletter,
    SwipperCard2, SolveProblems, StoryLaneEmbed, CapabilitiesTabs, ServicesOverview, PartnersShowcase
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
<style></style>
