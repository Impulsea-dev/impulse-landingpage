<template>
  <div class="grid grid-cols-1 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative -!pb-[2px] ">
    <CardCustomProduct :class="' overflow-hidden xl:h-[327px] md:h-[50vh]'"/>
    <!-- Grid Value Start-->
      <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 -mt-6 border-t-2">
        <CardCustomDev
          title="Customized Solutions"
          paragraph="Our team works closely with each client to understand their unique needs and business objectives. We then develop customized solutions that are tailored to their specific requirements."
          :img="solutions"
         /> 
         <CardCustomDev
          title="Expertise"
          paragraph="Our team consists of experienced professionals who have a deep understanding of the telecommunication industry. They are equipped with the knowledge and skills to deliver cuttingedge solutions that meet our clients' business needs"
          :img="expertise"
         /> 
         <CardCustomDev
          title="Quality Assurance"
          paragraph="We follow a rigorous quality assurance process to ensure that our solutions are of the highest quality. Our team conducts thorough testing and quality checks to ensure that our clients receive solutions that are reliable, secure, and user-friendly."
          :img="success"
         /> 
      </div>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 border-t-2 border-white">
        <CardCustomDev
          title="Timely Delivery"
          paragraph="We understand the importance of meeting deadlines and delivering solutions on time. Our team works diligently to ensure that our solutions are delivered within the agreed-upon timeframe."
          :img="clock"
         /> 
         <CardCustomDev
          title="Continuous Support"
          paragraph="Our commitment to our clients does not end with the delivery of our solutions. We offer continuous support and maintenance services to ensure that our clients' applications are running smoothly and efficiently"
          :img="data"
         /> 
      </div>
    <!-- Grid Value End -->
    <div class="bg-[#181818] flex justify-center gap-4 p-8   "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 md:p-8'">
    <ContactForm :refer="'Product&Development'" />
    </card>
</div>
  </div>
</template>
  <script>  
  import CardCustomProduct from "@/components/CardCustomProduct.vue"
  import CardCustomDev from "@/components/CardCustomDev.vue"
  import solutions from "@/assets/images/svgs/solutions.svg"
  import expertise from "@/assets/images/svgs/expertise.svg"
  import success from "@/assets/images/svgs/success.svg"
  import clock from "@/assets/images/svgs/clock.svg"
  import data from "@/assets/images/svgs/data.svg"
  import Card from "@/components/Card/index.vue"  
import ContactForm from "@/components/ContactForm.vue" 
  export default {
    components:{
      CardCustomProduct,
      CardCustomDev,
      Card,
      ContactForm
      
    },
    data(){
      return {solutions,expertise,success,clock,data}
    }
  };
  </script>
  <style>
 
  </style>
  