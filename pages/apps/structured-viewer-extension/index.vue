<script setup>
useHead({
  title: 'Structured Viewer Extension',
})
</script>

<template>
  <article class="viewer paper-prose">
    <div class="section-heading">
      <h2>Structured Viewer Extension</h2>
    </div>

    <p>
      A small browser extension for pretty-printing and navigating structured
      data (JSON, YAML, HAR, logs) directly in the tab. Designed to stay out of
      the way and keep keyboard-driven exploration fast.
    </p>

    <p>
      More details and a download link will land here soon. In the meantime,
      head over to <NuxtLink to="/apps">all apps</NuxtLink> or poke around
      my <NuxtLink to="/github">GitHub</NuxtLink>.
    </p>
  </article>
</template>

<style scoped>
.viewer {
  max-width: 60ch;
}
</style>
