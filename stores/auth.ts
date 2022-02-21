import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    mainPage: "first",
    contactpage: "first",
    logedIn:false,
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}