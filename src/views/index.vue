<template>
  <div>

    <!-- Grid Cards Start-->
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 md:space-y-0 space-y-4 mb-6">
      
  <CardCustom 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="img"
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="img"
   
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="img"
   
   classBackground="cardDisplay"
   /> 
   
  <CardCustom 
  title="Business Inteligence and Analytics"
   paragraph="Cutting-edge business intelligence software, tailor-made for the telecommunication industry, with a user-friendly interface that makes data analysis a breeze"
   :img="img"
   
   classBackground="cardDisplay"
   /> 

    </div>
    <!-- Grid Cards End -->

    <div class="grid   grid-cols-1  gap-6  ">
 <SwipperCard></SwipperCard>
      </div>




  </div>
</template>
<script>
import img from "@/assets/images/logo/logo-white.svg"

import CardCustom from "@/components/CardCustom.vue"
import SwipperCard from "@/components/SwipperCard.vue"
export default {
  components:{CardCustom,SwipperCard},
  data(){
    return {img}
  }
};
</script>
<style>
.cardDisplay{
   
   background: linear-gradient(-37.79deg, #000 -1.06%, #111315 100.71%);
   background-color: #111315;
   transition: all 400ms ease-in;
 }
 .cardDisplay:hover{
   background: linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%); 
 }
</style>
