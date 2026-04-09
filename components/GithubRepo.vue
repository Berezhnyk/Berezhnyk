<script setup>
defineProps({
  repository: { type: Object, default: () => ({}) },
  bgColor:    { type: String, default: '#b7410e' },
})

const icons = {
  book: 'M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z',
  star: 'M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z',
  fork: 'M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z',
}
</script>

<template>
  <article class="repo paper-card paper-card--link">
    <div class="repo__head">
      <svg class="repo__icon" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" :d="icons.book" />
      </svg>
      <a :href="repository.html_url" target="_blank" rel="noopener noreferrer" class="repo__name">
        {{ repository.name }}
      </a>
    </div>

    <p v-if="repository.description" class="repo__desc">
      {{ repository.description }}
    </p>

    <div class="repo__meta">
      <span v-if="repository.language" class="repo__badge">
        <span class="repo__dot" :style="{ backgroundColor: bgColor }" />
        {{ repository.language }}
      </span>
      <span v-if="repository.stargazers_count" class="repo__badge">
        <svg class="repo__mini" viewBox="0 0 16 16" aria-hidden="true">
          <path fill-rule="evenodd" :d="icons.star" />
        </svg>
        {{ repository.stargazers_count }}
      </span>
      <span v-if="repository.forks" class="repo__badge">
        <svg class="repo__mini" viewBox="0 0 16 16" aria-hidden="true">
          <path fill-rule="evenodd" :d="icons.fork" />
        </svg>
        {{ repository.forks }}
      </span>
    </div>
  </article>
</template>

<style scoped>
.repo {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.repo__head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.repo__icon {
  width: 14px;
  height: 14px;
  fill: var(--ink-muted);
  flex-shrink: 0;
}

.repo__name {
  font-family: var(--font-sans);
  font-size: var(--fs-base);
  color: var(--ink);
  font-weight: 600;
  text-decoration: none;
  word-break: break-word;
  line-height: 1.3;
}
.repo__name:hover {
  color: var(--accent);
  text-decoration: none;
}

.repo__desc {
  font-size: var(--fs-sm);
  color: var(--ink-soft);
  line-height: 1.55;
  margin: 0 0 1rem;
}

.repo__meta {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.repo__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--fs-xs);
  color: var(--ink-muted);
  background: var(--paper-surface-2);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
}

.repo__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  box-shadow: 0 0 0 1px rgba(80, 55, 20, 0.15);
}

.repo__mini {
  width: 12px;
  height: 12px;
  fill: var(--ink-muted);
}
</style>
