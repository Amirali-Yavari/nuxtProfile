<template>
    <div class="w-full h-screen  flex flex-col gap-5 items-center justify-center">
        <h1 class="text-4xl md:text-6xl text-blue-900">404 | <span class="font-iran">Not Found</span> </h1>
        <h3 class="text-gray-600 font-iran">The path you entered ( {{$route.path}} ) not found</h3>
        <NuxtLink to="/" class>
            <div class="w-20 h-8 text-white font-iran flex items-center justify-center shadow-md active:bg-blue-700 bg-blue-900">Back</div>
        </NuxtLink>
    </div>
</template>