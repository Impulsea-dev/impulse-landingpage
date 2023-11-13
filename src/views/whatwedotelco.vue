<template>
  <div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-28 mb-12">
      <div class="text-xl md:text-2xl lg:text-6xl lg:w-[875px] text-white mb-4 ml-4 font- animate-pulse">
        Specialised telecom software delivered with deep industry experience
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
        <FlipCard :bgc="flipcard.background" :img="flipcard.img" :title="flipcard.title" 
        :url="flipcard.url" :description="flipcard.description" v-for="(flipcard,i) in flipcards" :key="i"   /> 
    </div>

    <div class="text-white text-center text-3xl mb-3 mt-40">
      <span>Let’s Work Together </span>
    </div>
    <div class="flex justify-center items-center gap-6 mb-6">
      <Button text="Contact Us" btnClass="btn-primary "
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
      const flipcards = ref([
        {
          title:'Telemetrics',
          description:'Advanced analytics for telecoms. Enhance visibility, simplify management, and optimize operations with our intelligent solution.',
          img:telemetrics,
          background:'bg-bg-btnp',
          url:'/telemetrics'
        },
        {
          title:'Impulse Bot',
          description:'Improve Customer Satisfaction, Boost Sales, and Minimize Churn with Impulse Bot—an innovative AI and ML-powered chatbot designed to assist your customers round the clock.',
          img:boost,
          background:'bg-boost',
          url:'/impulsebot'
        },
        {
          title:'BPO Services',
          description:'Our BPO services include sales, support, and outbound services to streamline your business operations and enhance customer satisfaction.',
          img:bposerv,
          background:'bg-bpo',
          url:'/bpo'
        },
        {
          title:'Product Design and Development',
          description:'Custom web solutions, billing systems, API development, and CRM integrations for telecommunications. Tailored to your unique needs, scalable solutions that drive growth and enhance customer satisfaction',
          img:productdev,
          background:'bg-desingdev',
          url:'/product'
        },
        {
          title:'Impulse Leads',
          description:'Empower your B2B endeavors with the crucial data and software to effortlessly connect and seal deals with your most valuable buyers, all conveniently integrated in one piace.',
          img:leads,
          background:'bg-imleads',
          url:'/impulse-lead'
        },
        {
          title:'Impulse Pay',
          description:'Streamline your billing processes, enhance customer satisfaction, and simplify payments with Impulse Pays user-friendly portal. Say goodbye to long queues and complex procedures. Upgrade your telecom services effortlessly and experience the power of automation.',
          img:pay,
          background:'bg-impay',
          url:'/impulse-pay'
        }
      ])

      return{
        flipcards
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
  