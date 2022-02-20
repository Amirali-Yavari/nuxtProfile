<template>
    <div class="bg-gray-200">
      <Particles              
                id="tsparticles"
                :options="{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 1
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#f0f'
                        },
                        links: {
                            color: '#f0f',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'top',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 2,
                            gravity:{
                              enable: false
                            },
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
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