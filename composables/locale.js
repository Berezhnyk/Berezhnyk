// This composable is no longer needed as Nuxt i18n handles locale persistence automatically
// The functionality has been moved to the built-in Nuxt i18n configuration
export const useLocale = () => {
  // Just re-export useI18n for backward compatibility
  return useI18n()
}
