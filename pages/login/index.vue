<template>
    <div class="w-full h-screen flex items-center justify-center p-2">
    <FormKit form-class="font-iran bg-white w-full sm:w-1/3 p-5 flex flex-col gap-3 justify-center z-30 shadow-md rounded-sm" type="form" :actions="false" v-model="formdata" @submit="formSubmit" submit-label="Login">
        <FormKit
        placeholder="Please enter the email"
        input-class="bg-gray-200 p-1 shadow-sm rounded-sm w-full"
        label="Email"
        label-class="text-blue-900 font-bold "
        type="email"
        validation-visibility="blur"
        validation="required|*email|length:6"
        :validation-message="{
            email:'Email is required'
        }"
        message-class="text-pink-600 text-sm"
        >
        </FormKit>
        <FormKit
        placeholder="Please enter the Password"
        input-class="bg-gray-200 p-1 shadow-sm rounded-sm w-full"
        label="Password"
        label-class="text-blue-900  font-bold"
        type="password"
        validation-visibility="blur"
        validation="required|*password|length:8"
        :validation-message="{
            password:'Password is required'
        }"
        message-class="text-pink-600 text-sm"
        >
        </FormKit>
        <FormKit type="submit" input-class="bg-blue-900 px-3 py-1 text-white shadow-md">
            Login
        </FormKit>
    </FormKit>
    </div>
</template>
<script setup>
//title
const title = useTitle();
title.value='Login'
//meta
useMeta([
    {name:'robots',content:'noindex,nofollow'}
])
//pinia
import { useAuth } from "@/stores/auth"
const auth = useAuth()
//router
const router = useRouter();
//form datas
const formdata = ref();
//functions
function formSubmit() {
    //check email
    if(formdata.value.email_2 === "amiraliyavari785@gmail.com") {
        //check password
        if(formdata.value.password_3 === "Amir1381") {
            auth.$patch({
                logedIn:true
            })
            router.push('/admin')
        }else {
            //password wrong error
            console.error('password wrong')
        }
    }else {
        //email wrong error
        console.error('email is wrong')
    }
}
</script>