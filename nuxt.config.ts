// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: {
    typeCheck: 'build',
    strict: true,
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  colorMode: {
    preference: 'light',
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'RSS PWA',
      short_name: 'RSS PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
    '@nuxt/ui',
  ],
});
