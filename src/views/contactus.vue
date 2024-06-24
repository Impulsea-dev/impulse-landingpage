<template>
  <div class="">
    <div
      class="inline-block relative items-center justify-center bg-cover lg:dark:!bg-[#3C007C] !p-12 w-[100vw] !-left-6 -top-6 ">


      <card :className="' bg-white dark:!bg-[#000000] mt-6  ml-auto mr-auto mb-auto relative'">
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-3 ">
          <div class="flex flex-col col-span-1">
            <h5 class="mb-9">
              {{ $t('telemetricsForm-1') }}

            </h5>
            <h6 class="mb-2 leading-5">
              {{ $t('telemetricsForm-2') }}
            </h6>

            <h6 class="mb-9 leading-5">
              {{ $t('telemetricsForm-3') }}
            </h6>

            <form class="space-y-8 mt-10" @submit.prevent="onSubmit" ref="form">
              <Textinput :label="$t('telemetricsForm-4')" name="from_name" type="text"
                :placeholder="$t('telemetricsForm-4')" v-model="name" :error="nameError" />
              <Textinput :label="$t('telemetricsForm-5')" name="reply_to" type="email"
                :placeholder="$t('telemetricsForm-5')" v-model="email" :error="emailError" />
              <!-- <Textinput
     label="Your Phone Number"
     name="from_phone"
     type="text"
     placeholder="Your Phone Number"
     v-model="phone"
      :error="phoneError"
   /> -->
              <div class="flex-row space-y-2">
                <label class="input-label">
                  {{ $t('telemetricsForm-6') }}</label>
                <div class="flex-row items-stretch inputGroup">
                  <MazPhoneNumberInput v-model="phone" name="from_phone" show-code-on-list color="info"
                    :preferred-countries="countryList" :default-country-code="countryList[0]"
                    :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid"
                    :error="phoneError" />
                </div>
              </div>
              <Textarea :label="$t('telemetricsForm-7')" name="message" :placeholder="$t('telemetricsForm-7')"
                v-model="text" :error="textError" />
              <Button :text="$t('telemetricsForm-8')" btnClass="btn-primary block-btn"
                style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" />

            </form>
          </div>
          <div class="hidden flex-col lg:flex lg:ml-10 lg:mr-10  mt-10 col-span-2 ">
            <div class=" grid grid-cols-3 mb-3 gap-4 space-x-4">
              <div class="flex-col gap-4 relative">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor"
                      d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z" />
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
                    {{ $t('contactUs-1.hqAddress') }}</p>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
                  38 Caterpillar Lane, Grand Cayman, Cayman Islands KY1-1104
                </p>
              </div>
              <div class="flex-col gap-4 relative">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor"
                      d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z" />
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
                    {{ $t('contactUs-1.officeAddress') }}</p>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
                  1150 Nw 72nd Ave Tower | Miami, Florida 33126
                </p>
              </div>
              <div class="flex-col    gap-4 relative">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor"
                      d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z" />
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
                    {{ $t('contactUs-1.officeAddress') }}</p>
                </div>
                <p
                  class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70 mt-1">
                  Nuevos Horizontes Business Center, San Pedro Sula, Honduras 13001
                </p>
              </div>

            </div>

            <div class=" grid grid-cols-3 mb-3 gap-4 space-x-4">
              <div class="flex-col  w-44   gap-1 relative">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
                    {{ $t('telemetricsForm-6') }}</p>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
                  +1 (345) 746-4505
                </p>
              </div>
              <div class="flex-col  w-48   gap-1 relative">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
                    {{ $t('telemetricsForm-5') }}</p>
                </div>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
                  sales@impulse.ky
                </p>
              </div>
            </div>
            <div class="">
              <img class="aspect-video rounded-2xl object-contain" :src="contact" />

            </div>
          </div>

        </div>

      </card>




    </div>
    <div class="flex flex-col lg:hidden space-y-4   justify-center items-center w-44   mt-6 relative ml-auto mr-auto ">

      <div class="flex-col    gap-4 relative">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992" stroke="white" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M2 9.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 7.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 5.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
              fill="#2F88FF" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
              stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
            {{ $t('contactUs-1.hqAddress') }}</p>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
          38 Caterpillar Lane, Grand Cayman, Cayman Islands KY1-1104
        </p>
      </div>
      <div class="flex-col    gap-4 relative">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992" stroke="white" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M2 9.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 7.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 5.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
              fill="#2F88FF" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
              stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
            {{ $t('contactUs-1.officeAddress') }}</p>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
          1150 Nw 72nd Ave Tower | Miami, Florida 33126
        </p>
      </div>
      <div class="flex-col    gap-4 relative">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992" stroke="white" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M2 9.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 7.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2 5.99994H3.33333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
              fill="#2F88FF" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
              stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
            {{ $t('contactUs-1.officeAddress') }}</p>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
          Nuevos Horizontes Business Center, San Pedro Sula, Honduras 13001
        </p>
      </div>
      <div class="flex-col  w-44   gap-1 relative">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path
              d="M2.66602 10H13.3327V14C13.3327 14.3682 13.0342 14.6667 12.666 14.6667H3.33268C2.96449 14.6667 2.66602 14.3682 2.66602 14V10Z"
              stroke="white" stroke-linejoin="round"></path>
            <path
              d="M13.3327 9.99998V1.99998C13.3327 1.63179 13.0342 1.33331 12.666 1.33331H3.33268C2.96449 1.33331 2.66602 1.63179 2.66602 1.99998V9.99998"
              stroke="white" stroke-linejoin="round"></path>
            <path d="M7.33301 12.3333H8.66634" stroke="white" stroke-linecap="round"></path>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
            {{ $t('telemetricsForm-6') }}</p>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
          +1 (345) 746-4505
        </p>
      </div>
      <div class="flex-col  w-48   gap-1 relative">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-4 h-4" preserveAspectRatio="xMidYMid meet">
            <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
            <path d="M1.33301 13H14.6663V8V3H7.99967H1.33301V8V13Z" stroke="white" stroke-linejoin="round"></path>
            <path d="M1.33301 3L7.99967 8L14.6663 3" stroke="white" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M7.99967 3H1.33301V8" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.6667 8V3H8" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-900 dark:text-white">
            {{ $t('telemetricsForm-5') }}</p>
        </div>
        <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-slate-900 dark:text-white/70">
          sales@impulse.ky
        </p>
      </div>
    </div>

  </div>
