<template>
<div>
  <ClientOnly>
    <NotifyOnline v-if="online==false" />
  </ClientOnly>
  <Title>Profile and About me of Amirali Yavari</Title>
  <div class="h-screen w-full font-iran flex bg-gray-200">
    <div class="w-full flex flex-col p-5 gap-1">
      <div class="w-full flex items-center justify-center">
        <img
          src="/MyImage/amir2.png"
          class="rounded-full z-20 w-1/3 md:fixed md:h-full md:right-0 md:top-0 md:rounded-none md:w-2/4  md:object-cover"
          alt="This is Amirali Yavari Profile Image"
        />
      </div>
      <div
        class="md:w-2/4 w-full mt-2 md:flex md:flex-col md:justify-center md:h-screen md:gap-5"
      >
        <h1 class="text-3xl md:text-5xl z-20 text-blue-900">Profile</h1>
        <p class="text-lg md:text-2xl z-20">
          Im a Front-End Developer and Designer
        </p>
        <h2 class="text-3xl md:text-3xl z-20 text-blue-900">About Me</h2>
        <p class="text-lg md:text-2xl z-20 mt-2">
          At first i programed the Windows application with C# then i know the
          PHP and i liked Back-End on thats time i meet
          <a
            href="https://github.com/shahabbasian/"
            class="text-pink-500"
            target="_blank"
            >Mr.ShahAbbasian</a
          >
          and
          <a href="https://damoon.pro/" target="_blank" class="text-pink-500"
            >Damoon</a
          >
          they helped me to find my way by the time I liked Front-End and
          Javascript
        </p>
      </div>
    </div>
  </div>
  <navbarBottom />
</div>
</template>
<script setup>
//online check
const online=useOnline()
useMeta([
  {name:"description",content:"About me of Amirali Yavari "},
  {name:"robots",content:"index,follow"},
  {name:"googlebot",content:"index,follow"},
  {name:"author",content:"Amirali Yavari"},
  {name:"keywords",content:"amirali,amirali yavari,yavari,shahabbasian,mehdi,mehdi shahabbasian,damoon,damoon.pro"}
])
//change title
const title=useTitle();
title.value="Profile"
</script>