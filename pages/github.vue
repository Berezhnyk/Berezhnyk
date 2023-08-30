<script setup>
useHead({
  title: 'Github',
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
          :bg-color="repo.language ? colors[repo.language].color : '#ffffff'"
        />
      </div>
        </div>
    </section>
  </article>
</template>

<script>
import axios from "axios";
import GithubReposItem from "./GithubRepo.vue";

export default {
  name: "GithubRepos",
  data() {
    return {
      repos: [],
      colors: {}
    };
  },
  methods: {
    getColors() {
      axios
        .get(
          "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
        )
        .then(res => (this.colors = res.data));
    },
    getRepos() {
      axios.get("https://api.github.com/users/berezhnyk/repos").then(res => {
        this.repos = res.data
          .filter(repo => !repo.all)
          .sort((repo1, repo2) => repo2.updated_at.localeCompare(repo1.updated_at))
          .slice(0, 8);
      });
    }
  },
  async mounted() {
    await this.getColors();
    this.getRepos();
  },
  components: {
    GithubReposItem
  }
};
</script>