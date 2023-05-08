<template>
<div>
    <div class="bg-[#3C007C] !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <div class="text-4xl lg:text-[64px] leading-[72px] font-Manrope text-white  mt-4 md:mt-14">Telemetrics</div>
                <div class="text-[#ffffffb3] text-xs lg:text-base">
                    Telemetrics empowers you to make informed decisions, track progress, optimize performance, and achieve
                    business growth.
                </div>

                <div class="rounded-2xl bg-[#5f29ad] mt-5 p-10">
                    <p class="text-xs lg:text-base font-medium  text-white">
                        Say goodbye to costly solution providers charging hundreds of thousands of dollars for
                        integrating your complex billing system and CRM. Telemetrics was designed for CEOs and managers
                        seeking to unlock the best business opportunities from their data without breaking the bank.
                    </p>
                </div>
            </div>
            <div class="bgtm hidden md:flex"></div>
        </div>
    </div>
    <div class="bg-[#511e98]  !p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw]">

        <div class="text-center text-lg md:text-3xl text-white">
            Real-time Sales Performance Tracking
        </div>
        <div class="text-xs md:text-base text-[#ffffffb3] pl-10 md:pl-32  pr-10 md:pr-32 mt-2">
            With Telemetrics, CEOs and managers can easily monitor and track their company's sales goals in real
            time,
            from annual revenue targets to the progress of individual sales team members.
            No more spreadsheets or manual tracking - everything is in one place.
        </div>
        <div class="flex justify-center">
            <div class="progress md:mt-10 transform scale-100 mb-[-80px] md:mb-0"> </div>
        </div>
        <div class="flex justify-center">
            <div class="barchart md:mt-10 transform scale-100 mb-[-80px] md:mb-0"></div>
        </div>
    </div>

    <div class="!p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw] bg-[#5F29AD]">
        <div class="flex justify-center">
            <div class="degree mb-[-80px] mt-[-150px] md:mt-0"></div>
        </div>
    </div>
    
    <div class="!p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative w-[100vw] bg-[#5F29AD]">
    <div class="grid grid-cols-1 md:grid-cols-2 mt-[-80px] md:mt-10">
            <div class="flex flex-col justify-center mb-[-80px] md:mb-0">
                <div class="text-white text-xl lg:text-3xl font-Manrope lg:mt-10">
                    Discover New Revenue Opportunities
                </div>
                <div class="text-[#ffffffb3] text-xs lg:text-base mt-4">
                    Telemetrics uncovers valuable business opportunities by providing insights into your telecom company's
                    data.
                    With our intelligent analytics solution, you'll have a comprehensive view of your company's performance,
                    customer behavior, and market trends. This data-driven approach empowers CEOs and managers to identify
                    potential revenue streams, optimize operations, and make informed business decisions. With Telemetrics,
                    you can unlock the full poten9al of your telecom company and achieve sustained growth.
                </div>
            </div>
            <div class="flex justify-center mb-[-180px] md:mb-0 mt-[-80px]">
                <div class="pieChart transform scale-75 lg:scale-100"></div>
            </div>
        </div>
    </div>

    <div class="p-10 !m-0 md:!-top-6 md:-left-6 !-top-3 -left-4 relative  lg:h-[70vh] w-[100vw] bg-[#5F29AD]">
        <div class="flex justify-center mt-[-300px] md:mt-[-150px]">
            <div class="timesaving"></div>
        </div>
    </div>
</div>
 
</template>
<script>
</script>
<style>
 .bgtm{
    background: url(@/assets/images/tm.webp) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 615px;
    height: 615px;
}

.progress {
    background: url(@/assets/images/progress.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 638px;
    height: 102px;
}

.barchart {
    background: url(@/assets/images/Barchart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1082px;
    height: 374px;
}

.degree {
    background: url(@/assets/images/360-degree.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1000px;
    height: 400px;

}

.pieChart {
    background: url(@/assets/images/pieChart.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 614.68px;
    height: 614.61px;
}

.timesaving {
    background: url(@/assets/images/Timesaving.svg) no-repeat;
    background-size: 100% 100%;
    background-color: transparent !important;
    width: 1100px;
    height: 700px;
}
</style>