// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  pwa: {
    mode: 'development',
    strategies: 'injectManifest',
    registerType: 'autoUpdate',
    srcDir: 'service-worker',
    filename: 'sw.ts', // 'prompt-sw.js',
    manifest: {
      name: 'testing nuxt pwa',
      short_name: 'nuxt-pwa',
      description: 'A Nuxt 4 PWA example with Vite PWA module',
      theme_color: '#00bbff',
      display: 'standalone',
      lang: 'en',
      // icons: [
      //   {
      //     src: 'favicon.svg',
      //     sizes: 'any',
      //     type: 'image/svg+xml',
      //   },
      //   {
      //     src: 'icons/logo-192.png',
      //     sizes: '192x192',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'icons/logo-512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'icons/logo-maskable.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //     purpose: 'maskable',
      //   },
      // ],
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,jpg,png,svg,ico,json}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    // injectManifest: {
    //   globPatterns: ['**/*.{js,css,html,jpg,png,svg,ico,json}'],
    // },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 12 * 60 * 60,
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
