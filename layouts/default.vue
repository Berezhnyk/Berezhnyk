<script setup>
// Use Nuxt i18n composable
const { locale } = useI18n()

const ogImageUrl = `https://avatars.githubusercontent.com/u/6099167?s=400&u=4a8d3ab9b1b207b8c2c2b812a87facbb7dee87e4&v=4&t=${Date.now()}`

// Basic head configuration (non-SEO metadata)
useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Ivan Berezhnyk ` : 'Ivan Berezhnyk'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    {
      rel: 'icon', type: 'image/webp', href: '../images/icon.webp',
    },
  ],
})

// SEO metadata using the modern approach
useSeoMeta({
  title: 'Ivan Berezhnyk',
  description: 'Personal site about Ivan Berezhnyk',
  ogTitle: 'Ivan Berezhnyk',
  ogDescription: 'Personal site about Ivan Berezhnyk',
  ogImage: ogImageUrl,
  ogUrl: 'https://www.berezhnyk.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ivan Berezhnyk',
  twitterDescription: 'Personal site about Ivan Berezhnyk',
  twitterImage: ogImageUrl,
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
