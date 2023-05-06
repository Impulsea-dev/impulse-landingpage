<template>
    <div class=""> 
      <div class="inline-block relative items-center justify-center bg-cover lg:dark:!bg-[#3C007C] !p-12 w-[100vw] !-left-6 -top-6 ">
     
   
     <card :className="'dark:!bg-[#000000] mt-6  ml-auto mr-auto mb-auto relative'">
     <div class="grid grid-cols-1 lg:grid-cols-3 mt-3 ">
         <div class="flex flex-col col-span-1">
           <h5 class="mb-9">
            We're eager to hear about your project
   
       </h5>
       <h6 class="mb-2 leading-5">
        Please provide the details and we'll  
       </h6>

       <h6 class="mb-9 leading-5"> 
        promptly follow up with you.
       </h6>
   
       <form class="space-y-6" @submit.prevent="onSubmit" ref="form"> 
   <Textinput
     label="Your Name"
     name="from_name"
     type="text"
     placeholder="Your Name"
     v-model="name"
      :error="nameError"
   />
   <Textinput
     label="Email"
     name="reply_to"
     type="email"
     placeholder="Type your email"
     v-model="email"
      :error="emailError"
   />
   <Textinput
     label="Your Phone Number"
     name="from_phone"
     type="text"
     placeholder="Your Phone Number"
     v-model="phone"
      :error="phoneError"
   />
   <Textarea label="Message" name="message" placeholder="Your message" 
   v-model="text"
      :error="textError"
   />
   <Button text="Sent" btnClass="btn-primary block-btn"  style="background:linear-gradient(224.95deg, #a446f4 -1.95%, #4138f3 104.5%)"  />
   
   </form>
   
   
         </div>
         <div class="hidden flex-col lg:flex lg:ml-10 lg:mr-10  mt-10 col-span-2 ">
          <div class=" grid grid-cols-2 mb-3 gap-4 space-x-4">
     <div class="flex-col    gap-4 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 9.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 7.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 5.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
             fill="#2F88FF"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">HQ Address</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        38 Caterpillar Lane, Grand Cayman, Cayman Islands KY1-1104
       </p>
     </div>
     <div class="flex-col    gap-4 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 9.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 7.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 5.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
             fill="#2F88FF"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Office Address</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        Nuevos Horizontes Business Center, San Pedro Sula, Honduras 13001
       </p>
     </div>
      
   </div>
         
   <div class=" grid grid-cols-2 mb-3 gap-4 space-x-4">
     <div class="flex-col  w-44   gap-1 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66602 10H13.3327V14C13.3327 14.3682 13.0342 14.6667 12.666 14.6667H3.33268C2.96449 14.6667 2.66602 14.3682 2.66602 14V10Z"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path
             d="M13.3327 9.99998V1.99998C13.3327 1.63179 13.0342 1.33331 12.666 1.33331H3.33268C2.96449 1.33331 2.66602 1.63179 2.66602 1.99998V9.99998"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path d="M7.33301 12.3333H8.66634" stroke="white" stroke-linecap="round"></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Phone number</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        +1 (345) 746-4505
       </p>
     </div>
     <div
       class="flex-col  w-48   gap-1 relative"
     >
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M1.33301 13H14.6663V8V3H7.99967H1.33301V8V13Z"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path
             d="M1.33301 3L7.99967 8L14.6663 3"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M7.99967 3H1.33301V8"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M14.6667 8V3H8"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Email</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        sales@impulse.ky
       </p>
     </div>
   </div>
   <div class="w-[688px] h-[347px]">
    <img class="w-[688px] h-[347px] rounded-2xl object-fill" :src="contact" />
            
          </div>
         </div>
   
     </div>
   
     </card> 
   
   
   
    
       </div>
       <div class="flex flex-col lg:hidden space-y-4   justify-center items-center w-44   mt-6 relative ml-auto mr-auto ">
           
        <div class="flex-col    gap-4 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 9.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 7.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 5.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
             fill="#2F88FF"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">HQ Address</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        38 Caterpillar Lane, Grand Cayman, Cayman Islands KY1-1104
       </p>
     </div>
     <div class="flex-col    gap-4 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66699 11.9999V14.6666H13.3337V1.33325H2.66699V3.99992"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 9.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 7.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M2 5.99994H3.33333"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M8.00033 6.99992C8.73671 6.99992 9.33366 6.40296 9.33366 5.66659C9.33366 4.93021 8.73671 4.33325 8.00033 4.33325C7.26395 4.33325 6.66699 4.93021 6.66699 5.66659C6.66699 6.40296 7.26395 6.99992 8.00033 6.99992Z"
             fill="#2F88FF"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M10.6663 11.6666C10.6663 10.1938 9.47244 8.99994 7.99967 8.99994C6.52691 8.99994 5.33301 10.1938 5.33301 11.6666"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Office Address</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        Nuevos Horizontes Business Center, San Pedro Sula, Honduras 13001
       </p>
     </div>
     <div class="flex-col  w-44   gap-1 relative">
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M2.66602 10H13.3327V14C13.3327 14.3682 13.0342 14.6667 12.666 14.6667H3.33268C2.96449 14.6667 2.66602 14.3682 2.66602 14V10Z"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path
             d="M13.3327 9.99998V1.99998C13.3327 1.63179 13.0342 1.33331 12.666 1.33331H3.33268C2.96449 1.33331 2.66602 1.63179 2.66602 1.99998V9.99998"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path d="M7.33301 12.3333H8.66634" stroke="white" stroke-linecap="round"></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Phone number</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
        +1 (345) 746-4505
       </p>
     </div>
     <div
       class="flex-col  w-48   gap-1 relative"
     >
       <div class="flex justify-start items-center flex-grow-0 flex-shrink-0  gap-2">
         <svg
           width="16"
           height="16"
           viewBox="0 0 16 16"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           class="flex-grow-0 flex-shrink-0 w-4 h-4"
           preserveAspectRatio="xMidYMid meet"
         >
           <path d="M0 0H16V16H0V0Z" fill="white" fill-opacity="0.01"></path>
           <path
             d="M1.33301 13H14.6663V8V3H7.99967H1.33301V8V13Z"
             stroke="white"
             stroke-linejoin="round"
           ></path>
           <path
             d="M1.33301 3L7.99967 8L14.6663 3"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M7.99967 3H1.33301V8"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
           <path
             d="M14.6667 8V3H8"
             stroke="white"
             stroke-linecap="round"
             stroke-linejoin="round"
           ></path>
         </svg>
         <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">Email</p>
       </div>
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70">
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
import { ref ,inject} from 'vue';

  export default {
    components:{Card, Textinput,
    Button,Textarea},
    data(){
      return {contact}
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
      
      email,
      onSubmit,
      phone,
      phoneError,
      

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
  