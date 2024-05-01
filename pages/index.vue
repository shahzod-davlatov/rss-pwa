<script setup lang="ts">
import { z } from 'zod';

import type { FormSubmitEvent } from '#ui/types';

const { t } = useI18n();

const content = useContentStore();

const schema = z.object({
  url: z.string({ message: t('test.required') }).url(t('test.error')),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  url: undefined,
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const data = await $fetch<string>('/api/feeds', {
    method: 'POST',
    body: event.data,
  });

  content.value = data;
};
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup :label="t('test.input')" name="url">
      <UInput v-model="state.url" />
    </UFormGroup>
    <UButton type="submit">
      {{ t('test.submit') }}
    </UButton>
  </UForm>
</template>
