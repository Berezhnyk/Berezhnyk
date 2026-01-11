<script setup>
import axios from "axios";
import GithubReposItem from "./GithubRepo.vue";

useHead({
  title: 'Github',
})

const repos = ref([])
const colors = ref({})

async function getColors() {
  try {
    const res = await axios.get(
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
    )
    colors.value = res.data
  } catch (error) {
    console.error('Failed to fetch colors:', error)
  }
}

async function getRepos() {
  try {
    const res = await axios.get("https://api.github.com/users/berezhnyk/repos")
    repos.value = res.data
      .filter(repo => !repo.all)
      .sort((repo1, repo2) => repo2.updated_at.localeCompare(repo1.updated_at))
      .slice(0, 8)
  } catch (error) {
    console.error('Failed to fetch repos:', error)
  }
}

onMounted(async () => {
  await getColors()
  await getRepos()
})
</script>

<template>
  <article class="github active" data-page="github">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.github') }}
      </h2>
    </header>

    <section class="github-form">
        <div class="input-wrapper">
          <div
        v-for="repo in repos"
        :key="repo.id"
        class="github"
      >
        <GithubReposItem
          :repository="repo"
          :bg-color="repo.language ? colors[repo.language]?.color : '#ffffff'"
        />
      </div>
        </div>
    </section>
  </article>
</template>
