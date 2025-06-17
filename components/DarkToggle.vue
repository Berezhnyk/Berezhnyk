<script setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
const themeColor = computed(() => {
  return color.value
})
</script>

<template>
  <button @click="toggleDark" class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
    <Icon :name="themeColor === 'dark' ? 'sun' : 'moon'" :size="20" />
  </button>
</template>
