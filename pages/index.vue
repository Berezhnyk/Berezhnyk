<script setup>
import { Icon } from '@iconify/vue';
import { aboutData } from '~/data/about.js';

useHead({
})

/* Locale */
const { locale } = useI18n()
// Ensure locale is never undefined
const safeLocale = computed(() => locale.value || 'en')

// Debug locale changes in development
if (process.dev) {
  watch(locale, (newLocale, oldLocale) => {
    console.log('Locale changed:', { from: oldLocale, to: newLocale })
  })
}

/* Services */
const { data: services } = await useFetch('/api/services', {
  key: 'services',
  default: () => []
})

/* About */
const { data: about, error: aboutError } = await useFetch('/api/about', {
  key: 'about',
  default: () => aboutData,
  // Gracefully handle API failures in production
  onResponseError({ response }) {
    console.warn('Failed to fetch about data from API, using fallback data')
    return aboutData
  }
})
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="aboutItem in about" :key="aboutItem.id" :about="aboutItem" />
      </ul>
    </section>

    <!-- service -->

    <section class="service">
      <br />
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
  </article>
</template>