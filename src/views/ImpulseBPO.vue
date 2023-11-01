<template>
  <div class="!remove-padding-all">
    <!-- Start -->
    <div class="relative w-full min-h-screen">
      <div class="absolute inset-0">
        <div class="flex min-h-full flex-col pl-8 items-start justify-center absolute w-full space-y-5 ">
          <h1 class="md:text-6xl text-3xl font-bold dark:!text-white text-white animate-pulse">Impulse BPO Services</h1>
          <p class="text-base dark:!text-white text-white">Get ready to discover why our IMPULSE BPO services are the
            perfect choice for your business.</p>
        </div>

        <img src="@/assets/images/bpostart.webp" alt="Avatar" class="object-cover w-full h-full opacity-30" />

      </div>
    </div>
    <!-- End Start -->
    <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">
      <div class="w-full min-h-screen p-5 flex  items-center justify-center" 
    ref="target"
    >
    <!-- <div class="w-full min-h-screen p-5 flex  items-center justify-center"    v-motion-slide-visible-top> -->
      
       <iframe width="560" height="315" src="https://www.youtube.com/embed/_vhQHjz8YVA?si=D5N1EJbkCoRfvulr&autoplay=1&controls=0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
     </div>
     <div class="w-full min-h-screen p-5 flex  items-center justify-center">      
      <ul class="space-y-4">
        <h1 class="text-2xl">Impulse BPO Services</h1>
            <li v-for="(item, i) in bpoActionsExp" :key="i" class="hover:scale-105">

              <h3 class="text-xl font-semibold mb-2 flex flex-row items-center">
                <span><img :src="item.img" class="w-11 h-11 object-cover mr-2" alt=""></span> {{ item.title }}
              </h3>
              <p class="text-lg">{{ item.description }}</p>


            </li>
          </ul>
     </div>
    </div>
    


    <!-- Section Two Start -->
    <div class="bg-[#111315] w-full min-h-screen p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">
        <div class="flex-1 flex min-h-full flex-col items-start justify-center w-full  mb-5 ">
          <ul class="space-y-4">
            <li v-for="(item, i) in salesTeamsExp" :key="i" class="hover:scale-105">

              <h3 class="text-xl font-semibold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-lg">{{ item.description }}</p>


            </li>
          </ul>

        </div>

        <div class="flex-0  flex min-h-full flex-col items-center justify-center  w-full">
          <img src="@/assets/images/svgs/illustration.svg" alt="Illustration"
            class="object-cover w-full h-full justify-center hover:scale-105" layout="fill" />
        </div>
      </div>

    </div>
    <!-- Section Two End  -->

    <!-- Section Three Start -->
    <!-- <div class="w-full min-h-screen p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">

        <div class="flex-0  flex min-h-full flex-col items-center justify-center  w-full p-8">
          <img src="@/assets/images/pngwing4.png" alt="Illustration"
            class="object-cover w-full h-full justify-center p-8 hover:scale-105" layout="fill" />
        </div>
        <div class="flex-1 flex min-h-full flex-col items-start justify-center w-full  mb-5 ">
          <ul class="space-y-4">
            <li v-for="(item, i) in salesLeadsExp" :key="i" class="hover:scale-105">

              <h3 class="text-xl font-semibold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-lg">{{ item.description }}</p>


            </li>
          </ul>

        </div>

      </div>

    </div> -->
    <!-- Section Three End  -->

    <!-- Section Four Start -->
    <div class="bg-[#111315] w-full min-h-screen p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 md:m-5 space-y-4 space-x-4 lg:m-16">

        <div class="flex-0  flex min-h-full flex-col items-center justify-center  w-full p-8 space-y-5">

          <h1 class="text-2xl">So, why wait?</h1>
          <p>Choose our IMPULSE BPO Services and unlock the full potential of your business. We're excited to embark on
            this journey with you and take your success to extraordinary heights!</p>

        </div>
        <div class="flex-1 flex min-h-full flex-col items-start justify-center w-full  mb-5 ">
          <ul class="space-y-4">
            <li v-for="(item, i) in salesActionsExp" :key="i" class="hover:scale-105">

              <h3 class="text-xl font-semibold mb-2 flex flex-row items-center">
                <span><img :src="item.img" class="w-11 h-11 object-cover mr-2" alt=""></span> {{ item.title }}
              </h3>
              <p class="text-lg">{{ item.description }}</p>


            </li>
          </ul>

        </div>

      </div>

    </div>
    <!-- Section Four End  -->

    <!-- Section Five Start -->
    <div class="w-full min-h-screen p-5">

      <div class="flex flex-col lg:m-16 space-y-6">
        <div class="flex-1  flex min-h-full flex-col items-center justify-center  w-full p-4 ">

          <h3 class="text-2xl hover:scale-105">We offer additional features that make us the ultimate BPO service provider</h3>

        </div>
        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <li v-for="(item, i) in bpoService" :key="i" class="hover:scale-105">

          <h3 class="text-xl font-semibold mb-2 flex flex-row items-center">
            <span><img :src="item.img" class="w-11 h-11 object-cover mr-2" alt=""></span> {{ item.title }}
          </h3>
          <p class="text-lg">{{ item.description }}</p>


        </li>
      </ul>

      </div>
  

    </div>
    <!-- Section Five End  -->
    <div class="bg-[#181818] flex justify-center md:gap-4 md:p-8   "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
    <ContactForm :refer="'Impulse BPO'" />
    </card>
