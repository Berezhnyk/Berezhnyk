<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  project: Object,
})

const { locale } = useI18n()
const safeLocale = computed(() => locale.value || 'en')

const description = computed(() => {
  const content = props.project?.description
  if (!content) return ''
  return content[safeLocale.value] || content['en'] || ''
})
</script>

<template>
  <li class="service-item glass-panel relative overflow-hidden">
    <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
      <div class="service-icon-box relative z-10 glass-icon-container">
        <Icon :icon="project.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
      </div>

      <div class="service-content-box relative z-10">
        <h4 class="h4 service-item-title">
          {{ project.title }}
        </h4>

        <p class="service-item-text">
          {{ description }}
        </p>

        <span class="project-url">{{ project.url }}</span>
      </div>
    </a>
  </li>
</template>

<style scoped>
.project-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.project-url {
  color: var(--vegas-gold);
  font-size: var(--fs-7);
  margin-top: 8px;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-panel:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-icon-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

/* Dark mode adjustments */
.dark .glass-panel {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .glass-panel:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.15);
}
</style>
