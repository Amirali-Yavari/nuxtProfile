<template>
  <div
    class="h-[9rem] w-1/2 sm:w-1/3 md:w-1/5 bg-gray-600/90 fixed left-0 bottom-16 z-30 text-white flex flex-col"
  >
    <NuxtLink to="/">
      <div
        class="h-full text-xl select-none cursor-pointer hover:bg-gray-700/90 transition p-1 flex flex-row gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Home
      </div>
    </NuxtLink>
    <NuxtLink to="/profile">
      <div
        class="h-full text-xl select-none cursor-pointer hover:bg-gray-700/90 transition p-1 flex flex-row gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--iconoir"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g stroke-width="1.5" fill="none">
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Profile
      </div>
    </NuxtLink>

    <NuxtLink to="/product"
      ><div
        class="h-full text-xl select-none cursor-pointer hover:bg-gray-700/90 transition p-1 flex flex-row gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ion"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16z"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
          ></path>
        </svg>
        Products
      </div></NuxtLink
    >
    <NuxtLink to="/contactUs">
      <div
        class="h-full text-xl select-none cursor-pointer hover:bg-gray-700/90 transition p-1 flex flex-row gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--fluent"
          width="28"
          height="28"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
        >
          <g fill="none">
            <path
              d="M6.535 2.116c-1.04-.264-2.13-.152-2.984.326c-.87.486-1.48 1.348-1.51 2.501c-.046 1.802.371 4.22 2.027 7.058c1.635 2.803 3.44 4.483 4.938 5.481c.946.631 1.991.648 2.884.237c.88-.405 1.594-1.214 1.965-2.217a1.838 1.838 0 0 0-.12-1.536l-.954-1.702a2.5 2.5 0 0 0-3.074-1.114l-.666.255c-.323.123-.62.066-.788-.1c-.565-.555-.969-1.308-1.152-2.12c-.058-.256.06-.558.342-.771l.601-.454a2.5 2.5 0 0 0 .663-3.239l-.972-1.695a1.929 1.929 0 0 0-1.2-.91zM3.041 4.97c.02-.774.412-1.327.998-1.655c.602-.337 1.424-.44 2.25-.23c.245.062.453.22.579.439l.971 1.695a1.5 1.5 0 0 1-.397 1.943l-.601.454c-.52.392-.88 1.064-.716 1.789c.222.982.713 1.913 1.427 2.614c.522.512 1.266.542 1.846.32l.666-.255a1.5 1.5 0 0 1 1.845.668l.953 1.703c.12.214.14.47.055.7c-.29.785-.835 1.374-1.445 1.655c-.597.275-1.272.267-1.911-.16c-1.371-.914-3.07-2.481-4.63-5.153C3.37 8.817 3 6.583 3.042 4.97zm9.702-2.908a.5.5 0 1 0-.486.874l.384.214a8.5 8.5 0 0 1 4.33 6.584l.032.315a.5.5 0 1 0 .994-.1l-.031-.314a9.5 9.5 0 0 0-4.84-7.36l-.383-.213zm-1.172 2.68a.5.5 0 0 1 .686-.171l.124.074A6.5 6.5 0 0 1 15.45 9.15l.044.267a.5.5 0 1 1-.986.165l-.045-.267a5.5 5.5 0 0 0-2.595-3.812l-.124-.075a.5.5 0 0 1-.172-.686z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        ContactUs
      </div>
    </NuxtLink>
  </div>
</template>
