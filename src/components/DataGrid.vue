<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :loading="loading"
    table-layout="auto"
    :scroll="{ x: true }"
    size="small"
  >
    <template #customFilterIcon="{ column: { key } }">
      <SearchOutlined :style="{ color: selectedKeys[key] ? '#108ee9' : undefined }" />
    </template>

    <template #customFilterDropdown="{ column: { title, key } }">
      <a-input
        ref="searchInput"
        :placeholder="`Search ${title}`"
        :value="selectedKeys[key]"
        @input="e => handleSearch(e.target.value, key)"
      />
    </template>

    <template #name="{ text }">
      <a-typography-paragraph>Common - {{ text.common }}</a-typography-paragraph>
      <a-typography-paragraph>Official - {{ text.official }}</a-typography-paragraph>
    </template>

    <template #tags="{ text }">
      <a-tag
        v-for="(option, index) in text"
        :key="index"
      >
        {{ option }}
      </a-tag>
    </template>

    <template #objectValueTags="{ text }">
      <a-tag
        v-for="(option, index) in Object.values(text)"
        :key="index"
      >
        {{ option }}
      </a-tag>
    </template>

    <template #currencies="{ text }">
      <a-tag
        v-for="({ name, symbol }, index) in Object.values(text)"
        :key="index"
      >
        <template #icon>
          {{ symbol }}
        </template>

        <a-divider type="vertical" />

        {{ name }}
      </a-tag>
    </template>

    <template #image="{ text: { svg } }">
      <a-image
        :width="40"
        :src="svg"
      />
    </template>

    <template #booleanTag="{ text }">
      {{ text ? 'Yes' : 'No' }}
    </template>

    <template #cars="{ text }">
      <a-typography-paragraph>Side - {{ text.side }}</a-typography-paragraph>
      <a-typography-paragraph>
        Signs -
        <a-tag
          v-for="(option, index) in text.signs"
          :key="index"
        >
          {{ option }}
        </a-tag>
      </a-typography-paragraph>
    </template>

    <template #demonyms="{ text }">
      <a-typography-paragraph>
        Male - {{ text.eng?.m }}
      </a-typography-paragraph>

      <a-typography-paragraph>
        Female - {{ text.eng?.f }}
      </a-typography-paragraph>
    </template>

    <template #actions="{ record }">
      <a-typography-link :href="`/countries/${record.cca2}`">
        View More
      </a-typography-link>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { SearchOutlined } from '@ant-design/icons-vue';

import { IColumn } from '@/interfaces/Column';

export default defineComponent({
  name: 'DataGrid',

  components: {
    SearchOutlined,
  },

  props: {
    columns: {
      type: Array as PropType<IColumn[]>,
      required: true,
    },

    dataSource: {
      type: Array,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    loading: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['handle-search'],

  setup(props, { emit }) {
    const selectedKeys = ref<Record<string, string>>({});

    const handleSearch = (searchValue: string, key: string) => {
      selectedKeys.value = { [`${key}`]: searchValue };
      Object.keys(selectedKeys.value).forEach((el) => {
        if (selectedKeys.value[el] === '') {
          delete selectedKeys.value[el];
        }
      });
      emit('handle-search', `/${key}/${searchValue}`);
    };

    return {
      selectedKeys,
      handleSearch,
    };
  },

});
</script>
