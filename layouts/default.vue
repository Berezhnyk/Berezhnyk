<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Ivan Berezhnyk ` : 'Ivan Berezhnyk'
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Personal site about Ivan Berezhnyk' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: 'https://avatars.githubusercontent.com/u/6099167?s=400&u=4a8d3ab9b1b207b8c2c2b812a87facbb7dee87e4&v=4' }
    ],
  link: [
    {
      rel: 'icon', type: 'image/jpeg', href: '../images/icon.jpeg',
    },
  ],
  script: [
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <CookieBar />
  </main>
</template>
