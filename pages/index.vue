<template>
    <div>
        <Title>Amirali Yavari</Title>
        <Main />
    </div>
</template>
<script setup>
//meta
useMeta([
    {name:"description",content:"This is Amirali Yavari personal website"},
    {name:"robots",content:"index, follow"},
    {name:"viewport", content:"width=device-width, initial-scale=1"},
    {name:"googlebot",content:"index,follow"}
])
//change title
const title=useTitle();
title.value="Amirali Yavari"
</script>