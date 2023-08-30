<template>
  <li class="skills-item">
    <div class="title-wrapper">
      <h5 class="h5">
        {{ title }}
      </h5>
      <data :value="progress">{{progress}}%</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" :style="{width: `${this.progress}%`}"/>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  title: String,
  progress: Number,
})
</script>
