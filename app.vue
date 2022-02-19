<template>
    <div class="bg-gray-200">
      <router-view class="z-20" v-slot="{ Component }">
        <transition name="Slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
      <navbarBottom v-if="online===true" />
    </div>
</template>
<script setup>
const online =useOnline();
</script>
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