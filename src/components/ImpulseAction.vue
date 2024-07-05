<template>
    <section class="l-section" data-header-color="black" data-header-bg="white">
        <div class="flex justify-center px-5 md:px-40 py-10 md:py-60">
            <article class="bg-[#F6F6F6] flex rounded-xl shadow-2xl">
                <img src="../assets/images/action.svg" class="hidden md:block w-1/2" alt="">
                <div class="flex flex-col py-4 px-10">
                    <span class="text-2xl md:text-5xl font-bold text-[#000] mt-10 md:mt-20 md:w-2/3">Ready to see Impulse in Action?</span>

                    <form @submit.prevent="" class="mt-4 md:mt-10">
                        <input type="text" id="scales" name="scales" placeholder="Your Email"
                            class="rounded-xl p-2 text-lg border text-[#858C94] border-[#8791A1] w-full md:w-[420px]">
                        <div class="flex gap-x-1 mt-6">
                            <input type="checkbox"/>
                            <label for="scales" class="md:w-2/3 text-[#000000]">I agree to the <router-link to=""
                                    class="text-[#0079D8] hover:underline">privacy policy</router-link> including to
                                Impulse using my contact
                                details to contact me for marketing purposes.</label>
                        </div>
                        <div class="my-10">
                            <router-link class="px-4 md:px-6 py-2 md:py-3 text-base md:text-xl font-bold inline-block skew-x-0 text-center 
                        cursor-pointer rounded-full hover:before:rounded-full before:absolute before:-inset-0.5 before:origin-right bg-[#7F39E9]
        before:scale-x-0 before:bg-[#662ebb] text-white hover:before:origin-left hover:before:scale-x-100
        ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 
        motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 
        motion-safe:hover:before:ease-out motion-safe:before:rounded-full" to="">
                                <span class="inline-block skew-x-0">
                                    REQUEST A
                                    DEMO </span></router-link>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    </section>
</template>