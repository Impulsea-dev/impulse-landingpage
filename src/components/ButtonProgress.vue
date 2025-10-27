<template>
    <component :is="isAnchor ? 'a' : 'router-link'" :target="target" :to="!isAnchor && to" :href="isAnchor && href"
        :class="[`inline-block skew-x-0 text-center cursor-pointer rounded-full hover:before:rounded-full border-[1.5px] 
        border-black before:absolute before:-inset-0.5 before:origin-right 
        before:scale-x-0 hover:text-white hover:before:origin-left hover:before:scale-x-100 
        ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 
        motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 
        motion-safe:hover:before:ease-out motion-safe:before:rounded-full`, props.class]">
        <span class="inline-block skew-x-0">
            <slot />
        </span>
    </component>
</template>
<script setup>
const props = defineProps(['class', 'to', 'target', 'isAnchor', 'href'])
</script>