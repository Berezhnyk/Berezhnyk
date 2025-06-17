<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar relative overflow-hidden" :class="{ active: isOpen }">
    <div class="sidebar-info relative z-10">
      <figure class="avatar-box glass-avatar-container">
        <img src="/images/avatar.jpeg" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Ivan Berezhnyk">
          Ivan Berezhnyk
        </h1>

        <p class="title text-center lg:block flex items-center justify-center gap-1 text-sm">
          <span class="lg:after:content-[''] after:content-[',']">API and Web Development</span>
          <span>Senior Software Engineer</span>
        </p>
      </div>

      <button class="info_more-btn glass-button" @click="isOpen = !isOpen">
        <span class="text-sm">Show Contacts</span>
        <Icon name="chevron-down" :size="14" />
      </button>
    </div>

    <div class="sidebar-info_more relative z-10">
      <div class="separator glass-separator" />

      <ul class="contacts-list">
        <li class="contact-item glass-contact-item">
          <div class="icon-box glass-icon-box">
            <Icon name="logo-github" :size="18" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              {{ $t('contact.github') }}
            </p>

            <a href="https://github.com/berezhnyk" class="contact-link glass-link" target="_blank">berezhnyk</a>
          </div>
        </li>

        <li class="contact-item glass-contact-item">
          <div class="icon-box glass-icon-box">
            <Icon name="logo-linkedin" :size="18" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              {{ $t('contact.linkedin') }}
            </p>

            <a href="https://linkedin.com/in/berezhnyk/" class="contact-link glass-link" target="_blank">Ivan Berezhnyk</a>
          </div>
        </li>

        <li class="contact-item glass-contact-item">
          <div class="icon-box glass-icon-box">
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

      <div class="separator glass-separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:ivan@berezhnyk.net" class="social-link glass-social-link" target="_blank">
            <Icon name="mail-outline" :size="18" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  margin: 0 auto 30px auto;
  padding: 15px;
  min-height: fit-content;
}

@media (max-width: 1024px) {
  .sidebar {
    padding: 15px;
    margin-bottom: 30px;
  }
}

@media (min-width: 580px) {
  .sidebar {
    margin-bottom: 40px;
  }
}

@media (min-width: 768px) {
  .sidebar {
    margin-bottom: 40px;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    margin-bottom: 50px;
  }
}

@media (min-width: 1250px) {
  .sidebar {
    padding: 15px;
    margin-bottom: 0; /* Uses flexbox gap at this breakpoint */
  }
}

.sidebar-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
}

/* Removed .glass-panel as it conflicts with global .sidebar styling */

.glass-avatar-container {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.glass-avatar-container:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.glass-avatar-container img {
  border-radius: 50%;
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .glass-avatar-container img {
    width: 60px;
    height: 60px;
  }
}

.info-content {
  text-align: center;
  flex-grow: 1;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .name {
    font-size: 1.1rem;
  }
}

.title {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .title {
    font-size: 0.75rem;
  }
}

.glass-button {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  min-width: 140px;
  max-width: 180px;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .glass-button {
    padding: 8px 12px;
    min-width: 120px;
    font-size: 0.75rem;
  }
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.sidebar-info_more {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.sidebar.active .sidebar-info_more {
  opacity: 1;
  max-height: 500px;
  overflow: visible;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
}

.glass-contact-item {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
}

@media (max-width: 768px) {
  .glass-contact-item {
    padding: 10px;
    gap: 10px;
  }
}

.glass-contact-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

.glass-icon-box {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  min-height: 34px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .glass-icon-box {
    min-width: 30px;
    min-height: 30px;
    padding: 6px;
  }
}

.contact-info {
  flex-grow: 1;
  min-width: 0;
}

.contact-title {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 0.7rem;
  }
}

.glass-link {
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 0.875rem;
  word-break: break-all;
}

@media (max-width: 768px) {
  .glass-link {
    font-size: 0.75rem;
  }
}

.glass-link:hover {
  text-shadow: 0 0 8px rgba(147, 51, 234, 0.5);
  color: #9333ea;
}

.glass-social-link {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;
  min-width: 44px;
  min-height: 44px;
}

@media (max-width: 768px) {
  .glass-social-link {
    padding: 8px;
    min-width: 38px;
    min-height: 38px;
  }
}

.glass-social-link:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.glass-separator {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  height: 1px;
  border: none;
  margin: 20px 0;
}

.social-list {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .social-list {
    gap: 8px;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .glass-panel {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-avatar-container {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .glass-avatar-container:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.25);
  }
  
  .glass-button {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-button:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .glass-contact-item {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.08);
  }
  
  .glass-contact-item:hover {
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.12);
  }
  
  .glass-icon-box {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.08);
  }
  
  .glass-social-link {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.08);
  }
  
  .glass-social-link:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.12);
  }
}
</style>
