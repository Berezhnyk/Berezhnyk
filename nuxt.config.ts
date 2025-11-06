export default defineNuxtConfig({
  compatibilityDate: '2025-06-18',
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@zadigetvoltaire/nuxt-gtm',
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
      gtm: {
        id: 'GTM-MKWPHLHM',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: process.env.NODE_ENV === 'development',
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: [],
        trackOnNextTick: false,
      },
      // Enable performance monitoring
      gtag: {
        id: process.env.GTAG_ID
      }
    }
  },
  experimental: {
    payloadExtraction: false, // Better for static sites
    viewTransition: true, // Enable view transitions for smoother navigation
  },
  ssr: true,
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
    preset: 'vercel',
    prerender: {
      routes: [
        '/',
        '/resume',
        '/github', 
        '/apps',
        '/apps/structured-viewer-extension',
        '/api/services', 
        '/api/about'
      ]
    },
    // Enable compression but let Vercel handle it
    compressPublicAssets: true,
    // Add route rules to handle SPA fallback properly
    experimental: {
      wasm: false
    },
    // Vercel-optimized routing rules
    routeRules: {
      // API routes - prerender and cache
      '/api/services': { 
        headers: { 'cache-control': 's-maxage=3600' },
        prerender: true 
      },
      // About API - cache but vary by locale cookie
      '/api/about': { 
        headers: { 'cache-control': 's-maxage=3600, stale-while-revalidate=3600' },
        prerender: true 
      },
      // Static pages - prerender with ISR fallback and proper SPA mode
      '/': { prerender: true, isr: true },
      '/resume': { 
        prerender: true, 
        isr: true
      },
      '/github': { prerender: true, isr: true },
      '/apps/**': { prerender: true, isr: true },
      // Assets - long cache
      '/images/**': { headers: { 'cache-control': 'max-age=31536000' } },
      '/fonts/**': { headers: { 'cache-control': 'max-age=31536000' } },
      '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } },
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
  // Add better SSR configuration for hydration
  build: {
    transpile: ['vue-i18n']
  },
})
