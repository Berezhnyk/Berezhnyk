<script setup>
useHead({
  title: 'Capybara Surf — Support',
})

useSeoMeta({
  title: 'Capybara Surf — Support',
  description: 'Support page for Capybara Surf. Contact the developer with questions, bug reports, or feedback.',
  robots: 'index, follow',
})

const supportEmail = 'ivanberezhnyk@gmail.com'
</script>

<template>
  <article class="support paper-prose">
    <div class="section-heading">
      <h2>Capybara Surf — Support</h2>
    </div>

    <p>
      Thanks for playing <strong>Capybara Surf</strong>. If you have a question,
      ran into a bug, or just want to share feedback, get in touch and I'll
      reply as soon as I can.
    </p>

    <h3>Contact</h3>
    <p>
      Email:
      <a :href="`mailto:${supportEmail}?subject=Capybara%20Surf%20Support`">
        {{ supportEmail }}
      </a>
    </p>
    <p>
      When reporting a bug, please include your device model, iOS version, and
      the game version (visible on the title screen). A short description of
      what you were doing when the issue happened helps a lot.
    </p>

    <h3>Frequently asked</h3>
    <dl class="support__faq">
      <dt>How do I restore purchases?</dt>
      <dd>
        Open the in-game settings and tap <em>Restore Purchases</em>. Make sure
        you're signed in with the same Apple ID used for the original purchase.
      </dd>

      <dt>My progress disappeared.</dt>
      <dd>
        Progress is tied to your Apple ID via iCloud. Confirm iCloud is enabled
        for the game in <em>Settings → Apple ID → iCloud</em>. If it still
        doesn't sync, email me with your device details.
      </dd>

      <dt>How do I request a refund?</dt>
      <dd>
        Refunds for App Store purchases are handled by Apple. Visit
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>
        and follow the steps.
      </dd>
    </dl>

    <h3>Privacy</h3>
    <p>
      Capybara Surf does not collect personal information. Gameplay data stays
      on your device or syncs through your private iCloud account.
    </p>
  </article>
</template>

<style scoped>
.support {
  max-width: 60ch;
}

.support h3 {
  margin-top: 2rem;
}

.support__faq {
  margin: 0;
}

.support__faq dt {
  font-weight: 600;
  margin-top: 1.25rem;
}

.support__faq dd {
  margin: 0.25rem 0 0;
  color: var(--ink-muted);
}
</style>
