<template>
    <div class="w-full h-screen flex items-center justify-center p-2">
    <FormKit form-class="bg-white w-full sm:w-1/3 p-5 justify-center z-30" type="form">
        <FormKit
        placeholder="Please enter the email"
        input-class="bg-gray-200 p-1 rounded-sm"
        label="Email"
        type="email"
        validation-visibility="blur"
        validation="required|*email|length:6"
        >
        </FormKit>
        <FormKit
        placeholder="Please enter the Password"
        input-class="bg-gray-200 p-1 rounded-sm"
        label="Password"
        type="password"
        validation-visibility="blur"
        validation="required|*password|length:8"
        >
        </FormKit>
    </FormKit>
    </div>
</template>