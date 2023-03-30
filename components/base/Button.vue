<template>
  <button
    :class="
      transparent
        ? 'bg-transparent text-white border-white hover:bg-white hover:text-violet-500'
        : 'bg-white text-violet-500 border border-violet-400 hover:bg-transparent hover:text-white'
    "
    class="rounded px-4 py-2 border w-full"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  transparent: Boolean,
});
</script>
