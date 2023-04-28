<template>
  <div id="projects" class="bg-[#282162] pb-32">
    <div class="max-w-[1073px] block mx-auto px-4 md:px-12 xl:px-0">
      <div class="flex flex-col">
        <p class="text-3xl text-[#7562E0] leading-12 font-semibold">
          Featured Projects:
        </p>
        <span class="text-white text-lg mt-4">I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</span>
        <div class="pt-6 grid grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-8 ">
          <div
            v-for="item in projects"
            :key="item.id"
            class="p-4 bg-[#31313F] flex flex-col rounded-lg"
            style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
          >
          <img src="~/assets/img/thumbnail-1.png" alt="">
          <span class="mt-4 text-[#7562E0] font-semibold text-2xl uppercase">TWINDER</span>
          <span class="mt-1 text-white text-lg">A live Geolocation app for finding tweets and twitter users around you.</span>
          <div class="mt-6 flex gap-4">
              <BaseButton>View live</BaseButton>
              <BaseButton transparent>Github Repo</BaseButton>

          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];
</script>
