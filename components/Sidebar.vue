<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.jpeg" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Ivan Berezhnyk">
          Ivan Berezhnyk
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">API and Web Development</span>
          <span>Senior Software Engineer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <Icon name="chevron-down" :size="16" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <Icon name="logo-github" :size="18" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              {{ $t('contact.github') }}
            </p>

            <a href="https://github.com/berezhnyk" class="contact-link" target="_blank">berezhnyk</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <Icon name="logo-linkedin" :size="18" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              {{ $t('contact.linkedin') }}
            </p>

            <a href="https://linkedin.com/in/berezhnyk/" class="contact-link" target="_blank">Ivan Berezhnyk</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <Icon name="location-outline" :size="18" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              {{ $t('contact.location') }}
            </p>

            <address>{{ $t('common.czechia') }}</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:ivan@berezhnyk.net" class="social-link" target="_blank">
            <Icon name="mail-outline" :size="18" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
