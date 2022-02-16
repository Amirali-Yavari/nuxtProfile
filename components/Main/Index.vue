<template>
    <div>
        <div class="flex flex-nowrap h-[95vh] w-full touch-pan-x bg-gray-200">
            <MainFirst />
            <MainSecond v-if="smAndLarger" />
        </div>
    </div>
</template>
<script setup>
import { useAuth } from "@/stores/auth"

const auth = useAuth()

import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>