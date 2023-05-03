<template>
<div class="flex flex-wrap w-full justify-start rounded-lg">

    <div class="grid md:grid-cols-1 grid-cols-1 text-white items-center justify-start mx-auto">
       <div class="flex-row p-6">
        <div class="flex flex-col justify-start items-start gap-8">
  <div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-8 py-3 rounded-[32px] bg-[#E2E8EA] border-white"
  >
    <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-black-600">Back</p>
  </div>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
    <p class="flex-grow-0 flex-shrink-0  font-semibold text-left text-white">
      <span
        class="flex-grow-0 flex-shrink-0  flex-wrap text-3xl font-semibold text-left text-white"
        >Case Study: Design and Development</span
      >
    </p>
    <p class="flex-grow-0 flex-shrink-0 flex-wrap text-base font-medium text-left text-white/70">
      Lorem ipsum dolor sit amet consectetur. Luctus arcu maecenas massa facilisis commodo ipsum. At ipsum elit eros a egestas amet. Ut nibh volutpat habitasse lorem egestas est. Nunc consequat suspendisse libero gravida auctor eget nec adipiscing ac. Proin sollicitudin ultricies ut risus pellentesque tellus nunc sapien diam. Mattis massa quis lectus ipsum ac lorem morbi.
    </p>
  </div>
</div>
     
       </div>      
    </div>
    <div class="grid md:grid-cols-1 grid-cols-1 text-white items-center justify-start mx-auto">
      <div class="flex-row p-6">
       <div class="flex flex-col justify-start items-start gap-8">
 
 <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
   <p class="flex-grow-0 flex-shrink-0  font-semibold text-left text-white">
     <span
       class="flex-grow-0 flex-shrink-0  flex-wrap text-3xl font-semibold text-left text-white"
       >Software Development</span
     >
   </p>
   <p class="flex-grow-0 flex-shrink-0 flex-wrap text-base font-medium text-left text-white/70">
    Lorem ipsum dolor sit amet consectetur. Sem sed pretium cras mi. Aliquam eget risus augue lectus tellus viverra convallis nisl. Nunc quam felis lorem mauris ac sed euismod. Et eros ullamcorper volutpat nibh aliquam mauris volutpat. Enim consequat at vitae. Consequat neque morbi vel odio ipsum. Erat quam tortor viverra ultrices ornare id tincidunt nulla eget. Commodo sed scelerisque nisi dignissim. Congue purus est velit ultricies. Mus lorem egestas vitae ut in faucibus. Orci eu adipiscing cursus diam porttitor. Fringilla iaculis vestibulum libero erat tincidunt aliquet laoreet. Gravida ultricies cursus morbi varius tincidunt cras sed. Nec lacus senectus at id proin aliquam justo id. Nulla amet mi et felis ornare ac lacus vitae velit. Orci ullamcorper porta orci amet justo in a. Habitant posuere lacinia eget nibh. Et fames pellentesque posuere sit risus. Integer consequat urna nibh nunc. Volutpat mattis sed varius justo id nullam odio et hendrerit.
    Semper sem sed commodo vestibulum quis neque. Amet lectus dignissim quis magna et sem. Volutpat ornare posuere dis dui. Etiam tortor at lacus molestie sit urna sapien non. Interdum massa nibh egestas non ultricies libero odio augue. Dolor neque nunc ullamcorper est. Dolor porttitor rhoncus mauris congue sed vel cursus nibh. Mattis nulla laoreet posuere scelerisque et est. Mattis urna mattis mi sagittis purus. Venenatis nunc tellus blandit consectetur.
    Auctor gravida turpis imperdiet purus tellus orci. Nullam faucibus est quis eget. Egestas eu vitae in lectus ut congue vitae. Quis scelerisque suspendisse sodales dignissim lacus felis urna. Vel tincidunt mollis nulla elementum id posuere. Nisi feugiat ullamcorper aenean praesent vestibulum maecenas. Facilisis sed faucibus enim nisi in volutpat tellus urna. Dolor adipiscing elementum ligula elementum tristique netus et iaculis. Venenatis odio mi sapien sagittis id ut eu non convallis. Arcu amet adipiscing euismod urna eget. Semper volutpat molestie sapien tellus vivamus massa cras elit. Ut leo pulvinar massa egestas nunc urna quis. Nunc volutpat adipiscing tempus risus fringilla tortor tincidunt. Blandit a elementum rutrum mauris ipsum vulputate augue. Pretium sed vitae a eget non mauris metus ac nibh.</p>
 </div>
</div>
    
      </div>      
   </div>
   
    
</div>
</template>
<script>
export default {
  name: 'Card',
  props: { 
    title: {
      type: String,
      default: '',
    },
    
    paragraph: {
      type: String,
      default: '',
    }, 
    img: {
      type: String,
      default: '',
    },
    classBackground: {
      type: String,
      default: '',
    },
  },
};
</script>
