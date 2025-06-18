<script setup>

</script>

<template>
  <nav class="navbar glass-panel relative overflow-hidden">
    <ul class="navbar-list relative z-10">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link glass-nav-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link glass-nav-link">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/github" class="navbar-link glass-nav-link">
          {{ $t('pageTitles.github') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-nav-link {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 20px;
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glass-nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.glass-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.glass-nav-link:hover::before {
  left: 100%;
}

.navbar-list {
  display: flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Active and exact active states */
a.router-link-active {
  font-weight: bold;
  background: rgba(201, 169, 110, 0.2);
  border-color: rgba(201, 169, 110, 0.3);
  color: var(--vegas-gold);
}

a.router-link-exact-active {
  background: rgba(201, 169, 110, 0.3);
  border-color: rgba(201, 169, 110, 0.4);
  color: var(--vegas-gold);
  text-shadow: 0 0 8px rgba(201, 169, 110, 0.5);
}

/* Dark mode adjustments */
.dark .glass-panel {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .glass-nav-link {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .glass-nav-link:hover {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.12);
}

.dark a.router-link-active {
  background: rgba(201, 169, 110, 0.3);
  border-color: rgba(201, 169, 110, 0.4);
  color: var(--vegas-gold);
}

.dark a.router-link-exact-active {
  background: rgba(201, 169, 110, 0.4);
  border-color: rgba(201, 169, 110, 0.5);
  color: var(--vegas-gold);
}
</style>
