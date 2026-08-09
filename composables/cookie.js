import { defineStore, skipHydrate } from 'pinia'
import { computed } from 'vue'
import { useCookie } from '#app'

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365

export const useCookieStore = defineStore('cookieStore', () => {
  // `maxAge` is required, otherwise this is a session cookie and the notice
  // comes back as soon as the browser is closed.
  const cookie = useCookie('accept-cookie', {
    default: () => false,
    maxAge: ONE_YEAR_IN_SECONDS,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })

  function setCookie() {
    cookie.value = true
    return cookie.value
  }

  const getCookie = computed(() => {
    // Ensure consistent value between server and client
    return cookie.value === true
  })

  // Pages are prerendered, so the SSR payload carries this ref's build-time
  // value (`false`) to every visitor. Without skipHydrate, Pinia overwrites the
  // value useCookie just read from document.cookie, and useCookie's watcher
  // then persists that stale `false` back to the browser on every page load.
  return { cookie: skipHydrate(cookie), setCookie, getCookie }
})
