export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@nuxt/image',
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'uk_UA', 'cz_CZ'],
    },
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
    reactivityTransform: true,
    inlineSSRStyles: false, // Better for caching
    payloadExtraction: false, // Better for static sites
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }
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
    injectPosition: 0,
    viewer: true,
  },
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml', 
        '/robots.txt',
        '/api/testimonials',
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
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'ui-vendor': ['@iconify/vue'],
            'i18n-vendor': ['vue-i18n', '@intlify/nuxt3'],
          }
        }
      }
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
