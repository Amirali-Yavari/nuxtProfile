<template>
<div
    class="h-screen md:h-[92vh] w-full sm:w-1/2 snap-center relative flex sm:z-10 z-20"
  >
    <div
      class="absolute mb-1 sm:hidden animate-bounce bottom-[50%] right-4 cursor-pointer font-bold select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 bg-pink-500 rounded-full text-white"
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
        <MainLogo class="z-10"/>
        <MainTitle class="z-10"/>
        <MainSummary class="z-10"/>
        <MainReadMore class="z-10"/>
    </div>
  </div>
</template>