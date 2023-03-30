<template>
  <div class="bg-[#282162]">
    <div class="max-w-[1073px] block mx-auto py-[55px] text-white px-4 md:px-12 xl:px-0">
      <div class="flex flex-col">
        <p class="text-3xl text-[#7562E0] leading-12 font-semibold">
          About me:
        </p>
        <span class="text-white leading-12 text-lg mt-2">
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </span>
        <div class="mt-6 gap-12 flex items-center max-w-[1073px] block mx-auto">
          <span class="text-[96px] font-semibold text-[#7562E0]">5+</span>
          <span class="text-2xl"
            >Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.</span
          >
        </div>
      </div>
      <div
        class="mt-[58px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="item in technologies"
          :key="item.id"
          class="p-4 h-[250px] bg-[#848191] flex items-end text-lg hover:bg-[#7562E0] gap-4"
        >
          <div class="flex flex-col gap-4">
            <span>Icon</span>
            <span v-html="item.name" class="uppercase"></span>
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
];
</script>
