<script setup>
const { locale, setLocale } = useI18n()
const availableLocales = ['en', 'uk_UA', 'cz_CZ']
const currentLocale = computed(() => locale.value || 'en')

const shortCode = computed(() => ({
  en: 'EN',
  uk_UA: 'UK',
  cz_CZ: 'CZ',
}[currentLocale.value] || 'EN'))

async function changeLang() {
  const idx = availableLocales.indexOf(currentLocale.value)
  const next = availableLocales[(idx + 1) % availableLocales.length]
  try {
    await setLocale(next)
  } catch (err) {
    console.warn('Error switching locale:', err)
  }
}
</script>

<template>
  <ClientOnly>
    <button
      class="paper-lang-btn"
      @click="changeLang"
      :aria-label="`Switch language, current ${shortCode}`"
    >
      {{ shortCode }}
    </button>
    <template #fallback>
      <button class="paper-lang-btn" aria-label="Language">EN</button>
    </template>
  </ClientOnly>
</template>

<style scoped>
.paper-lang-btn {
  background: var(--paper-surface-2);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  height: 38px;
  min-width: 44px;
  padding: 0 12px;
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.paper-lang-btn:hover {
  background: var(--paper-surface);
  border-color: var(--paper-deckle);
  color: var(--accent);
  transform: translateY(-1px);
}
.paper-lang-btn:active {
  transform: translateY(0);
}
</style>
