export default defineNuxtConfig({
  compatibilityDate: '2025-06-18',
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'uk_UA', file: 'uk_UA.json', name: 'Українська' },
      { code: 'cz_CZ', file: 'cz_CZ.json', name: 'Čeština' }
    ],
    lazy: true,
    langDir: './locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      fallbackLocale: 'en',
      alwaysRedirect: false
    },
    restructureDir: false,
    bundle: {
      optimizeTranslationDirective: false
    }
  },
  runtimeConfig: {
    public: {
      // Enable performance monitoring
      gtag: {
        id: process.env.GTAG_ID
      }
    }
  },
  experimental: {
    payloadExtraction: false, // Better for static sites
  },
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' }
  ],
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
        // Clear manualChunks when inlineDynamicImports is true
        delete config.build.rollupOptions.output.manualChunks
      }
    },
  },
  css: [
    '/assets/css/fonts.css',
    '/assets/css/style.css',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    viewer: true,
  },
  nitro: {
    prerender: {
      routes: [
        '/api/services', 
        '/api/about'
      ]
    },
    compressPublicAssets: true,
    // Cache API routes
    routeRules: {
      '/api/**': { headers: { 'cache-control': 's-maxage=3600' } },
    }
  },
  // Add performance optimizations
  vite: {
    build: {
      rollupOptions: {
        external: ['fsevents'],
        output: {
          // Only apply manual chunks for client build
          ...(process.env.NODE_ENV === 'production' && {
            manualChunks: {
              'vue-vendor': ['vue', 'vue-router'],
              'ui-vendor': ['@iconify/vue'],
              'i18n-vendor': ['vue-i18n'],
            }
          })
        }
      }
    },
    optimizeDeps: {
      exclude: ['fsevents']
    },
    define: {
      global: 'globalThis'
    }
  },
  app: {
    head: {
      link: [
        // Preload critical fonts
        { rel: 'preload', href: '/fonts/poppins-400.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/poppins-500.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        // DNS prefetch for external resources
        { rel: 'dns-prefetch', href: '//vercel-insights.com' },
        // Preload critical images
        { rel: 'preload', href: '/images/avatar.webp', as: 'image', type: 'image/webp' },
      ]
    }
  },
})
