<script setup lang="ts">
const EXAMPLE_LINK =
  'https://ru.hexlet.io/blog/posts/vidy-baz-dannyh-kakimi-oni-byvayut-i-kak-rabotayut';

const { t, locale, setLocale } = useI18n();

const content = useContentStore();

const toast = useToast();

const { copy, copied, isSupported } = useClipboard({
  source: EXAMPLE_LINK,
});

const handleCopy = async () => {
  if (isSupported.value) {
    await copy();
    toast.add({ title: t('test.copied') });
  } else {
    toast.add({ title: t('test.notSupported') });
  }
};
</script>

<template>
  <div class="flex h-dvh flex-col items-center justify-center gap-5">
    <UButton @click="setLocale(locale === 'ru' ? 'en' : 'ru')">
      {{ t('test.button') }}
    </UButton>
    <UButton
      :icon="
        copied
          ? 'i-heroicons-clipboard-document-check'
          : 'i-heroicons-clipboard'
      "
      class="bg-orange-400 hover:bg-orange-500"
      @click="handleCopy"
    >
      {{ t('test.link') }}
    </UButton>
    <UCard>
      <slot />
    </UCard>
    <USlideover :model-value="!!content" @close="content = null">
      <UCard
        class="flex flex-1 flex-col"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">{{ t('test.header') }}</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="content = null"
            />
          </div>
        </template>
        <iframe
          :src="`/api/feed/${content}`"
          class="pointer-events-none size-full"
          tabindex="-1"
        />
      </UCard>
    </USlideover>
    <UNotifications />
  </div>
</template>
