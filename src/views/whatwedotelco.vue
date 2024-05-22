<template>
  <div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-28 mb-12">
      <div class="text-xl md:text-2xl lg:text-6xl lg:w-[875px] text-white mb-4 ml-4 font- animate-pulse">
        {{ $t('whatWeDoTitle') }}
      </div>
    </div>
    <!-- <div class="relative dark:bg-[#000000]  mt-2">
      <div class="space-y-4 mt-4">
        <div class="grid   grid-rows-1 lg:grid-rows-2  gap-6">
          <CardCustomTelemetric></CardCustomTelemetric>
          <card-custom-boost></card-custom-boost>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">

          <card-custom-product-dev></card-custom-product-dev>
        </div>
      </div>
    </div> -->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        <FlipCard :bgc="flipcard.background" :img="flipcard.img" :title=$t(flipcard.title)
        :url="flipcard.url" :description=$t(flipcard.description) v-for="(flipcard,i) in flipcards" :key="i"   /> 
    </div>

    <div class="text-white text-center text-3xl mb-3 mt-40">
      <span>{{ $t('indexLetsWorkTogether') }}</span>
    </div>
    <div class="flex justify-center items-center gap-6 mb-6">
      <Button :text="$t('indexContactUs')" btnClass="btn-primary "
        style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" />
    </div>
  </div>
</template>
<script>
import img from "@/assets/images/logo/logo-white.svg"
import Card from "@/components/Card"
import CardCustom from "@/components/CardCustom.vue"
import CardCustomTelemetric from "@/components/CardCustomTelemetric.vue"
import CardCustomBoost from "@/components/CardCustomBoost.vue"
import CardCustomProductDev from "@/components/CardCustomProductDev.vue"
import SwipperCard from "@/components/SwipperCard.vue"
import FlipCard from "@/components/FlipCard.vue"
import Button from "@/components/Button"
import { ref } from "vue"
import telemetrics from "@/assets/images/test1.png"
import boost from "@/assets/images/boostimg.png"
import bposerv from "@/assets/images/bpo.png"
import productdev from "@/assets/images/desinganddev.png"
import leads from "@/assets/images/impulseleads.png"
import pay from "@/assets/images/impulsepay.png"
import { useI18n } from 'vue-i18n'
export default {
  components: {
    CardCustom,
    FlipCard,
    Button,
    Card,
    CardCustomTelemetric,
    CardCustomBoost,
    CardCustomProductDev,
    SwipperCard
  },
  data() {
    return { img }
  },

  setup(){
    const { t } = useI18n()
      const flipcards = ref([
        {
          title:'Telemetrics',
          description:"whatWeDoDescription-1",
          img:telemetrics,
          background:'bg-bg-btnp',
          url:'/telemetrics'
        },
        {
          title:'Impulse Bot',
          description:"whatWeDoDescription-2",
          img:boost,
          background:'bg-boost',
          url:'/impulsebot'
        },
        {
          title:"indexOurSolutionsTitle-6",
          description:"whatWeDoDescription-3",
          img:bposerv,
          background:'bg-bpo',
          url:'/bpo'
        },
        {
          title:"whatWeDoProductDesignTitle",
          description:"whatWeDoDescription-4",
          img:productdev,
          background:'bg-desingdev',
          url:'/product'
        },
        {
          title:'Impulse Leads',
          description:"whatWeDoDescription-5",
          img:leads,
          background:'bg-imleads',
          url:'/impulse-lead'
        },
        {
          title:'Impulse Pay',
          description:"whatWeDoDescription-6",
          img:pay,
          background:'bg-impay',
          url:'/impulse-pay'
        }
      ])

      return{
        flipcards,t
      }
  },
  methods: {
    btnContackUs() {
      this.$router.push({ name: "contactus" })
    }
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
</style>
  