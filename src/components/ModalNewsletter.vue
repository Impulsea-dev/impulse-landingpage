<template>
    <div class="">
        <Modal :title="$t('newsletters-1')" label="" labelClass="" ref="modal1" centered
            sizeClass="max-w-2xl">
            <div class="text-center flex justify-center mb-4">
                <img src="@/assets/images/logo/impulse.webp" alt="">
            </div>
            <div class="text-center text-xl text-white font-semibold mb-4">
                {{ $t('newsletters-2') }}
            </div>

            <div class="text-center text-base mb-6">
                {{ $t('newsletters-3') }}
            </div>
            <form @submit.prevent="sendEmail">
                <div class="text-base text-slate-300">
                    <Textinput label="" type="email" :placeholder="$t('newsletters-4')" name="emil" v-model="email"
                        classInput="h-[52px]" />
                </div>
                <Button type="submit" :isDisabled="!email" btnClass="btn-primary block-btn mt-4"
                style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)">
                    <div class="flex justify-center">
                        <span v-if="loading" class="loading-spinner"></span>
                        <div class="ml-2 text-base">{{$t('newsletters-5') }}</div>
                    </div>
                    </Button>
            </form>

            <div class="text-center text-slate-400 italic text-sm mt-6 hover:cursor-pointer" @click="dontWantInfo">
                {{ $t('newsletters-6') }}
            </div>
        </Modal>
    </div>
</template>
<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import Textinput from "@/components/Textinput";
import img from "@/assets/images/logo/impulse.webp"
import { ref,onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import window from "@/mixins/window";
export default {
    mixins: [window],
    components: {
        Modal,
        Button,
        Textinput,
    },
    data:function(){
        return {
            visitCount:0,
            maxVisit:3,
            loading:false
        }
    },
    methods:{
        getVisitCount() {
      const count = localStorage.getItem('visitCount');
      return count ?!this.isLastDateGreater(this.getLastDate())? parseInt(count):0 : 0;
    },
    getLastDate(){
        const lastDate = localStorage.getItem('lastDate');
      return lastDate ? new Date(lastDate) : new Date();
    },

    saveLastDate(lastDate) {
      localStorage.setItem('lastDate', lastDate);
    },
     isLastDateGreater(lastDate) {
  const currentDate = Date.now();
  const differenceInMilliseconds = currentDate - lastDate;
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24); 
  if(differenceInDays>1 || !localStorage.getItem("lastDate")){
    this.saveLastDate(lastDate.toISOString())
  }

  return differenceInDays > 1;
},
    saveVisitCount(count) {
      localStorage.setItem('visitCount', count);
    },
        dontWantInfo:function(){
            sessionStorage.setItem('opened',true);
            this.$refs.modal1.closeModal();
        },
        sendEmail:function(){
            this.loading=true
            const vm=this;
            axios.post('https://api.brevo.com/v3/contacts', {
                email: this.email,
                listIds:[2]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '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'
                }
            })
                .then(function (response) {
                    vm.loading=false
                    vm.$refs.modal1.closeModal();
                    sessionStorage.setItem('opened',true);
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
                    vm.loading=false
                    vm.$refs.modal1.closeModal();
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
    },
    mounted(){
        setTimeout(() => { 
            this.visitCount = this.getVisitCount();
            if(!sessionStorage.getItem("opened") && this.window.width>654 && this.visitCount<this.maxVisit){
                  this.visitCount++;  
                  this.saveVisitCount(this.visitCount);
                  this.$refs.modal1.openModal();
                }
        }, 1000*10)
    },
    setup() {
        const email = ref(null)
        const loading=ref(false)
        const toast = useToast();        
        
        return {
            email,
            loading,
            toast
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
  