<template>
  <div class="w-full sm:w-1/2 h-[92vh] sm:h-[95vh] relative z-10" ref="el">
    <div
    @click="changeToFirst"
      class="absolute mb-1 sm:hidden animate-pulse bottom-[50%] left-4 cursor-pointer text-pink-500 font-bold select-none"
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
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
    <img
      src="/MyImage/amir.png"
      class="object-cover lg:object-contain  w-full h-[95vh] xl:h-[100vh]"
      alt="This is Amirali Yavari Image"
    />
  </div>
</template>
<script setup>
const router = useRouter();
//Swipe to
const el = ref(null);
const { isSwiping, direction } = useSwipe(el, {
  onSwipeEnd() {
    if (direction.value == "RIGHT") {
      router.push('/')
    }
  },
});// function
function changeToFirst(){
router.push('/')
}
</script>