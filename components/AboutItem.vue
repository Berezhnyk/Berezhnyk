<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  about: Object,
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p class="about-item-text">
        {{ about.description?.[locale] || about.description?.en }}
      </p>
    </div>
  </li>
</template>
