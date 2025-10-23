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
          <div class="w-full max-w-[1100px] px-4">
            <StoryLaneEmbed class="w-full" />
          </div>
        </div>
      </div>
    </section>
    <CapabilitiesTabs />
    <SolveProblems />
    <Button
      :className="'flex justify-center left-0 right-0 mr-auto ml-auto md:w-[18%] w-[70%] mt-6 mb-4 items-center relative gap-2 px-8 py-2 rounded-[32px] dark:bg-[#e2e8ea]'">
      <p class="flex-grow-0 flex-shrink-0 text-base font-bold  text-center text-[#141414]">{{ $t('indexOurServices') }}
      </p>
    </Button>

    <!-- Grid Cards Start-->
    <div
      class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 md:space-y-0 space-y-3 mb-6 lg:pr-11 lg:pl-11">
      <CardCustom :title="$t('indexBPOServices')" :paragraph="$t('indexBPOText')" :img="dev"
        classBackground="cardDisplay" />

      <CardCustom :title="$t('indexManagedServices')" :paragraph="$t('indexManagedText')" :img="bpo"
        classBackground="cardDisplay" />

      <CardCustom :title="$t('indexSalesServices')" :paragraph="$t('indexSalesText')" :img="bi"
        classBackground="cardDisplay" />

    </div>
    <!-- Grid Cards End -->
    <div class="h-20"></div>

    <div class="h-20"></div>
    <div class="lg:pr-11 lg:pl-11">
      <Card :className="'relative dark:!bg-[#141414]  mt-4 '">
        <Button
          :className="'absolute -top-5 justify-center  left-0 right-0 mr-auto ml-auto lg:w-[22%] md:w-[30%] w-[70%] text-center m-auto gap-2 px-8 py-1 rounded-[32px] dark:bg-[#e2e8ea]'">
          <p class="text-base font-bold text-center text-[#141414]">
            {{ $t('indexOurSolutions') }}
          </p>
        </Button>
        <CardCustomAll />
      </Card>
    </div>

    <div class="pt-40 grid grid-cols-1 pl-10 pr-10">
      <SwipperCard2 :title="$t('blog-2')" />
    </div>


    <div class="pt-20 grid grid-cols-1 md:grid-cols-2 pl-10 pr-10">
      <div class="mt-10">
        <div class="text-white text-[40px] leading-10">
          {{ $t('indexOurIntegrationPartnersTitle') }}
        </div>
        <div class="mt-4 text-[#ffffffb3] text-[16px] leading-6 font-medium">
          {{ $t('indexOurIntegrationPartnersDescription') }}
        </div>
      </div>
      <div :class="window.width < 640 ? 'bgLogosPhone' : 'bgLogos'">
      </div>
    </div>
    <div class="h-20"></div>
    <div class="flex justify-center items-center gap-6 mb-2">
      <p class=" w-[327px] text-[32px] font-bold text-center text-white">{{ $t('indexLetsWorkTogether') }}</p>
    </div>

    <div class="flex justify-center items-center gap-6 mb-6">
      <Button :text="$t('indexContactUs')" btnClass="btn-primary "
        style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnLink('contactus')" />
    </div>
    <ModalNewsletter />
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
import StoryLaneEmbed from "@/components/StoryLaneEmbed.vue"
import CapabilitiesTabs from "@/components/CapabilitiesTabs.vue"
import { useI18n } from 'vue-i18n'

export default {
  mixins: [window],
  components: {
    SwipperCardHome, Card, CardCustom, CardCustomAll, SwipperCard, Button, CardCustomWhoAre, ModalNewsletter,
    SwipperCard2, SolveProblems, StoryLaneEmbed, CapabilitiesTabs
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
  setup() {
    const { t } = useI18n()
    return { t }
  }
};
</script>
<style>
.cardDisplay {
  background: linear-gradient(-37.79deg, #000 -1.06%, #111315 100.71%);
  background-color: #111315;
  transition: all 400ms ease-in;
}

.cardDisplay:hover {
  background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%);
}

.bgLogos {
  background: url(@/assets/images/logos.webp) no-repeat;
  background-size: 100% 100%;
  background-color: transparent !important;
  height: 224px;

}

.bgLogosPhone {
  margin-top: 10px;
  background: url(@/assets/images/logosPhone.webp) no-repeat;
  background-size: 100% 100%;
  background-color: transparent !important;
  height: 384px;
}

.bgbutton {
  background: linear-gradient(262.8deg, #A446F4 -1.48%, #4138F3 103.76%);
  padding: 11px 32px;
  border-radius: 8px;
}
</style>
