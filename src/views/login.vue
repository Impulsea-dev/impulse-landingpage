<template>
    <div>  
      <form class="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-cover bg-no-repeat bg-center" @submit.prevent="submit" ref="form"
      :style="{backgroundImage:'url(' + loginBg + ')',}">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100 via-purple-500 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="flex items-center justify-center mb-7">
                <img src="@/assets/images/logo/logo.svg" width="142" height="32"/>                   
              </div>
              <div>
                <h1 class="flex text-2xl !font-semibold items-center justify-center !text-black-600">Welcome to Impulse</h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <TextInput autocomplete="off" id="email" name="email" type="email" v-model="email" :error="emailError" classInput="!bg-white peer  h-10 w-full border-b-2 !border-gray-300 !text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" />
                     </div>
                  <div class="relative">
                    <TextInput autocomplete="off" id="password" name="password" type="password" v-model="password" :error="passwordError" classInput="!bg-white peer  h-10 w-full border-b-2 !border-gray-300 !text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                        </div>
                  <div class="relative">
                    <button class="btn-btnp text-white rounded-md px-2 py-1 w-full " type="submit">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  <script> 
  import loginBg from "@/assets/images/all-img/loginbg.jpg"
  import Button from "@/components/Button"
  import Card from "@/components/Card"
  import TextInput from "@/components/Textinput/index.vue"
  import * as yup from "yup";
  import { useToast } from "vue-toastification";
  import { useRouter } from "vue-router";
  import { useField, useForm } from "vee-validate";
  import registerServices from "@/services/Register"
  import { ref } from 'vue';
  const toast = useToast()
  export default {
    data(){
      return{
        loginBg
      }
    },
    components: {
      Card,
      Button,
      TextInput
    },
    setup(){
  
        const router=useRouter();
        let   userSchema = yup.object().shape({
              email: yup.string().required("Email is required"),
              password: yup.string().required("Password is required"),
          });
          const { handleSubmit } = useForm({
          validationSchema: userSchema,
          keepValuesOnUnmount: true,
      });
      const { value: email, errorMessage: emailError } =useField("email");
      const { value: password, errorMessage: passwordError } =useField("password");
  
      let info = {}
      const submit = handleSubmit( async() => {
          info = {
            username:email.value, password:password.value
          }
          console.log(info);
          try {
                   const l=await registerServices.Login(info)
          sessionStorage.setItem("auth",JSON.stringify(l))
          toast.success("Welcome",{
            timeout: 2000,
          })
            router.push("/saveblog")
  
          } catch (error) {
            console.log(error);
            toast.error("Wrong Credentials",{
            timeout: 2000,
          })
          }
          })
        return {
          email,emailError,submit,password,passwordError
        }
      },    
      methods:{
        sendTo(link){
          this.$router.push({path:link})
        },
       
      }
    };
  </script>
  
  