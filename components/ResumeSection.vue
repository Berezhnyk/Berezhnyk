<script setup>
const props = defineProps({
  experience: Object,
})

const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')

const description = computed(() => {
  const content = props.experience?.description
  if (!content) return ''
  return content[safeLocale.value] || content.en || ''
})
</script>

<template>
  <li class="resume-item paper-card paper-card--ribbon">
    <div class="resume-item__header">
      <h3 class="resume-item__company">{{ experience.company }}</h3>
      <span class="resume-item__period">{{ experience.period }}</span>
    </div>
    <p class="resume-item__meta">{{ experience.location }}</p>
    <p class="resume-item__body">
      <span class="resume-item__role">{{ experience.role }}</span>
      <span v-if="description"> — {{ description }}</span>
    </p>
  </li>
</template>

<style scoped>
.resume-item {
  list-style: none;
}

.resume-item__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

.resume-item__company {
  font-family: var(--font-serif);
  font-size: var(--fs-lg);
  color: var(--ink);
  margin: 0;
  line-height: 1.2;
}

.resume-item__period {
  font-size: var(--fs-xs);
  color: var(--ink-muted);
  white-space: nowrap;
  letter-spacing: 0.03em;
}

.resume-item__meta {
  font-size: var(--fs-xs);
  color: var(--ink-muted);
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.resume-item__body {
  font-size: var(--fs-sm);
  line-height: 1.65;
  color: var(--ink-soft);
  margin: 0;
}

.resume-item__role {
  font-weight: 600;
  color: var(--ink);
}

@media (max-width: 480px) {
  .resume-item__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
  }
}
</style>
