<script setup>
import { useLocaleStore } from '../composables/locale'
import { useI18n } from 'vue-i18n'

const cookieLocale = useLocaleStore()
const { locale, availableLocales } = useI18n({ useScope: 'global' })

function changeLocation(event) {
  const selectedLocale = event.target.value
  locale.value = selectedLocale
  cookieLocale.setLocale(selectedLocale)
  localStorage.setItem('locale', selectedLocale)
}
</script>

<template>
  <select 
    :value="locale" 
    @change="changeLocation"
    class="glass-select relative overflow-hidden"
  >
    <!-- Subtle background effect -->
    <div class="absolute inset-0 glass-select-bg opacity-30 pointer-events-none"></div>
    
    <option v-for="availableLocale in availableLocales" :key="availableLocale" :value="availableLocale" class="glass-option">
      <img :src="`/flags/${availableLocale}.png`" :alt="availableLocale" class="inline h-4 w-4 mr-1">
      {{ availableLocale }}
    </option>
  </select>
</template>

<style scoped>
.glass-select {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 12px;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 32px;
}

.glass-select:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-select:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(147, 51, 234, 0.4);
  box-shadow: 
    0 0 0 3px rgba(147, 51, 234, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-option {
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
  padding: 8px 12px;
}

.glass-select-bg {
  background: linear-gradient(
    135deg,
    rgba(147, 51, 234, 0.2) 0%,
    rgba(59, 130, 246, 0.2) 50%,
    rgba(16, 185, 129, 0.2) 100%
  );
  background-size: 200% 200%;
  animation: gradient-shift 6s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .glass-select {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-select:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .glass-select:focus {
    background: rgba(0, 0, 0, 0.35);
  }
  
  .glass-option {
    background: rgba(31, 41, 55, 0.95);
    color: #f9fafb;
  }
}
</style>
