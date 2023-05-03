<template>
  <div class="grid grid-cols-1 md:w-[99vw] w-[100vw] md:-left-[1.7rem] -left-[1.1rem] relative ">
    <CardCustomProduct :class="'h-[40vh] overflow-hidden absolute'"/>
    <div class="grid md:grid-cols-3 grid-cols-1 relative">
      <CardCustomDev
      index="1"
        :img="solutions"
        title="Customized Solutions"
        paragraph="Our team works closely with each client to understand their unique needs and business objectives. We then develop customized solutions that are tailored to their specific requirements."
       /> 
  
       <CardCustomDev
       index="2"
        :img="expertise"
        title="Expertise"
        paragraph="Our team consists of experienced professionals who have a deep understanding of the telecommunication industry. They are equipped with the knowledge and skills to deliver cuttingedge solutions that meet our clients' business needs"
        /> 
  
       <CardCustomDev
       index="3"
        title="Quality Assurance"
        paragraph="We follow a rigorous quality assurance process to ensure that our solutions are of the highest quality. Our team conducts thorough testing and quality checks to ensure that our clients receive solutions that are reliable, secure, and user-friendly."
        :img="success"
       /> 
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 -top-6 relative  ">

      <CardCustomDev
      index="4"
        title="Timely Delivery"
        paragraph="We understand the importance of meeting deadlines and delivering solutions on time. Our team works diligently to ensure that our solutions are delivered within the agreed-upon timeframe."
        :img="clock"
       /> 
  
       <CardCustomDev
       index="5"
        title="Continuous Support"
        paragraph="Our commitment to our clients does not end with the delivery of our solutions. We offer continuous support and maintenance services to ensure that our clients' applications are running smoothly and efficiently"
        :img="data"
       />       
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
  export default {
    components:{
      CardCustomProduct,
      CardCustomDev,
      
    },
    data(){
      return {solutions,expertise,success,clock,data}
    }
  };
  </script>
  <style>
  
  </style>
  