</template>
<script>
import Textinput from "@/components/Textinput";
import Card from "@/components/Card/index.vue"
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import contact from "@/assets/images/contact.webp"
import { useField, useForm } from "vee-validate";
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { ref, inject, onMounted } from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import axios from "axios"

export default {
  components: {
    Card, Textinput, MazPhoneNumberInput,
    Button, Textarea
  },
  data() {
    return { contact }
  },
  methods: {
    onSubmit() {
      const vm = this;
      this.handleSubmit(() => {
        emailjs.sendForm('service_x8zg0jn', 'template_egrdfgl', vm.$refs.form, '37pInE6bRBPRhMI6-')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
      })
      // console.warn(values.email);
    },
  },
  setup() {
    const swal = inject('$swal')
    const form = ref(null);


    const schema = yup.object({
      email: yup.string().required('Please fill the empty field').email("Please fill the field with a valid email address"),
      name: yup.string().required('Please fill the empty field'),
      phone: yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "Please enter a valid phone number").required('Please fill the empty field'),
      text: yup.string().required('Please fill the empty field'),
    });

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });


    const { value: email, errorMessage: emailError } = useField("email");
    const { value: text, errorMessage: textError } = useField("text");
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: phone, errorMessage: phoneError } = useField("phone");
    const results = ref()
    const countryList = ref([])

    const bringCurrent = async () => {
      var options = { method: 'GET', url: 'https://ipapi.co/json/' };


      const d = (await axios.request(options)).data


      countryList.value.push(d["country_code"])


    }

    onMounted(async () => {
      await bringCurrent()
    })




    const onSubmit = handleSubmit(() => {


      emailjs.sendForm('service_x8zg0jn', 'template_egrdfgl', form.value, '37pInE6bRBPRhMI6-')
        .then((response) => {
          //  console.log('SUCCESS!', response.status, response.text);
          if (response.status == 200) {
            swal.fire({
              title: 'Thanks!',
              text: 'Your request have been sent!',
              icon: 'success',
              background: "#1e293b",
              showConfirmButton: false,
              timer: 1000,
            });
            email.value = "";
            name.value = "";
            text.value = "";
            phone.value = "";
          }
        }, (err) => {
          console.log('FAILED...', err);
        });
    })

    return {
      form,
      results,
      email,
      onSubmit,
      phone,
      phoneError,

      countryList,

      emailError,
      text,
      textError,
      name,
      nameError,
    };
  },
};
</script>
<style>
.changeColor {
  background-color: #3C007C !important;

}
</style>