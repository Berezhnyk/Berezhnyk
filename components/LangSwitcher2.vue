<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
const { locale } = useI18n({ useScope: 'global' })

const cookieLocale = useLocaleStore()

// Define available locales
const availableLocales = ['en', 'uk_UA', 'cz_CZ']

onMounted(() => {
  useLocaleStore()
})

function changeLang() {
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  const nextLocale = availableLocales[nextIndex]
  
  cookieLocale.setLocale(nextLocale)
  locale.value = nextLocale
}
</script>

<template>
  <div class="cursor-pointer transition-all fade" @click="changeLang()">
    <img :src="`/flags/${locale}.png`" class="h-6">
  </div>
</template>

<style scoped>
    .p-dropdown {
        border: none!important;
    }
</style>
