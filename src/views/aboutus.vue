<template>
  <div>
    <section class="l-section text-black-900" data-header-color="black" data-header-bg="white"></section>

    <!-- <div class="flex justify-center  flex-col">
  <div class="text-white text-center text-3xl mb-3">
          <span>Our Executive Team</span>
       </div> 
<div class="flex justify-center p-4 mt-5">
  <div class="md:flex lg:grid-cols-6 md:grid-cols-1 gap-2 md:space-y-0  mt-9">        
         
         <CardCustomTeam
         paragraph="Brian Molina"
         title="Impulse Founder and CEO"        
         :img="chan1"
         classBackground="bg-[#111315]"
         />
         <CardCustomTeam
         paragraph="Rob McNabb"
         title="Co-founder and NED"        
         :img="chan2"
         classBackground="bg-[#111315]"
         />
       </div>
</div>
</div> -->
    <!--<SwipperCardTeam class="md:hidden flex"/> -->
    <!-- <div class="flex justify-center md:items-center flex-col">
        <div class="text-white text-center text-3xl mb-3">
          <span>Our Executive Team</span>
       </div> 
        <div class="flex justify-center flex-col">
          <div class="sm:flex grid-cols-1 md:grid-cols-3 gap-6 p-4"  >
          <Flipcard2 :bgc="Flipcard2.background" :img="Flipcard2.img" :title="Flipcard2.title" :subtitle="Flipcard2.subtitle" 
          :url="Flipcard2.url" :description="Flipcard2.description" v-for="(Flipcard2,i) in Flipcard2s" :key="i"  /> 
        </div>
        </div>       
      </div> -->
    <section class="bg-white dark:bg-[#111315] items-center justify-center mt-32 mb-10 rounded-lg p-2 mx-5">
      <div class="flex justify-start md:items-start flex-col">
        <Button :text="$t('aboutUsExecutiveTeamTitle')" btnClass="btn-primary mt-2"
          style="background:#086C88;border-radius: 32px;" />
        <!-- <div class="text-lg md:text-5xl lg:text-5xl text-white mb-4">
          Our Executive Team
        </div>  -->
        <div class="md:flex grid-cols-1 md:grid-cols-3 md:gap-6 md:space-y-0 md:space-x-14 mb-12 mt-5 items-center">

          <div class="flex items-center rounded-lg shadow sm:flex p-5 lg:flex-row flex-col">
            <a href="#">
              <img class="sm:w-50 sm:h-auto rounded-lg" :src="chan1">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                <a href="#">Brian Molina</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">{{ $t('aboutUsExecutiveTeamFounderCEOTitle') }}</span>
              <p class="mt-3 font-light text-slate-900 dark:text-white">{{
          $t('aboutUsExecutiveTeamFounderCEODescription') }}</p>
            </div>
          </div>
          <div class="flex items-center rounded-lg shadow sm:flex p-5 lg:flex-row flex-col">
            <a href="#">
              <img class="sm:w-50 sm:h-auto rounded-lg" :src="chan2">
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                <a href="#">Rob McNabb</a>
              </h3>
              <span class="text-gray-500 dark:text-gray-400">{{ $t('aboutUsExecutiveTeamCOFounderTitle') }}</span>
              <p class="mt-3 font-light text-slate-900 dark:text-white">{{
          $t('aboutUsExecutiveTeamCOFounderDescription')
        }}</p>
            </div>
          </div>

        </div>
      </div>
      <Button :text="$t('aboutUs')" btnClass="btn-primary mb-6" style="background:#086C88;border-radius: 32px;" />
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-x-14 mb-12">
        <div class="text-lg md:text-5xl lg:text-5xl text-slate-900 dark:text-white mb-4">
          {{ t('aboutUsLeadingIndustryTitle') }}
        </div>
        <div class="text-base text-slate-900 dark:text-[#ffffffb3]">
          {{ t('aboutUsLeadingIndustryDescription') }}

        </div>
      </div>

      <div class="grid grid-cols-1 md:gap-6 mb-10  relative ">
        <CardCustomMission />
      </div>

      <!-- Grid Value Start-->
      <div class="bg-[#111315] w-full h-auto items-center justify-center mt-4 mb-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 md:space-y-0 space-y-4">
          <CardCustomValue :title="$t('aboutUsClientValues-1')" :paragraph="$t('aboutUsClientValuesDescription-1')"
            :img="innovation" />
          <CardCustomValue :title="$t('aboutUsClientValues-2')" :paragraph="$t('aboutUsClientValuesDescription-2')"
            :img="phone" />
          <CardCustomValue :title="$t('aboutUsClientValues-3')" :paragraph="$t('aboutUsClientValuesDescription-3')"
            :img="trend" />
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4">
          <CardCustomValue :title="$t('aboutUsClientValues-4')" :paragraph="$t('aboutUsClientValuesDescription-4')"
            :img="people" />
          <CardCustomValue :title="$t('aboutUsClientValues-5')" :paragraph="$t('aboutUsClientValuesDescription-5')"
            :img="drone" />
        </div>
      </div>
      <!-- Grid Value End -->
      <div class="grid grid-cols-1 md:gap-6 mb-10 relative ">
        <CardCustomVision />
      </div>
      <div class="mb-20">
        <div class="text-slate-900 dark:text-white text-center text-3xl mb-5">
          <span>{{ $t('indexLetsWorkTogether') }}</span>
        </div>
        <div class="text-white text-center text-3xl">
          <Button :text="$t('indexContactUs')" btnClass="btn-primary"
            style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" @click="btnContackUs" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import img from "@/assets/images/logo/impulse.svg"
