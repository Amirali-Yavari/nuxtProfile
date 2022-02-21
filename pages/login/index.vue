<template>
    <div class="w-full h-screen flex items-center justify-center p-2">
    <FormKit form-class="bg-white w-full sm:w-1/3 p-5 flex flex-col gap-3 justify-center z-30 shadow-md" type="form" v-model="formdata" @submit="formSubmit" submit-label="Login">
        <FormKit
        placeholder="Please enter the email"
        input-class="bg-gray-200 p-1 shadow-sm rounded-sm sm:w-2/3"
        label="Email"
        label-class="text-blue-900 font-bold font-iran"
        type="email"
        validation-visibility="blur"
        validation="required|*email|length:6"
        >
        </FormKit>
        <FormKit
        placeholder="Please enter the Password"
        input-class="bg-gray-200 p-1 shadow-sm rounded-sm sm:w-2/3"
        label="Password"
        label-class="text-blue-900 font-iran font-bold"
        type="password"
        validation-visibility="blur"
        validation="required|*password|length:8"
        >
        </FormKit>
    </FormKit>
    </div>
</template>
<script setup>
//form datas
const formdata=ref();
//functions
function formSubmit() {
    //check email
    if(formdata.value.email_2 === "amiraliyavari785@gmail.com") {
        //check password
        if(formdata.value.password_3 === "Amir1381") {
            console.log('success')
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