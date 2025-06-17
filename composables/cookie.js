import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCookie } from '#app'

export const useCookieStore = defineStore('cookieStore', () => {
  const cookie = ref(useCookie('accept-cookie', { default: () => false }))

  function setCookie() {
    cookie.value = true
    return cookie.value
  }
  
  const getCookie = computed(() => {
    return cookie.value
  })

  return { cookie, setCookie, getCookie }
})
