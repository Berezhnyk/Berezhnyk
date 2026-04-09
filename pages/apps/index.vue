<script setup>
import { projectsData } from '~/data/projects.js'

useHead({ title: 'Apps' })

const projects = projectsData
</script>

<template>
  <div class="apps">
    <div class="section-heading">
      <h2>{{ $t('pageTitles.apps') }}</h2>
    </div>
    <p class="apps__intro">{{ $t('sections.apps_description') }}</p>

    <ul class="apps__grid">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </ul>
  </div>
</template>

<style scoped>
.apps__intro {
  color: var(--ink-muted);
  font-size: var(--fs-sm);
  margin: 0 0 1.75rem;
  max-width: 52ch;
}

.apps__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .apps__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}
</style>
