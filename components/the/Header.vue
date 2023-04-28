<template>
  <div v-on:scrool="checkPosition()" ref="root" class="bg-[#000036]">
    <nav class="max-w-[1073px] block mx-auto px-4 md:px-12 xl:px-0">
      <div class="flex justify-between py-5">
        <span class="text-[#7562E0] font-semibold text-2xl">Gal Annonim</span>
        <div class="items-center gap-4 text-white hidden xl:flex">
          <NuxtLink
            v-for="nav in navigation"
            :key="nav.id"
            :to="{ path: '/', hash: nav.link }"
            class="font-semibold text-lg leading-7 hover:text-violet-300"
            >{{ nav.name }}</NuxtLink
          >
        </div>
        <div @click="isOpen = !isOpen" class="xl:hidden text-[#282162] flex flex-col gap-1 pointer text-white absolute top-4 right-4 bg-white h-12 w-12 text-violet-800 items-center justify-center flex rounded-full">
          <div class="w-6 h-1 bg-black rounded"></div>
          <div class="w-6 h-1 bg-black rounded"></div>
          <div class="w-6 h-1 bg-black rounded"></div>

        </div>
        <Transition>
          <div
            v-if="isOpen"
            class="h-screen w-screen xl:hidden bg-violet-800 flex items-center justify-center fixed top-0 left-0 flex-col gap-3 text-white text-xl"
          >
            <div
              @click="isOpen = !isOpen"
              class="absolute top-4 right-4 bg-white h-12 w-12 text-violet-800 items-center justify-center flex rounded-full"
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5003-512.png"
                alt=""
                class="w-1/2"
              />
            </div>
            <NuxtLink
              v-for="nav in navigation"
              :key="nav.id"
              :to="{ path: '/', hash: nav.link }"
              @click="isOpen = !isOpen"
              class="font-semibold text-lg leading-7 hover:text-violet-300"
              >{{ nav.name }}</NuxtLink
            >
          </div>
        </Transition>
      </div>
    </nav>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const root = ref(null);
const sticky = ref(false);

const navigation = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "About me",
    link: "#about",
  },
  {
    id: 3,
    name: "Offer",
    link: "#offer",
  },
  {
    id: 4,
    name: "Project",
    link: "#projects",
  },
  // {
  //   id: 4,
  //   name: "Contact",
  //   link: "#contact",
  // },
];

</script>
