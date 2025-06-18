<script setup>
import { useCookieStore } from '../composables/cookie'

const cookie = useCookieStore()
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
  useCookieStore()
})
</script>

<template>
  <ClientOnly>
    <Transition name="bounce">
      <div v-show="isClient && !cookie.getCookie" class="left-1/2 transform -translate-x-1/2 md:w-[25%] w-[90%] glass-panel bottom-5 fixed z-[100] flex items-center justify-between overflow-hidden">
        <span class="text-[#fafafa] relative z-10">This site use cookies! 🍪</span>
        <span class="cursor-pointer glass-close-button relative z-10" @click="cookie.setCookie()">
          <Icon name="close-outline" :size="16" />
        </span>
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.glass-panel {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: bounce-in 0.5s ease;
}

.glass-close-button {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #fafafa;
  margin-left: 12px;
}

.glass-close-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
