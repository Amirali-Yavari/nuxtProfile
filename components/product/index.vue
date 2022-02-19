<template>
  <div
    class="flex flex-col gap-4 md:w-1/3 ring-1 ring-gray-300 bg-gray-100 p-4 h-[70vh] relative select-none"
  >
    <img
      v-if="image == 1"
      src="MyImage/image1.jpg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      alt="Amirali Yavari Project Picture"
    />
    <img
      v-if="image == 2"
      src="MyImage/image3.jpeg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      alt="Amirali Yavari Project Picture"
    />
    <img
      v-if="image == 3"
      src="MyImage/image2.jpg"
      class="h-1/2 w-full object-cover object-center shadow-md"
      alt="Amirali Yavari Project Picture"
    />
    <h1 class="text-3xl text-blue-900 border-b-2 border-pink-500 w-[50%]">
      {{ title }}
    </h1>
    <p class="md:text-xl">
      {{ text }}
    </p>
    
  </div>
</template>
<script setup>
const props=defineProps({
    title: String,
    text: String,
    image: String,
    show: Number,
  },)
</script>