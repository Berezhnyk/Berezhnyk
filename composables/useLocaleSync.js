// Composable to handle locale synchronization and prevent hydration mismatches
export const useLocaleSync = () => {
  const { locale } = useI18n()
  const isHydrated = ref(false)
  
  // Track hydration state with nextTick for better timing
  onMounted(() => {
    nextTick(() => {
      isHydrated.value = true
    })
  })
  
  // Safe locale getter that prevents hydration mismatches
  const safeLocale = computed(() => {
    if (!isHydrated.value) {
      // During SSR and initial render, always use 'en'
      return 'en'
    }
    return locale.value || 'en'
  })
  
  // Get localized content with fallback
  const getLocalizedContent = (content, fallbackLocale = 'en') => {
    return computed(() => {
      if (!content) return ''
      
      const currentLocale = safeLocale.value
      return content[currentLocale] || content[fallbackLocale] || ''
    })
  }
  
  return {
    safeLocale,
    isHydrated: readonly(isHydrated),
    getLocalizedContent
  }
}
