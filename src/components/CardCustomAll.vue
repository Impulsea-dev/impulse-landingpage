<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div v-for="(item, i) in bpoService" :key="i">
      <Card :className="`bg-[${item.color}] overflow-hidden relative z-10`">
        <div class="flex flex-col justify-start items-start relative gap-4">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">{{ item.title }}</p>
          <p class="flex-grow-0 flex-shrink-0 md:text-base text-sm font-medium text-left text-white/70">
            {{ item.description }}
          </p>
        </div>
        <div class="flex justify-start items-start gap-4 mt-2">
          <Button
            :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-2 rounded-lg dark:bg-white border dark:border-white'"
            @click="sendTo(`${item.url}`)">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#141414]">
              Learn more
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
export default {
  name: 'CardCustomBPO',
  components: { Card, Button },
  methods: {
    sendTo(link) {
      window.open(link, '_blank', 'noreferrer');
    }
  },
  data: function () {
    return {
      bpoService: [
        {

          img: qo1,
          color: "#3C007C",
          title: "Impulse Leads",
          url: 'http://198.199.89.79:83/',
          description: "Empower your B2B endeavors with the crucial data and software to effortlessly connect and seal deals with your most valuable buyers, all conveniently integrated in one piace."
        },
        {

          img: qo1,
          color: "#103045",
          title: "Telemetrics",
          url: '/telemetrics',
          description: "Boost residential and corporate upsell and cross-sale opportunities by up to 200% with the help of AI and ML."
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
          title: "Impulse Bot",
          url: '/impulsebot',
          description: "Improve Customer Satisfaction, Boost Sales, and Minimize Churn with Impulse Bot—an innovative AI and ML-powered chatbot designed to assist your customers round the clock."
        },
        {

          img: qo2,
          color: "#3C007C",
          title: "Website Development",
          url: '/website-design',
          description: "We create websites and develop mobile applications to support the growth of telecoms and communication service providers."
        },
        {

          img: qo1,
          color: "#103045",
          title: "Impulse Pay",
          url: '/impulse-pay',
          description: "Streamline your billing processes, enhance customer satisfaction, and simplify payments with Impulse Pays user-friendly portal."
        },
        {
          img: qo1,
          color: "#282832",
          title: "BPO Services",
          url: '/bpo',
          description: "Our BPO services include sales, support, and outbound services to streamline your business operations and enhance customer satisfaction."
        }
      ]
    }
  },
};
</script>
