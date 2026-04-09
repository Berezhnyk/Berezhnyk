<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  project: Object,
})
const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')
const description = computed(() => {
  const content = props.project?.description
  if (!content) return ''
  return content[safeLocale.value] || content.en || ''
})
</script>

<template>
  <li class="project-item paper-card paper-card--link">
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="project-item__link"
      :aria-label="`View ${project.title}`"
    >
      <div class="paper-card__tile project-item__tile">
        <Icon :icon="project.icon" width="32" height="32" />
      </div>
      <div class="project-item__body">
        <h3 class="project-item__title">{{ project.title }}</h3>
        <p class="project-item__desc">{{ description }}</p>
        <span class="project-item__url">{{ project.url }}</span>
      </div>
    </a>
  </li>
</template>

<style scoped>
.project-item { list-style: none; }

.project-item__link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}
.project-item__link:hover {
  text-decoration: none;
}

.project-item__tile {
  margin-bottom: 1rem;
}

.project-item__title {
  font-family: var(--font-serif);
  font-size: var(--fs-lg);
  color: var(--ink);
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.project-item__desc {
  color: var(--ink-soft);
  font-size: var(--fs-sm);
  line-height: 1.6;
  margin: 0;
}

.project-item__url {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: var(--fs-xs);
  color: var(--accent);
  word-break: break-all;
}
</style>
