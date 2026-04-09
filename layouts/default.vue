<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')

const ogImageUrl = 'https://avatars.githubusercontent.com/u/6099167?s=400&u=4a8d3ab9b1b207b8c2c2b812a87facbb7dee87e4&v=4'

useHead({
  htmlAttrs: { lang: safeLocale },
  titleTemplate: (pageTitle) => (pageTitle ? `${pageTitle} — Ivan Berezhnyk` : 'Ivan Berezhnyk'),
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#f3ece0' },
  ],
  link: [
    { rel: 'icon', type: 'image/webp', href: '/images/icon.webp' },
  ],
})

useSeoMeta({
  title: 'Ivan Berezhnyk',
  description: 'Personal site of Ivan Berezhnyk — Senior Software Engineer, API & Web Development',
  ogTitle: 'Ivan Berezhnyk',
  ogDescription: 'Personal site of Ivan Berezhnyk — Senior Software Engineer, API & Web Development',
  ogImage: ogImageUrl,
  ogUrl: 'https://www.berezhnyk.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ivan Berezhnyk',
  twitterDescription: 'Personal site of Ivan Berezhnyk',
  twitterImage: ogImageUrl,
})
</script>

<template>
  <main class="page">
    <Letterhead />
    <Nav />
    <div class="page__body">
      <slot />
    </div>
    <Footer />
    <CookieBar />
    <SpeedInsights />
  </main>
</template>

<style>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.25rem 3rem;
  position: relative;
}

.page__body {
  margin-top: 3rem;
}
.page__body > * + * {
  margin-top: 4rem;
}

@media (min-width: 900px) {
  .page {
    max-width: 780px;
    padding: 3rem 2rem 4rem;
  }
  .page__body {
    margin-top: 3.5rem;
  }
}
</style>
