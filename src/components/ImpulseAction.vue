<template>
    <section class="l-section" data-header-color="black" data-header-bg="white">
        <div class="flex justify-center px-5 xl:px-40 py-10 md:py-40">
            <article class="bg-[#F6F6F6] flex flex-col md:flex-row rounded-xl shadow-2xl">
                <img src="../assets/images/action.svg" class="hidden md:block w-full md:w-1/2 object-cover"
                    alt="Action Image">
                <div class="flex flex-col py-4 px-10">
                    <span class="text-2xl md:text-3xl xl:text-5xl font-bold text-[#000] mt-10 md:mt-20 xl:w-2/3">
                        Ready to see Impulse in Action?
                    </span>
                    <form @submit.prevent="sendEmail" class="mt-4 md:mt-10">
                        <input v-model="email" type="email" id="scales" name="scales" placeholder="Your Email"
                            class="rounded-xl p-2 text-lg border text-[#858C94] border-[#8791A1] w-full xl:w-[420px]"
                            required />
                        <div class="flex gap-x-1 mt-6">
                            <input type="checkbox" id="privacy" required>
                            <label for="privacy" class="md:w-2/3 text-[#000000]">
                                I agree to the
                                <router-link to="/impulse-privacy" class="text-[#0079D8] hover:underline">
                                    privacy policy
                                </router-link>
                                including to Impulse using my contact details to contact me for marketing purposes.
                            </label>
                        </div>
                        <div class="my-10">
                            <button type="submit"
                                class="inline-block skew-x-0 text-center cursor-pointer rounded-full hover:before:rounded-full border-[1.5px] border-black before:absolute before:-inset-0.5 before:origin-right 
        before:scale-x-0 hover:text-white hover:before:origin-left hover:before:scale-x-100 
        ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 
        motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 
        motion-safe:hover:before:ease-out motion-safe:before:rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base xl:text-xl bg-[#7F39E9] before:bg-[#662ebb] text-white !border-none font-bold">
                                <span class="inline-block skew-x-0">
                                    <div class="flex flex-row items-center gap-x-1">
                                        <Icon icon="line-md:loading-twotone-loop" width="25" v-if="loading" />
                                        REQUEST A DEMO
                                    </div>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    </section>
</template>
<script>
import { Icon } from '@iconify/vue';
import axios from "axios";
import { useToast } from "vue-toastification";
import { ref, onMounted } from "vue";
export default {
    components: { Icon },
    setup() {
        const email = ref(null)
        const loading = ref(false)
        const toast = useToast();
        return {
            email,
            loading,
            toast
        }
    },
    methods: {
        sendEmail: function () {
            this.loading = true
            const vm = this;
            axios.post('https://api.brevo.com/v3/contacts', {
                email: this.email,
                listIds: [2]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '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'
                }
            })
                .then(function (response) {
                    vm.loading = false
                    vm.toast.success('Thank you for subscribing to Impulse Newsletters!', {
                        position: "top-right",
                        timeout: 4000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: false,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                })
                .catch(function (error) {
                    vm.loading = false
                    vm.toast.error('Wrong Email Address or Already Registered!', {
                        position: "top-right",
                        timeout: 4000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: false,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                });
        },
    }
}
</script>