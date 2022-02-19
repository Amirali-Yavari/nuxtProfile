<template>
    <div class="bg-gray-200">
      <div v-if="online==false" class="h-screen w-full z-30 bg-black"> Check your network  </div>
      <router-view v-slot="{ Component }">
        <transition name="Slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
      <navbarBottom />
    </div>
</template>
<style>
.Slide-enter-from {
  opacity: 0;
  transition: all 0.5s ease;
}
.Slide-enter-to {
  opacity: 1;
  transition: all 0.5s ease;
}
.Slide-leave-to {
  opacity: 0;
  transition: all 0.7s ease;
}
.Slide-leave-from {
  opacity: 1;
  transition: all 0.7s ease;
}
</style>
<script setup>
//online check
const online=useOnline()
</script>