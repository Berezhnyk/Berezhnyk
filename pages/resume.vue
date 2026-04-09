<script setup>
const experiences = [
  {
    company: 'GlobalDev',
    period: '2022 — now',
    location: 'Remote',
    role: 'Senior Software Engineer',
    description: {
      en: 'Leading backend development and system architecture.',
      uk_UA: 'Керую backend-розробкою та архітектурою систем.',
      cz_CZ: 'Vedu vývoj backendu a systémovou architekturu.',
    },
  },
  {
    company: 'Valid-X',
    period: '2020 — 2022',
    location: 'Remote',
    role: 'Senior Software Engineer',
    description: {
      en: 'Developed scalable cloud solutions.',
      uk_UA: 'Розробляв масштабовані хмарні рішення.',
      cz_CZ: 'Vyvíjel škálovatelná cloudová řešení.',
    },
  },
  {
    company: 'SoftServe',
    period: '2018 — 2020',
    location: 'Lviv',
    role: 'Senior Software Engineer',
    description: {
      en: 'Worked on enterprise-grade software.',
      uk_UA: 'Працював над корпоративним програмним забезпеченням.',
      cz_CZ: 'Pracoval jsem na podnikovém softwaru.',
    },
  },
  {
    company: 'Magnis',
    period: '2015 — 2018',
    location: 'Ternopil',
    role: 'Software Engineer',
    description: {
      en: 'Built core features for web applications.',
      uk_UA: 'Створював ключові функції для веб-застосунків.',
      cz_CZ: 'Vytvářel klíčové funkce pro webové aplikace.',
    },
  },
]

useHead({ title: 'Resume' })
</script>

<template>
  <div class="resume">
    <div class="section-heading">
      <h2>{{ $t('pageTitles.resume') }}</h2>
    </div>
    <ul class="resume__list">
      <ResumeSection
        v-for="(exp, index) in experiences"
        :key="index"
        :experience="exp"
      />
    </ul>
  </div>
</template>

<style scoped>
.resume__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
