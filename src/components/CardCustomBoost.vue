<template>
<div  >
  <Card :className="'dark:!bg-[#282832] overflow-hidden relative'">
   <div class="flex-row absolute">
    <div class="flex flex-col justify-start items-start relative gap-4">
  <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">Impulse Boost</p>
  <p class="flex-grow-0 flex-shrink-0 md:text-base text-sm font-medium text-left text-white/70">
    Boost sales and customer retention with our SaaS solution. Upsell, cross-sell, sales opportunities, AI alerts, and real-time insights empower sales agents to close deals faster and more effectively
  </p>
</div>
<div class="flex justify-start items-start gap-4 mt-2">
  <Button
    :className="'flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-2 rounded-lg dark:bg-white border dark:border-white'"
  @click="sendTo('/boost')"
    >
    <p class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#141414]">
      Learn more
    </p>
  </Button>
</div>
   </div>
   <svg width="164" height="114" viewBox="0 0 164 114" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-80 h-56 ml-auto relative -right-12 place-self-en -bottom-20">
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 29.6068 42.906)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 14.7328 33.6419)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 30.0668 25.6455)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 44.3676 17.5105)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 29.4945 8.24931)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 44.8275 0.25)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 59.3647 42.906)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 44.4897 33.6419)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 59.8246 25.6455)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 73.8891 17.5105)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 59.0141 8.24931)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 74.35 0.25)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 29.8432 93.9939)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 14.9672 84.7347)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 30.3022 76.7324)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 15.0541 68.6003)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 0.17813 59.3392)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 15.5141 51.3398)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 44.602 68.5993)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 29.7299 59.3392)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 45.0629 51.3398)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 59.599 93.9939)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 44.7231 84.7347)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 60.059 76.7324)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 74.1254 68.5993)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 59.2484 59.3392)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 74.5844 51.3398)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 88.9965 60.4255)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 89.4574 43.165)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 103.525 35.0319)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 88.6479 25.7679)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 103.986 17.7705)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 103.788 86.0144)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 88.9125 76.7522)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 104.248 68.752)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 118.547 60.6169)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 103.673 51.3587)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 119.008 43.3555)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 133.542 86.0144)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 118.669 76.7522)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 134.002 68.752)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 148.069 60.6169)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 133.194 51.3587)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 148.531 43.3555)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 89.2318 111.708)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 74.3598 102.449)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 89.6918 94.4492)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 118.783 111.708)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 103.909 102.448)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 119.243 94.4492)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 148.304 111.708)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 133.428 102.448)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 148.765 94.4492)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.25" width="16.4139" height="16.4139" transform="matrix(0.866025 -0.5 2.20305e-08 1 163.178 103.534)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 163.638 86.2744)" stroke="white" stroke-opacity="0.2"/>
    <rect x="0.433013" y="0.75" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -2.20305e-08 1 162.829 68.8792)" stroke="white" stroke-opacity="0.2"/>
    <rect x="-2.98023e-08" y="0.5" width="16.4139" height="16.4139" transform="matrix(0.866025 0.5 -0.866025 0.5 178.164 60.8789)" stroke="white" stroke-opacity="0.2"/>
    </svg>

  </Card>
</div>
</template>
<script>
import Card from "@/components/Card"
import Button from "@/components/Button"
export default {
  name: 'CardCustomBoost',
  components:{Card,Button},
  props: { 
    title: {
      type: String,
      default: '',
    },
    
    paragraph: {
      type: String,
      default: '',
    }, 
    img: {
      type: String,
      default: '',
    },
    classBackground: {
      type: String,
      default: '',
    },
  },
   methods:{
    sendTo(link){
      this.$router.push({path:link})
    }
  }
};
</script>
