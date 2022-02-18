<template>
    <div>
        <div class="flex flex-nowrap h-[95vh] w-full touch-pan-x bg-gray-200">
            <MainFirst v-if="auth.mainPage=='first'" />
            <MainSecond v-if="auth.mainPage=='second'" />
        </div>
    </div>
</template>
<script setup>
//pinia
import { useAuth } from "@/stores/auth"
const auth = useAuth()
//data
//breakpoints
import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>