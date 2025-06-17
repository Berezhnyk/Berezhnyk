<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'

const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'
</script>

<template>
  <div class="app-wrapper">
    <!-- Global particle background -->
    <div class="global-particle-bg"></div>
    
    <NuxtLayout>
      <NuxtPage transition />
    </NuxtLayout>
  </div>
</template>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: transparent;
  overflow-x: hidden;
}

.global-particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1; /* Behind content */
  /* Beautiful small floating particles */
  background: 
    radial-gradient(circle at 10% 20%, rgba(255, 107, 107, 0.6) 2px, transparent 2px),
    radial-gradient(circle at 90% 80%, rgba(107, 197, 255, 0.6) 1.5px, transparent 1.5px),
    radial-gradient(circle at 40% 60%, rgba(255, 206, 84, 0.6) 1px, transparent 1px),
    radial-gradient(circle at 80% 10%, rgba(157, 255, 157, 0.6) 2.5px, transparent 2.5px),
    radial-gradient(circle at 20% 90%, rgba(255, 154, 255, 0.6) 1.8px, transparent 1.8px),
    radial-gradient(circle at 60% 30%, rgba(255, 107, 107, 0.5) 1.2px, transparent 1.2px),
    radial-gradient(circle at 30% 70%, rgba(107, 197, 255, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 70% 40%, rgba(255, 206, 84, 0.5) 1.5px, transparent 1.5px),
    radial-gradient(circle at 85% 60%, rgba(157, 255, 157, 0.5) 1px, transparent 1px),
    radial-gradient(circle at 15% 30%, rgba(255, 154, 255, 0.5) 2.2px, transparent 2.2px),
    radial-gradient(circle at 45% 15%, rgba(255, 107, 107, 0.4) 1.8px, transparent 1.8px),
    radial-gradient(circle at 75% 85%, rgba(107, 197, 255, 0.4) 1.3px, transparent 1.3px),
    radial-gradient(circle at 25% 45%, rgba(255, 206, 84, 0.4) 2.5px, transparent 2.5px),
    radial-gradient(circle at 95% 25%, rgba(157, 255, 157, 0.4) 1.7px, transparent 1.7px),
    radial-gradient(circle at 5% 75%, rgba(255, 154, 255, 0.4) 1.4px, transparent 1.4px),
    radial-gradient(circle at 55% 55%, rgba(255, 107, 107, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 35% 25%, rgba(107, 197, 255, 0.3) 1.5px, transparent 1.5px),
    radial-gradient(circle at 65% 75%, rgba(255, 206, 84, 0.3) 2px, transparent 2px),
    radial-gradient(circle at 15% 65%, rgba(157, 255, 157, 0.3) 1.2px, transparent 1.2px),
    radial-gradient(circle at 85% 35%, rgba(255, 154, 255, 0.3) 1.8px, transparent 1.8px);
  background-size: 
    180px 180px,
    230px 230px,
    130px 130px,
    280px 280px,
    200px 200px,
    160px 160px,
    260px 260px,
    140px 140px,
    220px 220px,
    300px 300px,
    120px 120px,
    240px 240px,
    170px 170px,
    330px 330px,
    150px 150px,
    110px 110px,
    190px 190px,
    210px 210px,
    160px 160px,
    180px 180px;
  background-position: 
    0% 0%,
    100% 0%,
    0% 100%,
    100% 100%,
    50% 50%,
    25% 75%,
    75% 25%,
    10% 40%,
    90% 60%,
    40% 10%,
    60% 90%,
    20% 80%,
    80% 20%,
    35% 65%,
    65% 35%,
    15% 15%,
    85% 85%,
    45% 55%,
    55% 45%,
    25% 25%;
  animation: global-float-particles 40s ease-in-out infinite;
}

@keyframes global-float-particles {
  0%, 100% {
    background-position: 
      0% 0%,
      100% 0%,
      0% 100%,
      100% 100%,
      50% 50%,
      25% 75%,
      75% 25%,
      10% 40%,
      90% 60%,
      40% 10%,
      60% 90%,
      20% 80%,
      80% 20%,
      35% 65%,
      65% 35%,
      15% 15%,
      85% 85%,
      45% 55%,
      55% 45%,
      25% 25%;
  }
  20% {
    background-position: 
      10% 10%,
      90% 10%,
      10% 90%,
      90% 90%,
      60% 40%,
      35% 65%,
      65% 35%,
      20% 50%,
      80% 50%,
      50% 20%,
      50% 80%,
      30% 70%,
      70% 30%,
      45% 55%,
      55% 45%,
      25% 25%,
      75% 75%,
      35% 65%,
      65% 35%,
      15% 35%;
  }
  40% {
    background-position: 
      20% 5%,
      80% 20%,
      5% 80%,
      95% 85%,
      45% 65%,
      15% 85%,
      85% 15%,
      5% 25%,
      95% 75%,
      25% 5%,
      75% 95%,
      10% 90%,
      90% 10%,
      25% 75%,
      75% 25%,
      5% 45%,
      95% 55%,
      55% 45%,
      45% 55%,
      35% 15%;
  }
  60% {
    background-position: 
      15% 25%,
      85% 15%,
      25% 85%,
      75% 75%,
      55% 35%,
      45% 55%,
      55% 45%,
      35% 15%,
      65% 85%,
      15% 35%,
      85% 65%,
      5% 95%,
      95% 5%,
      55% 45%,
      45% 55%,
      25% 65%,
      75% 35%,
      35% 25%,
      65% 75%,
      45% 5%;
  }
  80% {
    background-position: 
      5% 15%,
      95% 5%,
      15% 95%,
      85% 80%,
      40% 60%,
      20% 80%,
      80% 20%,
      15% 35%,
      85% 65%,
      35% 15%,
      65% 85%,
      25% 75%,
      75% 25%,
      15% 85%,
      85% 15%,
      35% 55%,
      65% 45%,
      25% 35%,
      75% 65%,
      55% 25%;
  }
}
</style>
