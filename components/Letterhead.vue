<script setup>
</script>

<template>
  <header class="letterhead">
    <div class="letterhead__main">
      <figure class="letterhead__avatar">
        <NuxtImg
          src="/images/avatar.webp"
          alt="Ivan Berezhnyk"
          width="88"
          height="88"
          format="webp"
          loading="eager"
          fetchpriority="high"
        />
      </figure>

      <div class="letterhead__text">
        <h1 class="letterhead__name">Ivan Berezhnyk</h1>
        <p class="letterhead__title">
          Senior Software Engineer · API &amp; Web Development
        </p>
        <p class="letterhead__meta">
          <Icon name="location-outline" :size="14" />
          <span>{{ $t('common.czechia') }}</span>
        </p>
      </div>

      <div class="letterhead__toggles">
        <LangSwitcher />
        <DarkToggle />
      </div>
    </div>

    <div class="letterhead__contacts" aria-label="Contacts">
      <a href="mailto:ivan@berezhnyk.net" class="contact-chip" aria-label="Email">
        <Icon name="mail-outline" :size="14" />
        <span>ivan@berezhnyk.net</span>
      </a>
      <a href="https://github.com/berezhnyk" target="_blank" rel="noopener noreferrer" class="contact-chip" aria-label="GitHub">
        <Icon name="logo-github" :size="14" />
        <span>berezhnyk</span>
      </a>
      <a href="https://linkedin.com/in/berezhnyk/" target="_blank" rel="noopener noreferrer" class="contact-chip" aria-label="LinkedIn">
        <Icon name="logo-linkedin" :size="14" />
        <span>Ivan Berezhnyk</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.letterhead {
  padding-bottom: 1.75rem;
  border-bottom: 1px dashed var(--paper-deckle);
}

.letterhead__main {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.letterhead__avatar {
  margin: 0;
  width: 88px;
  height: 88px;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--paper-edge);
  background: var(--paper-surface);
  box-shadow: var(--shadow-1);
  flex-shrink: 0;
}
.letterhead__avatar :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.letterhead__text {
  flex: 1 1 220px;
  min-width: 0;
}

.letterhead__name {
  font-family: var(--font-serif);
  font-size: var(--fs-3xl);
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 0.1em 0 0.35em;
}

.letterhead__title {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  color: var(--ink-soft);
  margin: 0 0 0.4rem;
  line-height: 1.4;
}

.letterhead__meta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--fs-xs);
  color: var(--ink-muted);
  margin: 0;
}

.letterhead__toggles {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
}

.letterhead__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  font-size: var(--fs-xs);
  color: var(--ink-soft);
  background: var(--paper-surface);
  border: 1px solid var(--paper-edge);
  border-radius: 999px;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}
.contact-chip:hover {
  color: var(--accent);
  border-color: var(--accent-soft);
  background: var(--paper-surface-2);
  transform: translateY(-1px);
  text-decoration: none;
}

@media (max-width: 560px) {
  .letterhead__main {
    gap: 1rem;
  }
  .letterhead__avatar {
    width: 64px;
    height: 64px;
  }
  .letterhead__toggles {
    order: -1;
    margin-left: auto;
    margin-bottom: 0.25rem;
  }
  .letterhead__name {
    font-size: var(--fs-2xl);
  }
  .contact-chip span {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
