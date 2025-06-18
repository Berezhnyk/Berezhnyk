<script setup>
import { Icon } from '@iconify/vue';

useHead({
})

/* Locale */
const { locale } = useI18n()
// Ensure locale is never undefined
const safeLocale = computed(() => locale.value || 'en')

/* Services */
const { data: services } = await useFetch('/api/services', {
  key: 'services',
  server: true,
  default: () => []
})

/* About */
const { data: about } = await useFetch('/api/about', {
  key: 'about',
  server: true,
  default: () => []
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
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
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