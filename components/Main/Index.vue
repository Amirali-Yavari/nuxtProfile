<template>
    <div>
        <div class="flex flex-nowrap h-[95vh] w-full touch-pan-x bg-gray-200">
                <LazyMainFirst />
                <LazyMainSecond v-if="smAndLarger" />
        </div>
    </div>
</template>
<script setup>
//data
//breakpoints
import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>
