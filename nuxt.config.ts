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
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@vite-pwa/nuxt',
    '@nuxt/ui',
  ],
});
