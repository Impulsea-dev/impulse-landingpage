<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div v-for="(item, i) in bpoService" :key="i">
      <Card :className="`bg-[${item.color}] overflow-hidden relative z-10`">
        <div class="flex flex-col justify-start items-start relative gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">{{ $t(item.title) }}</p>
          <p class="flex-grow-0 flex-shrink-0 md:text-base text-sm font-medium text-left text-white/70">
            {{ $t(item.description) }}
          </p>
        </div>
        <div class="flex justify-start items-start gap-4 mt-2">
          <Button
            :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-2 rounded-lg dark:bg-white border dark:border-white'"
            @click="sendTo(`${item.url}`)">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-white">
              {{ $t('indexOurSolutionsButton') }}
            </p>
          </Button>
        </div>
        <div className="absolute bottom-0 -right-20 -z-10">
          <img :src="item.img" class="w-64" alt="" />
        </div>

      </Card>
    </div>

  </div>
</template>
<script>
import Card from "@/components/Card"
import Button from "@/components/Button"
import qo1 from "@/assets/images/leads.png"
import qo2 from "@/assets/images/product.png"
import qo3 from "@/assets/images/boost.png"
import { useI18n } from 'vue-i18n'
export default {
  name: 'CardCustomBPO',
  components: { Card, Button },
  methods: {
    sendTo(link) {
      window.open(link, '_blank', 'noreferrer');
    }
  }, 
  setup() {
        const { t } = useI18n()
        const bpoService= [
        {

          img: qo1,
          color: "#3C007C",
          title: "indexOurSolutionsTitle-1",
          url: '/impulse-lead',
          description: "indexOurSolutionsDescription-1"
        },
        {

          img: qo1,
          color: "#103045",
          title: "indexOurSolutionsTitle-2",
          url: '/telemetrics',
          description: "indexOurSolutionsDescription-2"
        },
        // {

        //   img: qo3,
        //   color:"#282832",
        //   title: "Impulse Boost",
        //   url:'/boost',
        //   description: "Boost sales and customer retention with our SaaS solution. Upsell, cross-sell, sales opportunities, AI alerts, and real-time insights empower sales agents to close deals faster and more effectively."
        // },
        {
          img: qo3,
          color: "#282832",
          title: "indexOurSolutionsTitle-3",
          url: '/impulsebot',
          description: "indexOurSolutionsDescription-3"
        },
        {

          img: qo2,
          color: "#3C007C",
          title: "indexOurSolutionsTitle-4",
          url: '/website-design',
          description: "indexOurSolutionsDescription-4"
        },
        {

          img: qo1,
          color: "#103045",
          title: "indexOurSolutionsTitle-5",
          url: '/impulse-pay',
          description: "indexOurSolutionsDescription-5"
        },
        {
          img: qo1,
          color: "#282832",
          title: "indexOurSolutionsTitle-6",
          url: '/bpo',
          description: "indexOurSolutionsDescription-6"
        }
      ]
        return { t,bpoService }
    }
};
</script>
