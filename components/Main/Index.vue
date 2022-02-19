<template>
    <div>
        <div class="flex flex-nowrap h-[95vh] w-full touch-pan-x bg-gray-200">
            <transition name="firstPage">
                <LazyMainFirst v-if="auth.mainPage=='first'" />
            </transition>
            <transition name="secondPage">
                <LazyMainSecond v-if="smAndLarger|| auth.mainPage=='second'" />
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
  width: 0;
  opacity: 0;
  transition: all 0.1s ease;
}
.firstPage-enter-to,
.firstPage-leave-from {
  width: 100%;
  opacity: 1;
  transition: all 0.1s ease;
}
.secondPage-enter-from,
.secondPage-leave-to {
  transform: translateX(300px);
  width: 0;
  opacity: 0;
  transition: all 0.1s ease;
}
@media (min-width: 480px) {
  .secondPage-enter-to,
  .secondPage-leave-from {
  width: 50%;
  opacity: 1;
  transition: all 0.1s ease;
}
}
@media (max-width: 480px) {
  .secondPage-enter-to,
  .secondPage-leave-from {
  width: 100%;
  opacity: 1;
  transition: all 0.1s ease;
}
}
</style>