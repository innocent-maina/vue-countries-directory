<template>
  <a-layout>
    <a-layout-header>
      <a-typography-link
        strong
        href="/"
        :style="{color: '#FFFFFF'}"
      >
        Countries Directory
      </a-typography-link>
    </a-layout-header>

    <a-layout-content class="page-layout-content">
      <slot name="content" />
    </a-layout-content>

    <a-layout-footer :style="{ textAlign: 'center' }">
      Countries Directory &copy; {{ year }} Created by Innocent Wahome
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const year = ref<number>(new Date().getFullYear());

    return {
      year,
    };
  },
});
</script>
