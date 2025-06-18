<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Locale Persistence Test</h1>
    
    <div class="space-y-4">
      <p><strong>Current Locale:</strong> {{ locale }}</p>
      <p><strong>Available Locales:</strong> {{ availableLocales.join(', ') }}</p>
      
      <div class="flex gap-4">
        <button 
          v-for="loc in availableLocales" 
          :key="loc"
          @click="setLocale(loc)"
          :class="[
            'px-4 py-2 rounded border',
            locale === loc ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          ]"
        >
          {{ loc }}
        </button>
      </div>
      
      <div class="mt-8 p-4 bg-gray-100 rounded">
        <h2 class="text-lg font-semibold mb-2">Instructions:</h2>
        <ol class="list-decimal list-inside space-y-1">
          <li>Click on different locale buttons to change the language</li>
          <li>Refresh the page (F5 or Cmd+R)</li>
          <li>Check if the selected locale persists after refresh</li>
          <li>Open a new tab with the same URL</li>
          <li>Verify the locale is maintained across tabs</li>
        </ol>
      </div>
      
      <div class="mt-4">
        <button 
          @click="refreshPage"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Refresh Page to Test Persistence
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale, locales } = useI18n()

const availableLocales = computed(() => 
  locales.value.map(l => typeof l === 'string' ? l : l.code)
)

function refreshPage() {
  window.location.reload()
}

// Check cookie value
const localeCookie = useCookie('locale')
console.log('Locale cookie value:', localeCookie.value)
console.log('Current i18n locale:', locale.value)
</script>
