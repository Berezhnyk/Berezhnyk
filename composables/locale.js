export const useLocale = () => {
  const { locale, setLocale: setI18nLocale } = useI18n()
  
  // Get the locale from cookie
  const locale_cookie = useCookie('locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
  
  // Available locales
  const availableLocales = ['en', 'uk_UA', 'cz_CZ']
  
  // Initialize locale from cookie on client-side
  if (process.client && locale_cookie.value && 
      availableLocales.includes(locale_cookie.value) && 
      locale_cookie.value !== locale.value) {
    nextTick(() => {
      setI18nLocale(locale_cookie.value)
    })
  }
  
  const setLocale = (newLocale) => {
    if (availableLocales.includes(newLocale)) {
      locale_cookie.value = newLocale
      setI18nLocale(newLocale)
    }
  }
  
  return {
    locale,
    setLocale,
    availableLocales
  }
}
