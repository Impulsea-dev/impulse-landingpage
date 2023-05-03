<template>
    <div class="!p-0 !m-0 md:!-top-6 md:-left-0 !-top-4 -left-4 relative">
        <div class="bg-[#3C007C] w-[100vw] grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="col-span-2">
    <div class="text-4xl md:text-[64px] leading-[72px] font-Manrope text-white ml-8 md:ml-20 mt-14">Telemetrics</div>
    <div class="text-[#ffffffb3] text-xs md:text-base ml-8 md:ml-20 mr-10">
        Telemetrics empowers you to make informed decisions, track progress, optimize performance, and achieve business growth. 
    </div>

    <div class="rounded-2xl bg-[#5f29ad] mt-5 p-10 mr-10  ml-8 md:ml-20">
    <p class="text-xs md:text-base font-medium  text-white">
    Say goodbye to costly solution providers charging hundreds of thousands of dollars for
    integrating your complex billing system and CRM. Telemetrics was designed for CEOs and managers
    seeking to unlock the best business opportunities from their data without breaking the bank.
  </p>
</div>
  </div>
  <div class="bgtm hidden md:flex">
  </div>

  <div class="col-span-3 mb-[-14px] pt-14 bg-[#11131540]">
    <div class="text-center text-lg md:text-3xl text-white">
        Real-time Sales Performance Tracking
    </div>
    <div class="text-xs md:text-base text-[#ffffffb3] pl-10 md:pl-32  pr-10 md:pr-32 mt-2">
        With Telemetrics, CEOs and managers can easily monitor and track their company's sales goals in real time, 
        from annual revenue targets to the progress of individual sales team members. 
        No more spreadsheets or manual tracking - everything is in one place. 
    </div>
    <div class="flex justify-center">
        <div class="progress md:mt-10 transform scale-90 md:scale-100 mb-[-80px] md:mb-0"> </div>
    </div>
    <div class="flex justify-center">
        <div class="barchart md:mt-10 transform scale-90 md:scale-100 mb-[-80px] md:mb-0"></div>
    </div>
</div>

<div class="col-span-3  md:pt-20 bg-[#5F29AD]">
    <div class="flex justify-center">
        <div class="degree transform scale-90 md:scale-100 mb-[-80px] md:mb-0"></div>
    </div>
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 bg-[#5F29AD] pl-10 mr-[-30px]">
    <div class="flex flex-col justify-center  mb-[-80px] md:mb-0">
    <div class="text-white text-xl md:text-3xl font-Manrope md:mt-10">
        Uncover New Revenue Opportunities
    </div>  
    <div class="text-[#ffffffb3] text-xs md:text-base pr-10">
        Telemetrics uncovers valuable business opportunities by providing insights into your telecom company's data.
         With our intelligent analytics solution, you'll have a comprehensive view of your company's performance, customer behavior, and market trends. This data-driven approach empowers CEOs and managers to identify potential revenue streams, optimize operations, and make informed business decisions. With Telemetrics,
         you can unlock the full poten9al of your telecom company and achieve sustained growth. 
    </div>
</div>
<div class="flex justify-center mb-[-80px] md:mb-0">
    <div class="pieChart"></div>
</div>
</div>

<div class="flex grid-cols-1 justify-center bg-[#5F29AD] mr-[-30px] mb-[-62px]">
    <div class="timesaving"></div>
</div>

    </div>
</template>
<script>
</script>
<style>
 .bgtm{
    background: url(@/assets/images/tm.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 615px;
    height: 615px;
}

.progress{
    background: url(@/assets/images/progress.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 638px;
    height: 102px;
}
.barchart{
    background: url(@/assets/images/Barchart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 1082px;
    height: 374px;
}

.degree{
    background: url(@/assets/images/360-degree.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 1000px;
    height: 400px;

}
.pieChart{
    background: url(@/assets/images/pieChart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 614.68px;
    height: 614.61px;
}

.timesaving{
    background: url(@/assets/images/Timesaving.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent!important;
    width: 1000px;
    height: 580px;
}
</style>