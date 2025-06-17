<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  service: Object,
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="service-item glass-panel relative overflow-hidden">
    <div class="service-icon-box relative z-10 glass-icon-container">
      <img v-if="service.image !== null && service.icon !== ''" :src="service.image" alt="mobile app icon" class="w-40">
      <Icon v-else :icon="service.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
    </div>

    <div class="service-content-box relative z-10">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>

      <p class="service-item-text">
        {{ service.description?.[locale] || service.description?.en }}
      </p>
    </div>
  </li>
</template>

<style scoped>
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

.glass-icon-container:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .glass-panel {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-panel:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .glass-icon-container {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.08);
  }
  
  .glass-icon-container:hover {
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.12);
  }
}
</style>
