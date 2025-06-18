<template>
  <div class="translation-test-page">
    <h1>{{ $t('pageTitles.about') }}</h1>
    <h2>{{ $t('sections.services') }}</h2>
    <p>{{ $t('common.showContacts') }}</p>
    <p>{{ $t('common.hideContacts') }}</p>
    <p>{{ $t('contact.github') }}</p>
    <p>{{ $t('contact.linkedin') }}</p>
    <p>{{ $t('contact.location') }}</p>
    <p>{{ $t('common.czechia') }}</p>
    <p>Current locale: {{ locale }}</p>
    
    <div class="translation-keys">
      <h3>Testing Additional Keys:</h3>
      <p>{{ $t('common.loading') }}</p>
      <p>{{ $t('common.email') }}</p>
      <p>{{ $t('common.readMore') }}</p>
      <p>{{ $t('common.close') }}</p>
      <p>{{ $t('hero.welcome') }}</p>
      <p>{{ $t('hero.subtitle') }}</p>
    </div>
  </div>
</template>

<script setup>
// Use only $t() in template, so we only need locale if needed
const { locale } = useI18n()

useHead({
  title: 'Translation Test',
})
</script>

<style scoped>
.translation-test-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.translation-keys {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
