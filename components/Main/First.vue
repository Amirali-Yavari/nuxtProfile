<template>
<div
    ref="el"
    class="h-screen md:h-[92vh] w-full sm:w-1/2 snap-center relative flex sm:z-10 z-20"
  >
    <div
      @click="changeToSecond"
      class="absolute mb-1 sm:hidden animate-pulse bottom-[50%] right-4 cursor-pointer font-bold select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 rounded-full text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
    <div class="p-10 flex flex-col gap-8">
        <MainLogo v-show="show" class="z-10"/>
        <MainTitle v-show="show" class="z-10"/>
        <MainSummary v-show="show" class="z-10"/>
        <MainReadMore v-show="show" class="z-10"/>
    </div>
  </div>
</template>
<script setup>
import { gsap } from 'gsap'

onMounted(() => {
  setTimeout(() => {
    show.value = true
    gsap.from('.moz', {
      stagger: 0.2,
      opacity: 0,
      y: 30,
      duration: 1
    })
  }, 100)
})

const show = ref(false)

const router = useRouter();
//Swipe to
    const el = ref(null);
    const { isSwiping, direction } = useSwipe(el, {
      onSwipeEnd() {
        if (direction.value == "LEFT") {
          router.push('/main/2')
        }
      },
    });
//function
function changeToSecond(){
  router.push('/main/2')
}

</script>