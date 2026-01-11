<script setup>
import { aboutData } from '~/data/about.js';
import { servicesData } from '~/data/services.js';
import { projectsData } from '~/data/projects.js';

useHead({
  title: 'About',
})

/* Static data - no API calls needed */
const about = aboutData
const services = servicesData
const projects = projectsData
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

    <!-- services -->

    <section class="service">
      <h3 class="h3 service-title">{{ $t('sections.skills') }}</h3>
      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- pet projects -->

    <section class="service">
      <h3 class="h3 service-title">{{ $t('sections.projects') }}</h3>
      <ul class="service-list">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
      </ul>
    </section>
  </article>
</template>
