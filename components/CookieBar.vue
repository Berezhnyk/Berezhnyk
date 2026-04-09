<script setup>
import { useCookieStore } from '../composables/cookie'

const cookie = useCookieStore()
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
  useCookieStore()
})
</script>

<template>
  <ClientOnly>
    <Transition name="cookie-fade">
      <div v-show="isClient && !cookie.getCookie" class="cookie-bar">
        <span class="cookie-bar__text">This site uses cookies.</span>
        <button
          class="cookie-bar__close"
          aria-label="Dismiss cookie notice"
          @click="cookie.setCookie()"
        >
          <Icon name="close-outline" :size="14" />
        </button>
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.cookie-bar {
  position: fixed;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
  z-index: 100;
  max-width: min(90vw, 360px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--paper-surface);
  color: var(--ink-soft);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  box-shadow: var(--shadow-2);
  font-size: var(--fs-xs);
}

.cookie-bar__text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cookie-bar__close {
  background: var(--paper-surface-2);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-muted);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  flex-shrink: 0;
}
.cookie-bar__close:hover {
  color: var(--accent);
  border-color: var(--accent-soft);
  background: var(--paper-surface);
}

.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
