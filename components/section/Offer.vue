<template>
  <div id="offer" class="bg-[#282162] pb-[80px]">
    <div class="max-w-[1073px] block mx-auto px-4 md:px-12 xl:px-0">
      <div class="flex flex-col">
        <p class="text-3xl text-[#7562E0] leading-12 font-semibold">
          The servies and offer:
        </p>
        <div class="pt-6 grid grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          <div
            v-for="item in technologies"
            :key="item.id"
            class="rounded-lg border-2 border-white flex flex-col items-center justify-center px-2 py-8 even:border-[#7562E0] min-h-[300px] text-white odd:text-[#7563E0]"
          >
            <span>Icon</span>
            <span class="mt-2 text-3xl">UI & UX DESIGNING</span>
            <span class="mt-4 text-xl">Lorem ipsum dolor sit amet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    id: 1,
    name: "UX & UI <br/> Designing",
  },
  {
    id: 2,
    name: "Web <br/> Development",
  },
  {
    id: 3,
    name: "Mobile <br/> Development",
  },
  {
    id: 4,
    name: "Web scraping <br/> with python",
  },
  {
    id: 3,
    name: "Mobile <br/> Development",
  },
  {
    id: 4,
    name: "Web scraping <br/> with python",
  },
];
</script>
