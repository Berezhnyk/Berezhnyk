<script setup>
import { aboutData } from '~/data/about.js'
import { servicesData } from '~/data/services.js'
import { projectsData } from '~/data/projects.js'

useHead({ title: 'About' })

const about = aboutData
const services = servicesData
const projects = projectsData
</script>

<template>
  <div class="home">
    <section class="home__about">
      <div class="section-heading">
        <h2>{{ $t('pageTitles.about') }}</h2>
      </div>
      <ul class="home__about-list">
        <AboutItem v-for="aboutItem in about" :key="aboutItem.id" :about="aboutItem" />
      </ul>
    </section>

    <section class="home__skills">
      <div class="section-heading">
        <h2>{{ $t('sections.skills') }}</h2>
      </div>
      <ul class="home__grid">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <section class="home__projects">
      <div class="section-heading">
        <h2>{{ $t('sections.projects') }}</h2>
      </div>
      <ul class="home__grid">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home__about-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.home__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .home__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}
</style>
