import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCookie } from '#app'

export const useCookieStore = defineStore('cookieStore', () => {
  // Initialize with server-safe default value
  const cookie = ref(useCookie('accept-cookie', { 
    default: () => false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  }))

  function setCookie() {
    cookie.value = true
    return cookie.value
  }
  
  const getCookie = computed(() => {
    // Ensure consistent value between server and client
    return cookie.value === true
  })

  return { cookie, setCookie, getCookie }
})
