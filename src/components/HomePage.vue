<template>
    <div>
        <section class="l-section h-screen w-screen text-center relative overflow-hidden" data-header-color="white">
            <div class="flex flex-col h-full relative z-30">
                <div class="pt-40 pl-10 w-[700px]">
                    <h2 class="text-white text-6xl font-bold pb-4 text-start">THE REVENUE DRIVEN AI CLOUD FOR
                        THE
                        TELECOMMUNICATION INDUSTRY</h2>
                    <p class="text-white text-2xl text-start pb-4">
                        Drive revenue growth, Improve team productivity and decision making with our next generation
                        solutions.
                    </p>
                    <div class="flex">
                        <router-link class="px-6 py-3 rounded-full text-white bg-[#7F39E9] text-xl hover:bg-[#662ebb]
                        transition-colors duration-300 font-bold" to="">BOOK A
                            DEMO</router-link>
                    </div>
                </div>
                <div class="flex flex-col flex-grow justify-end pb-20">
                    <div>
                        <h2 class="text-2xl text-white">Our Integration Partners</h2>
                        <div class="flex flex-row justify-center gap-x-2">
                            <img src="../assets/images/partners/NOKIA.svg" alt="">
                            <img src="../assets/images/partners/VMWARE.svg" alt="">
                            <img src="../assets/images/partners/Adtran.svg" alt="">
                            <img src="../assets/images/partners/Allied Telesis.svg" alt="">
                            <img src="../assets/images/partners/cisco.svg" alt="">
                            <img src="../assets/images/partners/DZS.svg" alt="">
                        </div>
                        <!-- <a class="border-2 border-white rounded font-medium px-12 py-2 text-white hover:bg-white hover:text-black
                    transition-colors backdrop:blur-3xl" href="#">
                            Prueba de conduccion
                        </a> -->
                    </div>
                </div>
            </div>
            <slot name="videol"></slot>

        </section>
    </div>
</template>