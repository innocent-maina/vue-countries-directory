<template>
  <PageLayout>
    <template #content>
      <a-space
        direction="vertical"
        style="width: 100%"
      >
        <a-typography-title>Countries Directory</a-typography-title>

        <a-typography-paragraph>
          Get information about countries
        </a-typography-paragraph>

        <a-button
          type="primary"
          @click="$router.push('/countries')"
        >
          Get Started
        </a-button>
      </a-space>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PageLayout from '@/layouts/PageLayout.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    PageLayout,
  },
});
</script>
