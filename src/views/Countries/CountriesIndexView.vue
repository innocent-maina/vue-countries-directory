<template>
  <PageLayout>
    <template #content>
      <router-view />
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PageLayout from '@/layouts/PageLayout.vue';

export default defineComponent({
  name: 'CountriesIndexView',

  components: {
    PageLayout,
  },
});
</script>
