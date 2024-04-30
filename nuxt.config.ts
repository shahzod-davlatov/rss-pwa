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
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'RSS PWA',
      short_name: 'RSSPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'icon.svg',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon.svg',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon.svg',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
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
