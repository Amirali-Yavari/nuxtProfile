<template>
    <div class="w-full h-screen flex items-center justify-center">
      <div class="bg-white w-full sm:w-1/2 z-20 shadow-md grid grid-cols-2 grid-rows-2 gap-2 p-3 font-iran">
        <div class="flex flex-col items-center select-none cursor-pointer bg-blue-800 rounded-md text-white gap-3 p-3 transform hover:scale-105 transition-all hover:bg-blue-600 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="70" height="70" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 20c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63M8.5 11H10V9H7.56l.94 2M11 9v2h3V9h-3m3-1V6h-3v2h3m3.11 1H15v2h1l1.11-2m1.67-3H15v2h2.67l1.11-2M6.14 6l.94 2H10V6H6.14Z"></path></svg>
          <h2 class="sm:text-xl">Manage Products</h2>
        </div>
        <div class="flex flex-col items-center select-none cursor-pointer bg-pink-700 rounded-md text-white gap-3 p-3 transform hover:scale-105 transition-all hover:bg-pink-600 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="70" height="70" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20 20H7a2 2 0 0 1-2-2V8.94l-2.77-3.3C2.09 5.47 2 5.24 2 5a1 1 0 0 1 1-1h17a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-10m0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Z"></path></svg>
          <h2 class="sm:text-xl">Contact Message</h2>  
        </div>
        <div class="flex flex-col items-center select-none cursor-pointer bg-amber-500 rounded-md text-white gap-3 p-3 transform hover:scale-105 transition-all hover:bg-amber-400 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gg" width="70" height="70" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"></path></g></svg>
          <h2 class="sm:text-xl">Manage Profile Page</h2>
        </div>
        <div class="flex flex-col items-center select-none cursor-pointer bg-teal-500 rounded-md text-white gap-3 p-3 transform hover:scale-105 transition-all hover:bg-teal-400 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="70" height="70" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13.17 4L18 8.83V20H6V4h7.17M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 8 17.43V18h8v-.57z"></path></svg>
            <h2 class="sm:text-xl">Manage Main Page</h2>
        </div>
      </div>
    </div>
</template>
<script>
definePageMeta({
  middleware: 'admin'
})
</script>