<template>
    <div>
        <Modal title="Impulse Newsletters" label="" labelClass="" ref="modal1" centered
            sizeClass="max-w-2xl">
            <div class="text-center flex justify-center mb-4">
                <img src="@/assets/images/logo/impulse.svg" alt="">
            </div>
            <div class="text-center text-xl text-white font-semibold mb-4">
                Sign-Up for Impulse Newsletters
            </div>

            <div class="text-center text-base mb-6">
                News, trends, and latest information about the Telecommunication Industry
            </div>
            <form @submit.prevent="sendEmail">
                <div class="text-base text-slate-300">
                    <Textinput label="" type="email" placeholder="Type your Email" name="emil" v-model="email"
                        classInput="h-[52px]" />
                </div>
                <Button type="submit" :isDisabled="!email" btnClass="btn-primary block-btn mt-4"
                style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)">
                    <div class="flex justify-center">
                        <span v-if="loading" class="loading-spinner"></span>
                        <div class="ml-2 text-base"> Submit</div>
                    </div>
                    </Button>
            </form>

            <div class="text-center text-slate-400 italic text-sm mt-6 hover:cursor-pointer" @click="dontWantInfo">
                I don’t want the most recent Telco Information
            </div>
        </Modal>
    </div>
</template>
<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import Textinput from "@/components/Textinput";
import img from "@/assets/images/logo/impulse.svg"
import { ref,onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
    components: {
        Modal,
        Button,
        Textinput,
    },
    methods:{
        dontWantInfo:function(){
            sessionStorage.setItem('opened',true);
            this.$refs.modal1.closeModal();
        }
    },
    setup() {
        const email = ref(null)
        const modal1 = ref(null);
        const loading=ref(false)
        const toast = useToast();
        onMounted(() => {
            setTimeout(() => { 
                if(!sessionStorage.getItem("opened")){

                    modal1.value.openModal();
                }
        }, 1000*10)
        });
        const sendEmail = () => {
            loading.value=true
            axios.post('https://api.brevo.com/v3/contacts', {
                email: email.value,
                listIds:[2]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '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'
                }
            })
                .then(function (response) {
                    loading.value=false
                    modal1.value.closeModal();
                    sessionStorage.setItem('opened',true);
                    toast.success('Thank you for subscribing to Impulse Newsletters!', {
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
                    loading.value=false
                    modal1.value.closeModal();
                    toast.error('Wrong Email Address or Already Registered!', {
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
        }

        return {
            email,
            loading,
            modal1,
            sendEmail
        }


    }
};
</script>
<style>
.loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
  