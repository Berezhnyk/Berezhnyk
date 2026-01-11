<script setup>
import { aboutData } from '~/data/about.js';

useHead({
  title: 'About',
})

/* Data - initialize with fallback data for immediate display */
const about = ref(aboutData)
const services = ref([])

/* Fetch fresh data on mount */
onMounted(async () => {
  try {
    const [aboutRes, servicesRes] = await Promise.all([
      $fetch('/api/about'),
      $fetch('/api/services')
    ])
    if (aboutRes) about.value = aboutRes
    if (servicesRes) services.value = servicesRes
  } catch (error) {
    console.warn('Failed to fetch data, using fallback:', error)
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