<template>
    <div class="h-screen w-full flex items-center justify-center">
        <div class="max-h-[50vh] bg-white p-2 shadow-md border border-slate-300 max-w-2xl z-50">
            <h3 class="text-center text-2xl m-2 mb-3">
                Login
            </h3>
            <FormKit
                v-model="formdata"
                type="form"
                form-class="font-iran p-2"
                :actions="false"
                incomplete-message="please complete the fields correctly"
                messages-class="text-sm text-red-500"
                @submit="login"
            >
                <FormKit
                    type="text"
                    input-class="inp"
                    label="Username"
                    placeholder="Username"
                    validation="required"
                    :validation-messages="{
                    required: 'Username is required'
                    }"
                    messages-class="text-sm text-red-500"
                />
                <FormKit
                    type="password"
                    input-class="inp"
                    label="Password"
                    outer-class="mt-3"
                    validation="required|length:8"
                    :validation-messages="{
                    length: 'password most be more than 8 character',
                    required: 'password is required'
                    }"
                    messages-class="text-sm text-red-500"
                />
                <FormKit
                    label="Login"
                    type="submit"
                    input-class="w-full py-1.5 flex space-x-1 space-x-reverse justify-center items-center bg-sky-600 text-sky-50 rounded-[0.200rem] shadow-md shadow-sky-300/30 mt-3"
                />
            </Formkit>
        </div>
    </div>
</template>

<script setup>
const formdata = ref({})

const login = () => {
  console.log(formdata.value)
}
</script>

<style>
.inp{
    @apply bg-white border border-slate-300 p-2 mt-3 w-full rounded-[0.200rem];
}
</style>