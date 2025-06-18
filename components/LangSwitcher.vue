<script setup>
// Use Nuxt i18n with proper locale persistence
const { locale, setLocale } = useI18n()

// Define available locales
const availableLocales = ['en', 'uk_UA', 'cz_CZ']

async function changeLang() {
  const currentLocale = locale.value || 'en'
  const currentIndex = availableLocales.indexOf(currentLocale)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  const nextLocale = availableLocales[nextIndex]
  
  try {
    // Use Nuxt i18n's setLocale which handles cookie persistence automatically
    await setLocale(nextLocale)
  } catch (error) {
    console.warn('Error switching locale:', error)
  }
}
</script>

<template>
  <div class="glass-lang-switcher relative overflow-hidden cursor-pointer" @click="changeLang()">
    <!-- Subtle background effect -->
    <div class="absolute inset-0 glass-lang-bg opacity-30"></div>
    
    <NuxtImg 
      :src="`/flags/${locale || 'en'}.png`" 
      :alt="`${locale || 'en'} flag`"
      class="h-6 relative z-10 transition-transform duration-300 hover:scale-110"
      width="24"
      height="24"
      loading="eager"
    />
  </div>
</template>

<style scoped>
.glass-lang-switcher {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-lang-switcher:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px) scale(1.05);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-lang-switcher:active {
  transform: translateY(0) scale(0.98);
}

.glass-lang-bg {
  background: linear-gradient(
    45deg,
    rgba(239, 68, 68, 0.3) 0%,
    rgba(59, 130, 246, 0.3) 33%,
    rgba(34, 197, 94, 0.3) 66%,
    rgba(168, 85, 247, 0.3) 100%
  );
  background-size: 300% 300%;
  animation: flag-gradient 8s ease-in-out infinite;
}

@keyframes flag-gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 100%;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .glass-lang-switcher {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-lang-switcher:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.15);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .glass-lang-switcher {
    padding: 6px;
  }
  
  img {
    height: 20px;
    width: auto;
  }
}
</style>
