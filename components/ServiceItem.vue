<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  service: Object,
})
const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')
const description = computed(() => {
  const content = props.service?.description
  if (!content) return ''
  return content[safeLocale.value] || content.en || ''
})
</script>

<template>
  <li class="service-item paper-card">
    <div class="paper-card__tile service-item__tile">
      <NuxtImg
        v-if="service.image"
        :src="service.image"
        alt=""
        class="service-item__img"
        width="40"
        height="40"
        loading="lazy"
        format="webp"
      />
      <Icon v-else :icon="service.icon" width="32" height="32" />
    </div>
    <div class="service-item__body">
      <h3 class="service-item__title">{{ service.title }}</h3>
      <p class="service-item__desc">{{ description }}</p>
    </div>
  </li>
</template>

<style scoped>
.service-item { list-style: none; }

.service-item__tile {
  margin-bottom: 1rem;
}
.service-item__img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.service-item__title {
  font-family: var(--font-serif);
  font-size: var(--fs-lg);
  color: var(--ink);
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.service-item__desc {
  color: var(--ink-soft);
  font-size: var(--fs-sm);
  line-height: 1.6;
  margin: 0;
}
</style>
