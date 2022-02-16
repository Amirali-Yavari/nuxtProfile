import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    name: "AMIRALI"
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}