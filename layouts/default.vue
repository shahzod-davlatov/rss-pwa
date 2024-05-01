<script setup lang="ts">
const { t, locale, setLocale } = useI18n();
</script>

<template>
  <div class="flex h-dvh flex-col items-center justify-center gap-5">
    <UButton @click="setLocale(locale === 'ru' ? 'en' : 'ru')">
      {{ t('test.button') }}
    </UButton>
    <UCard>
      <template #header>
        <h1>{{ t('test.header') }}</h1>
      </template>
      <slot />
      <template #footer>
        <span>{{ t('test.footer') }}</span>
      </template>
    </UCard>
  </div>
</template>
