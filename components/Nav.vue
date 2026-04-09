<script setup>
const links = [
  { to: '/',       labelKey: 'pageTitles.about',  exact: true  },
  { to: '/resume', labelKey: 'pageTitles.resume', exact: false },
  { to: '/apps',   labelKey: 'pageTitles.apps',   exact: false },
  { to: '/github', labelKey: 'pageTitles.github', exact: false },
]
</script>

<template>
  <nav class="paper-nav" aria-label="Primary">
    <ul class="paper-nav__list">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="paper-nav__link"
          active-class="paper-nav__link--active"
          exact-active-class="paper-nav__link--active"
        >
          {{ $t(link.labelKey) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.paper-nav {
  margin-top: 1.5rem;
}

.paper-nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.25rem 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid var(--paper-edge);
}

.paper-nav__link {
  display: inline-block;
  padding: 0.65rem 0.15rem;
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  color: var(--ink-muted);
  letter-spacing: 0.02em;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
}

.paper-nav__link:hover {
  color: var(--ink);
  text-decoration: none;
}

.paper-nav__link--active {
  color: var(--accent);
  border-bottom-color: var(--accent);
  font-weight: 500;
}

/* Home link should only be active on exact / — fix router-link-active
   matching every route under '/'. We force both active-class and
   exact-active-class to the same class on NuxtLink. */

@media (max-width: 560px) {
  .paper-nav {
    margin-top: 1.25rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .paper-nav::-webkit-scrollbar { display: none; }
  .paper-nav__list {
    flex-wrap: nowrap;
    gap: 1.25rem;
    width: max-content;
    min-width: 100%;
  }
  .paper-nav__link {
    white-space: nowrap;
    padding: 0.75rem 0.15rem;
  }
}
</style>
