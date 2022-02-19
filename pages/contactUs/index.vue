<template>
    <div class="h-screen w-full flex flex-row items-center bg-gray-200">
        <Title>Contact Us</Title>
        <ContactFirstUs />
        <ContactSecondUs />
    </div>
</template>
<script setup>
// change title
const title=useTitle();
title.value="Contact Us"
</script>