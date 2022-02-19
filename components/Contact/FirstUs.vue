<template>
  <div class="w-full sm:w-1/2  flex flex-col p-10 gap-8 relative" ref="el">
    <ClientOnly>
        <transition name="modal">
          <LazyContactModalPage
            class="z-30"
            @closebtn="closebtn"
            :modalValue="modalValue"
            v-if="showModal"
          />
        </transition>
    </ClientOnly>
    <div
      @click="ScrollRight"
      class="absolute mb-1 sm:hidden bottom-0 right-4 cursor-pointer font-bold select-none"
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
    <h1 class="text-3xl text-blue-900">Contact Us</h1>
    <p class="text-lg">
      If you want to contact me i give you 4 ways to you if you see any bug or
      something new please tell me I will be happy
    </p>
    <div class="grid grid-cols-2 grid-rows-2 gap-2">
      <div
        @click="instagram"
        class="flex flex-row gap-1 items-center text-lg select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300 bg-gray-200"
      >
        <img
          class="w-10 h-10"
          src="MyImage/icons8-instagram-48.png"
          alt=""
        />
        Instagram
      </div>
      <div
        @click="telegram"
        class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
      >
        <img
          class="w-10 h-10"
          src="MyImage/icons8-telegram-app-48.png"
          alt=""
        />
        Telegram
      </div>
      <div
        @click="email"
        class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
      >
        <img
          class="w-8 h-8 mr-1 ml-1"
          src="MyImage/icons8-email-sign-100.png"
          alt=""
        />
        Email
      </div>
      <div
        @click="github"
        class="flex flex-row items-center text-lg gap-1 select-none transform hover:scale-105 transition cursor-pointer shadow-md ring-1 ring-gray-300"
      >
        <img
          class="w-10 h-10"
          src="MyImage/icons8-github-48.png"
          alt=""
        />
        Github
      </div>
    </div>
  </div>
</template>
<script setup>
//pinia
import { useAuth } from "@/stores/auth"
const auth = useAuth()
//Swipe to
    const el = ref(null);
    const { isSwiping, direction } = useSwipe(el, {
      onSwipeEnd() {
        if (direction.value == "LEFT") {
          auth.$patch({
            contactpage: "second"
          })
        }
      },
    });
//data
let modalValue = ref("");
let showModal = ref(false);
//function
    function ScrollRight() {
      auth.$patch({
        contactpage: "second"
      })
    }
    function closebtn() {
      modalValue.value = "";
      showModal.value = false;
    }
    //---------------------------
    function instagram() {
      modalValue.value = "Instagram";
      showModal.value = true;
    }
    //---------------------------
    function telegram() {
      modalValue.value = "Telegram";
      showModal.value = true;
    }
    //---------------------------
    function email() {
      modalValue.value = "Email";
      showModal.value = true;
    }
    //---------------------------
    function github() {
      modalValue.value = "Github";
      showModal.value = true;
    }
    //---------------------------
</script>
<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.1);
  transition: all 0.5s ease;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
  transition: all 0.5s ease;
}
</style>