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
                <h1 class="flex text-2xl font-semibold items-center justify-center">Create a Password</h1>
              </div>            
              <div class="divide-y divide-gray-200 ">
                <div class="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <TextInput label="Password" type="password" placeholder="8+ characters, 1 capitat letter " v-model="password" :error="passwordError" hasicon />
                  <TextInput label="Confirm Password" type="password" placeholder="Password" v-model="confirmpass" :error="confirmpassError" hasicon />
                  </div>
                  <div class="relative">
                    <button class="btn-btnp text-white rounded-md px-2 py-1 w-full " type="submit">Create Password</button>
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
  import TextInput from "@/components/Textinput"
  import { useField, useForm } from "vee-validate";
  import * as yup from "yup";
  import { onBeforeMount, onMounted, reactive, ref,inject } from "vue";
  import { useRouter } from "vue-router";
  export default {
    props: ["validate"],
    data(){
      return{
        loginBg
      }
    },
    components: {
      TextInput
    },
    setup(props){
          const swal = inject('$swal')
          const user = ref()
          let passwordsSchema = yup.object().shape({
              password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
              confirmpass: yup.string().required("Confirm Password is required").oneOf([yup.ref("password"), null], "Passwords must match"),
          });
  
          const router = useRouter();
  
          const { handleSubmit } = useForm({
              validationSchema: passwordsSchema,
              keepValuesOnUnmount: true,
          });
  
          const { value: password, errorMessage: passwordError } = useField("password");
          const { value: confirmpass, errorMessage: confirmpassError } = useField("confirmpass");
  
          const submit = handleSubmit(async () => {
              let pass = {
                  id: props.validate,
                  password: password.value
              }
  
              try {
                  const ps = await RegisterServices.createPass(pass)
                  swal({
                      title: "<p class='text-white text-lg'>User was registered successfully</p>",
                      text: "",
                      type: "success",
                      background: "#1e293b",
                      showCancelButton: false,
                      confirmButtonColor: "#5cb85c",
                      confirmButtonText: "Go to Login"
                  }).then(async (result) => {
                      if (result.value) {
                          router.push('/login')
                      }
                  });
              } catch (error) {
               
              }
  
  
          })
  
          return {
              password,
              passwordError,
              confirmpass,
              confirmpassError,
              user,
              submit
          }
  
      },    
      methods:{
        sendTo(link){
          this.$router.push({path:link})
        },
       
      }
    };
  </script>
  
  