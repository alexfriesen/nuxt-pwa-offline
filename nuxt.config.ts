// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/nuxt-pwa-offline/',
  },
  pwa: {
    mode: 'development',
    strategies: 'injectManifest',
    registerType: 'autoUpdate',
    srcDir: 'service-worker',
    filename: 'sw.ts', // 'prompt-sw.js',
    manifest: {
      scope: '/nuxt-pwa-offline/',
      name: 'testing nuxt pwa',
      short_name: 'nuxt-pwa',
      description: 'A Nuxt 4 PWA example with Vite PWA module',
      display: 'standalone',
      lang: 'en',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,jpg,png,svg,ico,json}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    injectManifest: {
      globPatterns: [
        '**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}',
      ],
      globIgnores: ['manifest.webmanifest'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 5 * 60,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  typescript: {
    tsConfig: {
      exclude: ['../app/service-worker'],
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
});
