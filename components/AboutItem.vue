<script setup>
// Use Nuxt i18n composable

const props = defineProps({
  about: Object,
})

const { locale } = useI18n()
// Ensure locale is never undefined
const safeLocale = computed(() => locale.value || 'en')
</script>

<template>
  <li class="about-item glass-panel relative overflow-hidden">
    <div class="about-content-box relative z-10">
      <p class="about-item-text">
        {{ about?.description?.[safeLocale] || about?.description?.en || '' }}
      </p>
    </div>
  </li>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
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
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* Dark mode adjustments */
.dark .glass-panel {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .glass-panel:hover {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.15);
}
</style>
