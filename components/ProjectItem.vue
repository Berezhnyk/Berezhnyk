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

/* Some projects live on this site (their own landing page) rather than on an
   external host — those stay in-tab and route through the client router. */
const isInternal = computed(() => (props.project?.url || '').startsWith('/'))

/* Human-readable form of the link — the raw href can carry a query string
   long enough to wrap over several lines and blow out the card. */
const displayUrl = computed(() => {
  const url = props.project?.url
  if (!url) return ''
  if (isInternal.value) return url.replace(/\/$/, '')
  try {
    const { hostname, pathname } = new URL(url)
    return `${hostname.replace(/^www\./, '')}${pathname}`.replace(/\/$/, '')
  }
  catch {
    return url
  }
})
</script>

<template>
  <li class="project-item paper-card paper-card--link">
    <NuxtLink
      :to="project.url"
      :target="isInternal ? undefined : '_blank'"
      :rel="isInternal ? undefined : 'noopener noreferrer'"
      class="project-item__link"
      :aria-label="`View ${project.title}`"
    >
      <div class="paper-card__tile project-item__tile">
        <Icon :icon="project.icon" width="32" height="32" />
      </div>
      <div class="project-item__body">
        <h3 class="project-item__title">{{ project.title }}</h3>
        <p class="project-item__desc">{{ description }}</p>
        <span class="project-item__url" :title="project.url">{{ displayUrl }}</span>
      </div>
    </NuxtLink>
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
  display: block;
  max-width: 100%;
  margin-top: 0.75rem;
  font-size: var(--fs-xs);
  color: var(--accent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
