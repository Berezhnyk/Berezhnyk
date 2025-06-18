<script setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const themeColor = computed(() => {
  return color.value
})
</script>

<template>
  <ClientOnly>
    <button @click="toggleDark" class="glass-toggle-button relative overflow-hidden">
      <!-- Subtle background effect -->
      <div class="absolute inset-0 glass-toggle-bg opacity-40"></div>
      
      <Icon :name="themeColor === 'dark' ? 'sun' : 'moon'" :size="20" class="relative z-10" />
    </button>
    <template #fallback>
      <!-- Fallback content while hydrating -->
      <button class="glass-toggle-button relative overflow-hidden" disabled>
        <div class="absolute inset-0 glass-toggle-bg opacity-40"></div>
        <Icon name="moon" :size="20" class="relative z-10" />
      </button>
    </template>
  </ClientOnly>
</template>

<style scoped>
.glass-toggle-button {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
}

.glass-toggle-button:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px) scale(1.05);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-toggle-button:active {
  transform: translateY(0) scale(0.98);
}

.glass-toggle-bg {
  background: linear-gradient(
    45deg,
    rgba(255, 206, 84, 0.3) 0%,
    rgba(147, 51, 234, 0.3) 50%,
    rgba(59, 130, 246, 0.3) 100%
  );
  background-size: 200% 200%;
  animation: gradient-shift 4s ease-in-out infinite;
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
.dark .glass-toggle-button {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .glass-toggle-button:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.15);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .glass-toggle-button {
    padding: 8px;
  }
}
</style>
