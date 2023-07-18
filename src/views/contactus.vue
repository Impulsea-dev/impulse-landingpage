<template>
    <div class=""> 
      <div class="inline-block relative items-center justify-center bg-cover lg:dark:!bg-[#3C007C] !p-12 w-[100vw] !-left-6 -top-6 ">
     
   
     <card :className="'dark:!bg-[#000000] mt-6  ml-auto mr-auto mb-auto relative'">
     <div class="grid grid-cols-1 lg:grid-cols-3 mt-3 ">
         <div class="flex flex-col col-span-1">
          
   
      <!-- Contact Us -->
      <ContactForm :refer="'contact-us'" />
   
         </div>
         <div class="hidden flex-col lg:flex lg:ml-10 lg:mr-10  mt-10 col-span-2 ">
          <div class=" grid grid-cols-3 mb-3 gap-4 space-x-4">
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
        1150 Nw 72nd Ave Tower | Miami, Florida 33126
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
       <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white/70 mt-1">
        Nuevos Horizontes Business Center, San Pedro Sula, Honduras 13001
       </p>
     </div>
      
   </div>
         
   <div class=" grid grid-cols-3 mb-3 gap-4 space-x-4">
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
        1150 Nw 72nd Ave Tower | Miami, Florida 33126
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
  import Card from "@/components/Card/index.vue" 
  import contact from "@/assets/images/contact.webp" 
  import ContactForm from "@/components/ContactForm.vue" 

  export default {
    components:{Card, ContactForm},
    data(){
      return {contact}
    },
    methods:{
     
    },
    
  };
  </script> 
  