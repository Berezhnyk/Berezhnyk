<script setup>
const props = defineProps({
  about: Object,
})
const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')
const description = computed(() => {
  const content = props.about?.description
  if (!content) return ''
  return content[safeLocale.value] || content.en || ''
})
</script>

<template>
  <li class="about-item paper-card">
    <p class="about-item__text">{{ description }}</p>
  </li>
</template>

<style scoped>
.about-item {
  list-style: none;
}
.about-item__text {
  color: var(--ink-soft);
  font-size: var(--fs-base);
  line-height: 1.7;
  margin: 0;
}
</style>
