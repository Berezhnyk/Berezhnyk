// Composable to handle hydration mismatch prevention
export const useClientState = () => {
  const isClient = ref(false)
  
  onMounted(() => {
    isClient.value = true
  })
  
  return {
    isClient: readonly(isClient)
  }
}

// Utility function to safely get reactive values after hydration
export const useSafeReactive = (getter, fallback = null) => {
  const { isClient } = useClientState()
  
  return computed(() => {
    if (!isClient.value) {
      return fallback
    }
    return getter()
  })
}
