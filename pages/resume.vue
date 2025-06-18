<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            GlobalDev
          </h4>
          <span>2022 — now</span>
          <p class="timeline-item-desc">
            Remote
          </p>
          <p class="timeline-text">
            Senior Software Engineer
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Valid-X
          </h4>
          <span>2020 — 2022</span>
          <p class="timeline-item-desc">
            Remote
          </p>
          <p class="timeline-text">
            Senior Software Engineer
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            SoftServe
          </h4>
          <span>2018 — 2020</span>
          <p class="timeline-item-desc">
            Lviv
          </p>
          <p class="timeline-text">
            Senior Software Engineer
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Magnis
          </h4>
          <span>2015 — 2018</span>
          <p class="timeline-item-desc">
            Ternopil
          </p>
          <p class="timeline-text">
            Software Engineer
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>
