<script setup>
useHead({ title: 'GitHub' })

const repos = ref([])
const colors = ref({})
const loading = ref(true)
const error = ref(null)

async function fetchColors() {
  try {
    colors.value = await $fetch(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    )
  } catch (err) {
    // language colors are decorative; swallow
    console.warn('Failed to fetch language colors:', err)
  }
}

async function fetchRepos() {
  try {
    const data = await $fetch('https://api.github.com/users/berezhnyk/repos')
    repos.value = data
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
      .slice(0, 8)
  } catch (err) {
    error.value = err?.statusCode === 403
      ? 'GitHub is rate-limited right now. Try again in a bit.'
      : 'Could not load repositories.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await Promise.all([fetchColors(), fetchRepos()])
})
</script>

<template>
  <div class="gh">
    <div class="section-heading">
      <h2>{{ $t('pageTitles.github') }}</h2>
    </div>

    <ul v-if="loading" class="gh__grid" aria-busy="true">
      <li v-for="n in 4" :key="n" class="paper-card gh__skeleton">
        <div class="gh__skel-line gh__skel-line--title" />
        <div class="gh__skel-line" />
        <div class="gh__skel-line gh__skel-line--short" />
      </li>
    </ul>

    <p v-else-if="error" class="paper-card gh__error">{{ error }}</p>

    <ul v-else class="gh__grid">
      <li v-for="repo in repos" :key="repo.id">
        <GithubRepo
          :repository="repo"
          :bg-color="repo.language ? (colors[repo.language]?.color || 'var(--accent)') : 'var(--accent)'"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.gh__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .gh__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

.gh__error {
  text-align: center;
  color: var(--ink-muted);
}

.gh__skeleton {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.gh__skel-line {
  height: 0.7rem;
  background: var(--paper-surface-2);
  border-radius: 4px;
  animation: gh-pulse 1.4s ease-in-out infinite;
}
.gh__skel-line--title { width: 60%; height: 1rem; }
.gh__skel-line--short { width: 40%; }

@keyframes gh-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.35; }
}
</style>
