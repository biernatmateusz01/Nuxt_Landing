<template>
  <div id="home" class="bg-[#282162]">
    <div class="max-w-[1073px] block mx-auto px-4 md:px-12 xl:px-0">
      <div class="w-full flex-col xl:flex-row flex pt-[70px] gap-16 xl:gap-[128px]">
        <div class="w-full xl:w-1/2 flex flex-col justify-center">
          <span class="font-semibold text-white text-[32px]">Hello, i'm</span>
          <span class="mt-[6px] text-white text-[52px] text-white font-semibold"
            >Gal Annonim</span
          >
          <span class="mt-4 txt-white text-[18px] text-white"
            >Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.</span
          >
          <div class="flex gap-2 mt-6">
            <BaseButton> About me </BaseButton>
            <BaseButton transparent> Projects </BaseButton>
          </div>
        </div>
        <div class="w-full xl:w-1/2">
          <div
            class="xl:h-[486px] xl:w-[486px] bg-[#7562E0] rounded-full flex items-center justify-center overflow-hidden animate-pulseCo"
          >
            <img src="~/assets/img/Heading-img.png" alt="Gal Annonim" />
          </div>
        </div>
      </div>

    </div>
  </div>
    <div class="bg-special-violet h-[128px] bg-[#000036] z-10 relative mt-[-60px]"></div>

</template>
