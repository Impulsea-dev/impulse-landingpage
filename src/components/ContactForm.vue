<template>
    <div class=""> 
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
   <Textinput
     :label="$t('telemetricsForm-4')"
     name="from_name"
     type="text"
     :placeholder="$t('telemetricsForm-4')"
     v-model="name"
      :error="nameError"
   />
   <Textinput
     :label="$t('telemetricsForm-5')"
     name="reply_to"
     type="email"
     :placeholder="$t('telemetricsForm-5')"
     v-model="email"
      :error="emailError"
   />
 
   <div class="flex-row space-y-2">
   <label
      
      class="input-label"
    >
      {{$t('telemetricsForm-6')}}</label
    >
    <div class="flex-row items-stretch inputGroup">
   <MazPhoneNumberInput
    v-model="phone"
    name="from_phone"
    show-code-on-list
    color="info"
    :preferred-countries="countryList"
    :default-country-code="countryList[0]"
    :ignored-countries="['AC']"
    @update="results = $event"
    :success="results?.isValid"
    :error="phoneError"
  />
</div>
</div>
   <Textarea :label="$t('telemetricsForm-7')" name="message" :placeholder="$t('telemetricsForm-7')" 
   v-model="text"
      :error="textError"
   />
   <Textinput
     label="Referral"
     name="refer_from"
     class="hidden"
     type="text" 
     v-model="reffered"
     isReadonly
   />
   <Button :text="$t('telemetricsForm-8')" btnClass="btn-primary block-btn"  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"  />
   
   </form>
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
import { ref ,inject, onMounted} from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import axios from "axios"

  export default {
    props:["refer"],
    components:{Card, Textinput,MazPhoneNumberInput,
    Button,Textarea},
    data(){
      return {contact,
        reffered:this.refer
    }
    },
    methods:{
      onSubmit(){
        const vm=this;
       this.handleSubmit(()=>{
        emailjs.sendForm('service_x8zg0jn', 'template_egrdfgl',vm.$refs.form, '37pInE6bRBPRhMI6-')
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
      phone: yup.string().matches( /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,"Please enter a valid phone number").required('Please fill the empty field'),
      text: yup.string().required('Please fill the empty field'),
    });

    const { handleSubmit } = useForm({
      validationSchema: schema,
    });
 

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: text, errorMessage: textError } =useField("text");
    const { value: name, errorMessage: nameError } =useField("name");
    const { value: phone, errorMessage: phoneError } =useField("phone");
    const results = ref()
    const countryList=ref([])

    const bringCurrent=async ()=>{
      var options = {method: 'GET', url: 'https://ipapi.co/json/'};
  

      const d=(await axios.request(options)).data
     
  
      countryList.value.push(d["country_code"])
     
      
    }

    onMounted(async ()=>{
       await bringCurrent()
    })

 


    const onSubmit=handleSubmit(()=>{
      
      
        emailjs.sendForm('service_x8zg0jn', 'template_egrdfgl',form.value, '37pInE6bRBPRhMI6-')
      .then((response) => {
	  //  console.log('SUCCESS!', response.status, response.text);
     if(response.status==200){
      swal.fire({
        title: 'Thanks!',
        text: 'Your request have been sent!',
        icon: 'success',
          background: "#1e293b",
        showConfirmButton: false,
        timer: 1000,
      });
      email.value="";
      name.value="";
      text.value="";
      phone.value="";
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
  