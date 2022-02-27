<template>
    <div class="h-screen w-full font-iran flex flex-row items-center bg-gray-200"> 
      <ClientOnly>
        <transition name="tip">
          <TipContact v-if="!smAndLarger && showTip" />
        </transition>
          <NotifyOnline v-if="online==false" />
      </ClientOnly>
        <Title>Contact Us</Title>
            <LazyContactFirstUs />
            <LazyContactSecondUs v-if="smAndLarger" />
    </div>
</template>
<script setup>
const showTip = ref(true)
onMounted(() => {
  setTimeout(()=>{
    showTip.value=false
  },5000)
})
//online check
const online=useOnline()
//meta 
useMeta([
  {name:"robots",content:"index,nofollow"},
])
// change title
const title=useTitle();
title.value="Contact Us"
//breakpoints
import { breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>