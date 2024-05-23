<template>
    <div class="!remove-padding-all">
        <div class="relative w-full min-h-[400px] md:min-h-[600px] 2xl:min-h-[700px] bg-[#181818]">
            <div class="absolute inset-0  mt-10">
                <div class="hidden md:flex">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="flex min-h-full flex-col pl-32 items-start justify-center w-full gap-4">
                        <div class="text-3xl md:text-6xl font-bold text-white font-Monda">Impulse Leads</div>
                        <p class="text-base text-white font-Monda">{{ $t('leadsInfoMainSubtitle') }}</p>
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
                        <p class="text-sm text-white font-Monda p-4">{{ $t('leadsInfoMainSubtitle') }}</p>
                    </div>
                </div>
            </div>
        </div>
  
    <!-- Section Two Start -->
    <div class="bg-[#000000] w-full  p-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 m-5 space-y-4 space-x-4 lg:m-16">
        <div class="flex-0  flex min-h-full flex-col items-start justify-start  w-full p-8 space-y-5">
            <div class="text-3xl text-white font-bold font-Monda">{{$t('leadsInfo-1.title-1')}}</div>
            <p class="text-base text-white font-Monda">{{ $t('leadsInfo-1.paragraph-1') }}
            </p>
            <div class="text-3xl text-white font-bold font-Monda">{{ $t('leadsInfo-1.title-2') }}</div>
            <p class="text-base text-white font-Monda">{{ $t('leadsInfo-1.paragraph-2') }}
            </p>
        </div>
        <div class="flex-1 flex min-h-full flex-col items-center justify-center w-full  mb-5">
            <h1 class="!text-white text-2xl md:text-5xl" >{{ $t("leadsInfo-1.mainTitle") }}</h1>
        </div>
      </div>

    </div>
    <!-- Section Two End  -->
  <!-- Section Three Start -->
  
  <div class="bg-[#181818] w-full min-h-screen p-5">

<div class="flex flex-col lg:m-16 space-y-6">
  <div class="flex-1  flex min-h-full flex-col items-center justify-center  w-full p-4 ">

    <h3 class="hover:scale-105">{{ $t('leadsInfo-2.title') }}</h3>
    <p>{{ $t('leadsInfo-2.paragraph') }}</p>

  </div>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <li v-for="(item, i) in contentsCard" :key="i" class="hover:scale-105">
<Card :className="'bg-[#FFF] '"  >
    <div class="flex flex-col justify-center items-center">
        <h3 class="text-xl font-semibold mb-2 !text-black-600 text-center">
      {{ $t(item.title) }}
    </h3>
    <p class="text-lg text-black-500 mb-4">{{ $t(item.description) }}</p>

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
         
            <h2 class="!text-white md:text-5xl text-2xl">{{  $t('leadsInfo-3.title')  }}</h2>
          <p>{{ $t('leadsInfo-3.paragraph') }}</p>

        </div>

      </div>

    </div>

    <!-- Section Four End -->
    <div class="bg-[#181818] flex justify-center gap-4 md:p-8   "> 

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
                    title:"leadsInfoContent-1.title",
                    description:"leadsInfoContent-1.description",
                    img:mac ,
                },
                {
                  title:"leadsInfoContent-2.title",
                    description:"leadsInfoContent-2.description",
                    img: board,
                }

            ]
        }
    },

    
}
</script>