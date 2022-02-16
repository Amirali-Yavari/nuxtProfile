import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    // '@nuxtjs/composition-api/module',
    // '@pinia/nuxt',
  ],
    css: [    '~/assets/css/main.css',  ],
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
