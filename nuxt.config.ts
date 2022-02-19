import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fontiran.css'
  ],
  build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {}
          }
        }
      }
    }
})
