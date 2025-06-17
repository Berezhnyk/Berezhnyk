<script setup>
import { useLocaleStore } from '../composables/locale'
import { useI18n } from 'vue-i18n'

const cookieLocale = useLocaleStore()
const { locale, availableLocales } = useI18n({ useScope: 'global' })

function changeLocation(event) {
  const selectedLocale = event.target.value
  locale.value = selectedLocale
  cookieLocale.setLocale(selectedLocale)
  localStorage.setItem('locale', selectedLocale)
}
</script>

<template>
  <select 
    :value="locale" 
    @change="changeLocation"
    class="bg-gray-400 text-gray-800 dark:bg-gray-800 dark:text-gray-400 border-0 rounded px-2 py-1"
  >
    <option v-for="availableLocale in availableLocales" :key="availableLocale" :value="availableLocale">
      <img :src="`/flags/${availableLocale}.png`" :alt="availableLocale" class="inline h-4 w-4 mr-1">
      {{ availableLocale }}
    </option>
  </select>
</template>
