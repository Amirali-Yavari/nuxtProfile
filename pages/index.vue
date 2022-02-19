<template>
    <div>
        <Title>Amirali Yavari Main Page</Title>
        <Main />
    </div>
</template>
<script setup>
//meta
useMeta([
    {name:"description",content:"This is Amirali Yavari personal website"},
    {name:"robots",content:"index, follow"},
    {name:"viewport", content:"width=device-width, initial-scale=1"},
    {name:"googlebot",content:"index,follow"},
    {name:"keywords",content:"Amirali,Yavari,amirali yavari,yavary,damoon,programmer,js,Nuxt,vue"},
    {name:"author",content:"Amirali Yavari"}
])
//change title
const title=useTitle();
title.value="Amirali Yavari"
</script>