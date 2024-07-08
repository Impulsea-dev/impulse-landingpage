<template>
    <div class="flex flex-grow mt-52 scale-50 xl:scale-100">
        <div class="stack">
            <div v-for="block in blocks" :key="block.name" class="block" :class="block.name" :style="{
                backgroundImage: `url(${getBlockImage(block.index)})`,
                transform: getBlockTransform(block.index)
            }">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    activeBlock: {
        type: Number
    }
});

const blocks = ref([
    { name: 'block1', index: 0 },
    { name: 'block2', index: 1 },
    { name: 'block3', index: 2 },
    { name: 'block4', index: 3 },
    { name: 'block5', index: 4 },
    { name: 'block6', index: 5 }
]);

const getBlockImage = (index) => {
    const normalImages = [
        new URL('../assets/images/svgs/ImpulsePay.svg', import.meta.url).href,
        new URL('../assets/images/svgs/ImpulseCRM.svg', import.meta.url).href,
        new URL('../assets/images/svgs/Analytics.svg', import.meta.url).href,
        new URL('../assets/images/svgs/Results.svg', import.meta.url).href,
        new URL('../assets/images/svgs/NetworkIntegrations.svg', import.meta.url).href,
        new URL('../assets/images/svgs/ProcessAutomation.svg', import.meta.url).href

    ];
    const transparentImages = [
        new URL('../assets/images/svgs/IPT.svg', import.meta.url).href,
        new URL('../assets/images/svgs/ICRMT.svg', import.meta.url).href,
        new URL('../assets/images/svgs/AT.svg', import.meta.url).href,
        new URL('../assets/images/svgs/RT.svg', import.meta.url).href,
        new URL('../assets/images/svgs/NIT.svg', import.meta.url).href,
        new URL('../assets/images/svgs/PAT.svg', import.meta.url).href

    ];

    return props.activeBlock === -1 ? normalImages[index] : index === props.activeBlock ? normalImages[index] : transparentImages[index];

}

const getBlockTransform = (index) => {
    const transforms = [
        'translateY(100px)',
        'translateY(0px)',
        'translateY(-100px)',
        'translateY(-220px) translateX(40px) scale(130%)',
        'translateY(-10px) translateX(-60px)',
        'translateY(-10px) translateX(340px)'

    ];
    return transforms[index];
}
</script>

<style scoped>
.stack {
    position: relative;
}

.block {
    height: 300px;
    width: 580px;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
}

.block4 {
    z-index: 2;
}

.block5 {
    z-index: 0;
}

.block6{
    z-index: 0;
}
</style>