</div>
  </div>
</template>
<script>
import Card from "@/components/Card/index.vue"  
import ContactForm from "@/components/ContactForm.vue"  
import op1 from "@/assets/images/1op.png"
import op2 from "@/assets/images/2op.png"
import op3 from "@/assets/images/3op.png"
import bpo1 from "@/assets/images/bpo1.png"
import bpo2 from "@/assets/images/bpo2.png"
import bpo3 from "@/assets/images/bpo3.png"
import bpo4 from "@/assets/images/bpo4.png"
import qo1 from "@/assets/images/q01.png"
import qo2 from "@/assets/images/q02.png"
import qo3 from "@/assets/images/q03.png"
import qo4 from "@/assets/images/q04.png"
import qo5 from "@/assets/images/q05.png" 
import { ref } from "vue"
import { useMotion } from "@vueuse/motion"

export default {
  components:{Card, ContactForm},
   
  data: function () {
    return {
      salesTeamsExp: [
        {
          title: "Experience with Sales Teams",
          description: "Our proven expertise helps us achieve conversion metrics above industry standards."
        },
        {
          title: "Effective Communication",
          description: "With near-native or native English skills, we ensure seamless and efficient communication  with your clients."
        }
        // ,
        // {
        //   title: "Quality Over Quantity",
        //   description: "We prioritize delivering outstanding work that exceeds expectations."
        // }
      ],
      salesLeadsExp: [
        // {
        //   title: "Pushing Lead Generation",
        //   description: "We excel at pushing lead generation departments to new heights."
        // },
        // {
        //   title: "Multiple Internet Connections",
        //   description: "We provide redundancy and stable internet connectivity, avoiding  interruptions to our services."
        // },
        // {
        //   title: "State-of-the-Art Location",
        //   description: "Our San Pedro, HN facility boasts cutting-edge technology, ensuring uninterrupted connectivity and efficient operations."
        // }
      ],
      salesActionsExp: [
        {

          img: op1,
          title: "Cost Efficiency",
          description: "Save on overhead costs with our cost-effective BPO Services, accessing specialized expertise and focusing on core business functions."
        },
        {

          img: op2,
          title: "Proven Track Record",
          description: "We have achieved notable success stories, making a positive impact on previous clients businesses."
        },
        {

          img: op3,
          title: "Industry Knowledge",
          description: "Count on our expertise to provide valuable insights and strategic support specific to your industry or niche."
        }
      ],
      bpoActionsExp: [
        {

          img: bpo1,
          title: "Layer 1 Support",
        },
        {

          img: bpo2,
          title: "Layer 2 Support",
        },
        {
          img: bpo3,
          title: "Sales (Outbound & Inbound)",
        },
        {
        img: bpo4,
        title: "Collections",
        } 
      ],
      bpoService: [
        {

          img: qo1,
          title: "Dedicated Account Managers",
          description: "Your dedicated account manager ensures personalized  attention, smooth communication, and addresses concerns  throughout our partnership."
        },
        {

          img: qo2,
          title: "Customized Solutions",
          description: "We tailor our services to meet  your unique needs and goals, ensuring a perfect fit for your business."
        },
        {

          img: qo3,
          title: "Scalability",
          description: " We handle fluctuating workloads and accommodate your growth, providing the scalability your business requires."
        },
        {

          img: qo4,
          title: "Data Security",
          description: "We prioritize data security and confidentiality, adhering to the highest standards and implementing  robust measures  to protect your information."
        },
        {

          img: qo5,
          title: "Quality Assurance",
          description: "Our rigorous quality control processes  and ongoing training programs guarantee high-quality results and continuous improvement."
        }

      ]
    }
  },  
  setup(){ 

const initialAnimation = {
  opacity: 0,
  transform: 'translateY(100px)',
  scale: 0.5,
};

const visibleAnimation = {
  opacity: 1,
  transform: 'translateY(0)',
  scale: 1,
};
const target=ref()

useMotion(target, {
  initial: initialAnimation,
  visible: visibleAnimation,
  duration: 500,
  timing: 'ease-in-out',
});
    return {target}
  }
}
</script> 
<style>
iframe {
   width: 80vw;
  height: 80vh;
   
}
</style>