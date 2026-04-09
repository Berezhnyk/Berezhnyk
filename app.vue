<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div class="app-wrapper">
    <!-- Single paper-fiber texture overlay -->
    <div class="paper-texture-overlay"></div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.app-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: transparent;
  overflow-x: hidden;
}

/* Paper texture — single layer, soft fiber effect */
.paper-texture-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.18;
  mix-blend-mode: soft-light;
}
.dark .paper-texture-overlay {
  opacity: 0.12;
  mix-blend-mode: overlay;
}
</style>
