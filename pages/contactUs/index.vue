<template>
    <div class="h-screen w-full flex flex-row items-center bg-gray-200">
        <Title>Contact Us</Title>
        <transition name="firstPage">
            <LazyContactFirstUs v-if="auth.contactpage=='first'" />
        </transition>
        <transition name="secondPage">        
            <LazyContactSecondUs v-if="auth.contactpage=='second'||smAndLarger" />
        </transition>
    </div>
</template>
<script setup>
//meta 
useMeta([
  {name:"robots",content:"noindex,nofollow"},
])
//pinia
import { useAuth } from "@/stores/auth"
const auth = useAuth()
// change title
const title=useTitle();
title.value="Contact Us"
//breakpoints
import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>
<style scoped>
.firstPage-enter-from,
.firstPage-leave-to {
  width: 0%;
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
  transform: translateX(10vw);
  width: 0%;
  opacity: 0;
  transition: all 0.1s ease;
}
.secondPage-enter-to,
.secondPage-leave-from {
  transform: translateX(0px);
  width: 100%;
  opacity: 1;
  transition: all 0.1s ease;
}
</style>