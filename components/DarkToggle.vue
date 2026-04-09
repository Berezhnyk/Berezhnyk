<script setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const themeColor = computed(() => color.value)
</script>

<template>
  <ClientOnly>
    <button
      @click="toggleDark"
      class="paper-icon-btn"
      :aria-label="themeColor === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <Icon :name="themeColor === 'dark' ? 'sun' : 'moon'" :size="18" />
    </button>
    <template #fallback>
      <button class="paper-icon-btn" disabled aria-label="Theme toggle">
        <Icon name="moon" :size="18" />
      </button>
    </template>
  </ClientOnly>
</template>

<style scoped>
.paper-icon-btn {
  background: var(--paper-surface-2);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-soft);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.paper-icon-btn:hover {
  background: var(--paper-surface);
  border-color: var(--paper-deckle);
  color: var(--accent);
  transform: translateY(-1px);
}
.paper-icon-btn:active {
  transform: translateY(0);
}
</style>
