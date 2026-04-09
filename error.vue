<script setup>
defineProps({
  error: Object,
})

function handleClear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <article class="notfound">
      <div class="notfound__code">{{ error?.statusCode || 404 }}</div>
      <h2 class="notfound__title">
        <template v-if="error?.statusCode === 404">This page drifted off the page.</template>
        <template v-else>Something came unstuck.</template>
      </h2>
      <p class="notfound__body">
        <template v-if="error?.statusCode === 404">
          The page you were looking for isn't here. It may have moved, or it
          may never have existed on this side of the paper.
        </template>
        <template v-else>
          An unexpected error occurred. Try heading back home.
        </template>
      </p>
      <div class="notfound__actions">
        <button class="notfound__link" @click="handleClear">← Back home</button>
      </div>
    </article>
  </NuxtLayout>
</template>

<style scoped>
.notfound {
  text-align: center;
  padding: 2rem 0;
}

.notfound__code {
  font-family: var(--font-serif);
  font-size: clamp(5rem, 4rem + 10vw, 9rem);
  line-height: 1;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.notfound__title {
  font-family: var(--font-serif);
  font-size: var(--fs-xl);
  color: var(--ink);
  margin: 0 0 0.75rem;
}

.notfound__body {
  color: var(--ink-soft);
  max-width: 46ch;
  margin: 0 auto 1.5rem;
}

.notfound__actions {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
}

.notfound__link {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: var(--accent);
  cursor: pointer;
}
.notfound__link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
