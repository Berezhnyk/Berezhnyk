<script setup>
import { aboutData } from '~/data/about.js';

useHead({
  title: 'About',
})

/* Data fetching - useFetch works on both SSR and client navigation */
const { data: about } = await useFetch('/api/about', {
  default: () => aboutData
})

const { data: services } = await useFetch('/api/services', {
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