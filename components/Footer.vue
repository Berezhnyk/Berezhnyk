<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="paper-footer">
    <span>© {{ year }} Ivan Berezhnyk</span>
    <span class="sep">·</span>
    <span>Prague</span>
  </footer>
</template>

<style scoped>
.paper-footer {
  margin-top: 5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--paper-deckle);
  text-align: center;
  font-size: var(--fs-xs);
  color: var(--ink-muted);
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
}
.paper-footer .sep { opacity: 0.6; }
</style>
