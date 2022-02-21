//pinia
import { useAuth } from "@/stores/auth"
const auth = useAuth()
//check for loged in or no
export default defineNuxtRouteMiddleware( () => {
    if(auth.logedIn === false) {
        return navigateTo('/login')
    }
})