<template>
  <div>
    <section class="pt-20">
      <div
        class="my-10 bg-[#F6F6F6] px-5 md:px-10 xl:px-20 py-10 mx-2 xl:mx-10 rounded-md animate-fade-up animate-delay-300 border shadow">
        <span class="flex text-[#3D0075] font-bold text-xl md:text-2xl xl:text-3xl gap-x-1">Get in <span
            class="text-[#0079D8]">Touch</span></span>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
          <form class="l-section space-y-4" @submit.prevent="onSubmit" ref="form">
            <span class="text-[#3D0075] text-base md:text-lg xl:text-xl font-medium">{{ $t('contactTitle') }}</span>
            <Textinput :label="$t('telemetricsForm-4')" name="from_name" type="text"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-4')"
              v-model="name" :error="nameError" />
            <Textinput :label="$t('telemetricsForm-5')" name="reply_to" type="email"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-5')"
              v-model="email" :error="emailError" />
            <div class="flex-row space-y-2">
              <label class="text-[#3D0075] font-bold text-base xl:text-lg">
                {{ $t('telemetricsForm-6') }}</label>
              <div class="flex-row items-stretch inputGroup">
                <MazPhoneNumberInput v-model="phone" name="from_phone" show-code-on-list color="info"
                  :preferred-countries="countryList" :default-country-code="countryList[0]" :ignored-countries="['AC']"
                  @update="results = $event" :success="results?.isValid" :error="phoneError" />
              </div>
            </div>
            <Textarea :label="$t('telemetricsForm-7')" name="message"
              :classLabel="'text-[#3D0075] font-bold text-base xl:text-lg'"
              :classInput="'border-[#8791A1] rounded-md placeholder:text-lg'" :placeholder="$t('telemetricsForm-7')"
              v-model="text" :error="textError" />
            <Button :text="$t('telemetricsForm-8')" btnClass=" block-btn rounded-full text-white text-base xl:text-xl"
              style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)" />
          </form>
          <div class="flex flex-col space-y-4">
            <div class="flex gap-10 flex-wrap">
              <div class="flex flex-col">
                <div class="flex items-center gap-x-1">
                  <img src="../assets/images/email-icon.svg" class="h-4 xl:h-6" alt="">
                  <span class="text-[#3D0075] font-bold text-base xl:text-lg">Email</span>
                </div>
                <span class="text-[#3D0075] text-base xl:text-lg">sales@impulse.ky</span>
              </div>
              <!-- <div class="flex flex-col">
                <div class="flex items-center gap-x-1">
                  <img src="../assets/images/phone-icon.svg" class="h-4 xl:h-6" alt="">
                  <span class="text-[#3D0075] font-bold text-base xl:text-lg">Phone Number</span>
                </div>
                <span class="text-[#3D0075] text-base xl:text-lg">+1-945-308-6915</span>
              </div> -->
            </div>
            <iframe class="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.661216594637!2d-80.31563478839387!3d25.78175137724465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9a4624d7415%3A0x2b97adf5452981a2!2s1150%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses!2shn!4v1720445516886!5m2!1ses!2shn"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>

    <div
      class="bg-[#F6F6F6] shadow-md border flex justify-between flex-wrap gap-4 items-center mx-2 xl:mx-10 my-10 px-10 xl:px-20 py-10">

      <div class="flex flex-col">
        <div class="flex items-center gap-x-1">
          <img src="../assets/images/office1-icon.svg" class="h-4 xl:h-6" alt="">
          <span class="text-[#3D0075] font-bold text-base xl:text-lg">HQ Address</span>
        </div>
        <span class="text-[#3D0075] text-base xl:text-lg">1150 Nw 72nd Ave Tower | Miami, Florida 33126</span>
      </div>
      <!-- <div class="flex flex-col xl:w-1/3">
        <div class="flex items-center gap-x-1">
          <img src="../assets/images/office2-icon.svg" class="h-4 xl:h-6" alt="">
          <span class="text-[#3D0075] font-bold text-base xl:text-lg">Office Address</span>
        </div>
        <span class="text-[#3D0075] text-base xl:text-lg">Nuevos Horizontes Business Center, San Pedro Sula, Honduras
          13001</span>
      </div> -->
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
import { useI18n } from 'vue-i18n'

export default {
  components: {
    Card, Textinput, MazPhoneNumberInput,
    Button, Textarea
  },
  data() {
    return { contact }
  },
  mounted() {
    this.$store.themeSettingsStore.bringAllSections(document.querySelectorAll('.l-section'))
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
    const { t } = useI18n()


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