<template>
    <div class="!remove-padding-all">
        <div class="relative w-full min-h-[400px] md:min-h-[600px] 2xl:min-h-[700px] bg-[#181818]">
            <div class="absolute inset-0  mt-10">
                <div class="hidden md:flex">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="flex min-h-full flex-col pl-32 items-start justify-center w-full gap-4">
                        <div class="text-3xl md:text-6xl font-bold text-white font-Monda">Impulse Leads</div>
                        <p class="text-base text-white font-Monda">Are you struggling to find and close leads? Our platform can help! With over 265M contacts, you will be able to reach your target audience and help you grow your business.</p>
                    </div>

                    <div class="hidden md:flex justify-center items-center mt-16">
                        <img src="@/assets/images/leadBoy.png" alt="Avatar"
                            class="object-contain w-[450px] h-[450px] 2xl:w-[521px] 2xl:h-[521px] animate-pulse" />
                    </div>
                </div>
                </div>

                <div class="flex md:hidden">
                    <div class="flex flex-col text-center gap-2 mt-10">
                        <div class="text-2xl font-bold text-white font-Monda">Impulse Leads</div>
                        <p class="text-sm text-white font-Monda">Are you struggling to find and close leads? Our platform can help! With over 265M contacts, you will be able to reach your target audience and help you grow your business.</p>
                    </div>
                </div>
            </div>
        </div>
  
    <!-- Section Two Start -->
    <div class="bg-[#000000] w-full min-h-screen p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">
        <div class="flex-0  flex min-h-full flex-col items-start justify-start  w-full p-8 space-y-5">
            <div class="text-3xl text-white font-bold font-Monda">Expand Your Market</div>
            <p class="text-base text-white font-Monda">Content creation and communication are a big part of lead generation efforts.
            </p>
            <div class="text-3xl text-white font-bold font-Monda">Boost Your Revenue</div>
            <p class="text-base text-white font-Monda">When done correctly, lead generation can maximize your brand’s ability for reaching target prospects.
            </p>
        </div>
        <div class="flex-1 flex min-h-full flex-col items-center justify-center w-full  mb-5">
            <h1 class="!text-white text-2xl md:text-5xl" >Reasons you should focus on lead generation</h1>
        </div>
      </div>

    </div>
    <!-- Section Two End  -->
  <!-- Section Three Start -->
  
  <div class="bg-[#181818] w-full min-h-screen p-5">

<div class="flex flex-col lg:m-16 space-y-6">
  <div class="flex-1  flex min-h-full flex-col items-center justify-center  w-full p-4 ">

    <h3 class="hover:scale-105">Contents</h3>
    <p>The only sales platform with everything you need to find, email, call and close your ideal customers, all in one place.</p>

  </div>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <li v-for="(item, i) in contentsCard" :key="i" class="hover:scale-105">
<Card   >
    <div class="flex flex-col justify-center items-center">
        <h3 class="text-xl font-semibold mb-2 !text-black-600 text-center">
      {{ item.title }}
    </h3>
    <p class="text-lg text-black-500 mb-4">{{ item.description }}</p>

   <div class="flex flex-col items-center justify-center">
    <img :src="item.img" class="w-auto h-auto object-cover mr-2" alt="">
   </div>

    </div>

 
</Card>


  </li>
</ul>

</div>


</div>
<!-- Section Three End  -->

<!-- Section Four Start -->
<div class="w-full min-h-screen p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">

        <div class="flex-0  flex min-h-full flex-col items-center justify-center  w-full p-8">
          <img src="@/assets/images/amico.svg" alt="Illustration"
            class="object-cover w-full h-full justify-center p-8 hover:scale-105" layout="fill" />
        </div>
        <div class="flex-1 flex min-h-full flex-col items-start justify-center w-full  mb-5  space-y-4">
         
            <h2 class="!text-white">Find net new leads and enrich existing contacts</h2>
          <p>Enrich and update your database with fresh, accurate and compliant people and account intelligence.</p>

        </div>

      </div>

    </div>

    <!-- Section Four End -->
    <div class="bg-[#181818] flex justify-center gap-4 p-8   "> 

<card :className="'dark:!bg-[#000000] mt-6 md:col-span-6 col-span-1 '">
    <ContactForm :refer="'Impulse Leads'" />
    </card>
</div>
</div>
</template>
<script>
import Card from "@/components/Card/index.vue"  
import ContactForm from "@/components/ContactForm.vue"  
import mac from "@/assets/images/MacbookPro.png"
import board from "@/assets/images/BoardsNotifications.png"
export default {
  components:{Card, ContactForm},
    data:function(){
        return {
            contentsCard:[
                {
                    title:"Ideal leads at your fingertips",
                    description:"Find and target your ideal buyers with the world's largest, most accurate B2B database.",
                    img:mac ,
                },
                {
                    title:"Find the right leads for you",
                    description:"Use +50 search filters to uncover contacts and companies that match your buyer profile.",
                    img: board,
                }

            ]
        }
    },

    
}
</script>