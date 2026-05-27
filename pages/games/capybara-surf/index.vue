<script setup>
import { Icon } from '@iconify/vue'

const appStoreUrl = 'https://apps.apple.com/us/app/capybara-surf/id6772348238'
const supportEmail = 'ivanberezhnyk@gmail.com'

useHead({
  title: 'Capybara Surf',
  link: [
    { rel: 'canonical', href: 'https://berezhnyk.com/games/capybara-surf/' },
  ],
})

useSeoMeta({
  title: 'Capybara Surf — Endless surf runner for iOS',
  description:
    'Capybara Surf is a cozy endless surf runner. Carve glassy waves, dodge driftwood, collect coins, and unlock cosmetics. Available on the App Store.',
  ogTitle: 'Capybara Surf — Endless surf runner for iOS',
  ogDescription:
    'Carve glassy waves, dodge driftwood, collect coins, and unlock cosmetics. A cozy endless surf runner from Ivan Berezhnyk.',
  ogUrl: 'https://berezhnyk.com/games/capybara-surf/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

const features = [
  {
    icon: 'mdi:waves',
    title: 'One-thumb surfing',
    body: 'Tilt or tap to carve across endless procedurally generated waves. Easy to pick up, hard to put down.',
  },
  {
    icon: 'mdi:tshirt-crew',
    title: 'Cosmetic capybaras',
    body: 'Earn coins through play and unlock hats, boards, and outfits. No power creep — just personality.',
  },
  {
    icon: 'mdi:cloud-off-outline',
    title: 'Plays offline',
    body: 'No account required. Progress saves locally on your device and syncs across yours via iCloud.',
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Respects your privacy',
    body: 'No tracking profiles built by us. Optional rewarded ads only, and a one-time purchase removes interstitials.',
  },
]
</script>

<template>
  <article class="capy">
    <header class="capy__hero">
      <p class="capy__eyebrow">A game by Ivan Berezhnyk</p>
      <h1 class="capy__title">Capybara Surf</h1>
      <p class="capy__tagline">
        A cozy endless surf runner. Carve glassy waves, dodge driftwood, and
        collect coins with the calmest rodent on the ocean.
      </p>

      <div class="capy__cta">
        <a
          :href="appStoreUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="capy__app-store"
          aria-label="Download Capybara Surf on the App Store"
        >
          <span class="capy__app-store-eyebrow">Download on the</span>
          <span class="capy__app-store-name">App Store</span>
        </a>
        <a href="#features" class="capy__secondary">See what's inside</a>
      </div>
    </header>

    <section id="features" class="capy__features">
      <div class="section-heading">
        <h2>What's inside</h2>
      </div>
      <ul class="capy__feature-grid">
        <li v-for="f in features" :key="f.title" class="paper-card capy__feature">
          <div class="paper-card__tile capy__feature-tile">
            <Icon :icon="f.icon" width="28" height="28" />
          </div>
          <h3 class="capy__feature-title">{{ f.title }}</h3>
          <p class="capy__feature-body">{{ f.body }}</p>
        </li>
      </ul>
    </section>

    <section class="capy__about paper-prose">
      <div class="section-heading">
        <h2>The pitch</h2>
      </div>
      <p>
        Capybara Surf started as a side project about turning down the volume.
        Most endless runners shout at you — Capybara Surf asks you to lean.
        Long horizons, slow water, a soundtrack built on warm synth pads, and a
        capybara whose only job is to look unbothered while you chase a personal
        best.
      </p>
      <p>
        Coins fund cosmetics, not advantages. There's no stamina meter, no
        notification campaign, no leaderboard guilt. Pick it up for two minutes
        on the train, or settle in for a long run with headphones.
      </p>
    </section>

    <section class="capy__more">
      <div class="section-heading">
        <h2>More</h2>
      </div>
      <ul class="capy__links">
        <li>
          <NuxtLink to="/games/capybara-surf/support">Support &amp; FAQ</NuxtLink>
        </li>
        <li>
          <a href="/games/capybara-surf/privacy-policy/">Privacy policy</a>
        </li>
        <li>
          <a :href="`mailto:${supportEmail}?subject=Capybara%20Surf`">
            Press &amp; press kit requests — {{ supportEmail }}
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.capy {
  max-width: 64ch;
}

.capy__hero {
  text-align: center;
  padding: 1rem 0 0.5rem;
}

.capy__eyebrow {
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0.75rem;
}

.capy__title {
  font-family: var(--font-serif);
  font-size: var(--fs-3xl);
  line-height: 1.05;
  color: var(--ink);
  margin: 0 0 0.75rem;
}

.capy__tagline {
  font-size: var(--fs-lg);
  color: var(--ink-soft);
  max-width: 48ch;
  margin: 0 auto;
  line-height: 1.5;
}

.capy__cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.capy__app-store {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--ink);
  color: var(--paper-bg);
  padding: 0.55rem 1.25rem;
  border-radius: var(--radius);
  line-height: 1.1;
  box-shadow: var(--shadow-2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.capy__app-store:hover {
  text-decoration: none;
  transform: translateY(-1px);
}
.dark .capy__app-store {
  background: var(--ink);
  color: var(--paper-bg);
}

.capy__app-store-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  opacity: 0.8;
}
.capy__app-store-name {
  font-size: 1.15rem;
  font-weight: 600;
  font-family: var(--font-sans);
}

.capy__secondary {
  font-size: var(--fs-sm);
  color: var(--ink-muted);
}

.capy__feature-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .capy__feature-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

.capy__feature-tile {
  margin-bottom: 1rem;
}

.capy__feature-title {
  font-family: var(--font-serif);
  font-size: var(--fs-lg);
  color: var(--ink);
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.capy__feature-body {
  color: var(--ink-soft);
  font-size: var(--fs-sm);
  line-height: 1.6;
  margin: 0;
}

.capy__links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.capy__links li + li { margin-top: 0.5rem; }
.capy__links a { font-size: var(--fs-sm); }
</style>
