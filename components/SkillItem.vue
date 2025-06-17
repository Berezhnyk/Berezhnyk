<template>
  <li class="skills-item glass-panel relative overflow-hidden">
    <div class="title-wrapper relative z-10">
      <h5 class="h5">
        {{ title }}
      </h5>
      <data :value="progress" class="glass-progress-text">{{progress}}%</data>
    </div>

    <div class="skill-progress-bg glass-progress-bar">
      <div class="skill-progress-fill glass-progress-fill" :style="{width: `${progress}%`}"/>
    </div>
  </li>
</template>

<style scoped>
.glass-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-panel:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.glass-progress-text {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  font-weight: 500;
}

.glass-progress-bar {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
  position: relative;
}

.glass-progress-fill {
  background: linear-gradient(
    90deg, 
    rgba(147, 51, 234, 0.8) 0%, 
    rgba(79, 70, 229, 0.8) 50%, 
    rgba(59, 130, 246, 0.8) 100%
  );
  height: 100%;
  border-radius: 8px;
  transition: width 0.8s ease;
  position: relative;
  overflow: hidden;
}

.glass-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .glass-panel {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .glass-panel:hover {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.15);
  }
  
  .glass-progress-text {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.08);
  }
  
  .glass-progress-bar {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.08);
  }
}
</style>

<script setup>
const props = defineProps({
  title: String,
  progress: Number,
})
</script>
