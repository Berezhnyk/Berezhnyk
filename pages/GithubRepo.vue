<template>
  <div class="h-full rounded-xl p-6 flex flex-col glass-panel relative overflow-hidden">
    <div class="flex items-center relative z-10">
      <svg viewBox="0 0 16 16" class="w-4 h-4 fill-current mr-2" aria-hidden="true">
        <path fill-rule="evenodd" :d="icon.book"></path>
      </svg>
      <a :href="repository.html_url" target="_blank" class="font-medium glass-link glass-repo-link">
        {{ repository.name }}
      </a>
    </div>
    <div class="text-xs mt-2 mb-4 relative z-10">
      {{ repository.description }}
    </div>
    <div class="mt-auto text-xs flex relative z-10">
      <div v-if="repository.language" class="flex items-center mr-4 glass-badge">
        <span
          :style="{ backgroundColor: repository.language ? bgColor : '' }"
          class="w-3 h-3 rounded-full relative"
        ></span>
        <span class="pl-2">{{ repository.language }}</span>
      </div>
      <div v-if="repository.stargazers_count" class="flex items-center mr-4 glass-badge">
        <svg class="w-4 h-4 fill-current mr-2" aria-label="stars" viewBox="0 0 16 16" role="img">
          <path fill-rule="evenodd" :d="icon.star"></path>
        </svg>
        <span>{{ repository.stargazers_count }}</span>
      </div>
      <div v-if="repository.size" class="flex items-center glass-badge">
        <svg class="w-4 h-4 fill-current mr-2" aria-label="fork" viewBox="0 0 16 16" role="img">
          <path fill-rule="evenodd" :d="icon.fork"></path>
        </svg>
        <span>{{ repository.forks }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubReposItem",
  props: {
    repository: {
      type: Object,
      default: () => {
        return {};
      }
    },
    bgColor: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    icon: {
      book:
        "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z",
      star:
        "M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z",
      fork:
        "M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
    }
  })
};
</script>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-panel:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.glass-badge {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 4px 8px;
  transition: all 0.2s ease;
}

.glass-badge:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.glass-link {
  transition: all 0.2s ease;
}

.glass-repo-link {
  color: var(--vegas-gold);
  text-decoration: none;
}

.glass-repo-link:hover,
.glass-repo-link:focus {
  color: var(--vegas-gold);
  text-shadow: 0 0 8px rgba(201, 169, 110, 0.5);
}

.glass-repo-link:focus {
  outline: 2px solid rgba(201, 169, 110, 0.3);
  outline-offset: 2px;
}

.glass-link:hover {
  text-shadow: 0 0 8px rgba(147, 51, 234, 0.5);
}

/* Dark mode adjustments */
.dark .glass-panel {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .glass-panel:hover {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.15);
}

.dark .glass-badge {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .glass-badge:hover {
  background: rgba(0, 0, 0, 0.25);
  border-color: rgba(255, 255, 255, 0.12);
}
</style>