import client from "@/assets/images/svgs/client.svg"
import projects from "@/assets/images/svgs/projects.svg"
import experience from "@/assets/images/svgs/experience.svg"
import chan from "@/assets/images/svgs/chan.svg"
import chan1 from "@/assets/images/svgs/brian.jpg"
import chan2 from "@/assets/images/svgs/rob.jpg"
import chan3 from "@/assets/images/svgs/chan3.svg"
import team from "@/assets/images/svgs/team.svg"
import innovation from "@/assets/images/svgs/innovation.svg"
import phone from "@/assets/images/svgs/phone.svg"
import trend from "@/assets/images/svgs/trend.svg"
import people from "@/assets/images/svgs/people.svg"
import drone from "@/assets/images/svgs/drone.svg"
import CardCustom from "@/components/CardCustom.vue"
import SwipperCardTeam from "@/components/SwipperCardTeam.vue"
import Button from "@/components/Button";
import CardCustomMission from "@/components/CardCustomMission.vue"
import CardCustomVision from "@/components/CardCustomVision.vue"
import CardCustomTeam from "@/components/CardCustomTeam.vue"
import CardCustomValue from "@/components/CardCustomValue.vue"
import Flipcard2 from "@/components/FlipCard2.vue"
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
export default {
  components: {
    CardCustom,
    Button,
    CardCustomMission,
    CardCustomVision,
    CardCustomTeam,
    Flipcard2,
    CardCustomValue,
    SwipperCardTeam
  },
  data() {
    return { client, projects, team, experience, img, chan, chan1, chan2, chan3, innovation, phone, trend, people, drone }
  },

  mounted() {

    this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))





  },
  setup() {
    const { t } = useI18n()
    const Flipcard2s = ref([
      {
        title: 'Brian Molina',
        subtitle: 'Impulse Founder and CEO',
        description: 'Software Engineer and Technologist with 15 years of telecom and technology experience.  Developed apps with millions of downloads, successfully exited two companies.  Top sales executive at multiple CSP’s.',
        img: chan1,
        background: 'none'
      },
      {
        title: 'Rob McNabb',
        subtitle: 'Co-founder and NED',
        description: 'Currently - Google Telco Industry Business Principal working with telco’s on AI and Cloud transformation A former CEO of a startup to  $50M/ARR CSP, McNabb brings a wealth of experience knowing exactly what our target market needs to succeed',
        img: chan2,
        background: 'none'
      },
    ])

    return {
      Flipcard2s, t
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