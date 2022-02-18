<template>
    <div>
        <div class="flex flex-nowrap h-[95vh] w-full touch-pan-x bg-gray-200">
            <transition name="firstPage">
                <MainFirst v-if="auth.mainPage=='first'" />
            </transition>
            <transition name="secondPage">
                <MainSecond v-if="auth.mainPage=='second'" />
            </transition>
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
<style scoped>
.firstPage-enter-from,
.firstPage-leave-to {
    transform: translateX(-300px);
  opacity: 0;
  transition: all 0.2s ease;
}
.firstPage-enter-to,
.firstPage-leave-from {
  opacity: 1;
  transition: all 0.2s ease;
}
.secondPage-enter-from,
.secondPage-leave-to {
  transform: translateX(300px);
  width: 0%;
  opacity: 0;
  transition: all 0.1s ease;
}
.secondPage-enter-to,
.secondPage-leave-from {
  transform: translateX(0px);
  width: 100%;
  opacity: 1;
  transition: all 0.5s ease;
}
</style>