<template>
  <a-space
    direction="vertical"
    style="width: 100%"
  >
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>
        <a-typography-link href="/">
          Home
        </a-typography-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Countries</a-breadcrumb-item>
    </a-breadcrumb>

    <DataGrid
      :label="'countries'"
      :loading="loading"
      :columns="columns"
      :data-source="countries"
      @handle-search="handleSearch"
    />
  </a-space>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import DataGrid from '@/components/DataGrid.vue';

import useCountries from '@/composables/useCountries';

import { IColumn } from '@/interfaces/Column';
import { ICountryResponse } from '@/interfaces/Countries';

export default defineComponent({
  name: 'CountriesListView',

  components: {
    DataGrid,
  },

  setup() {
    const { fetchCountries, countries } = useCountries();

    const loading = ref<boolean>(false);

    const columns = ref<IColumn[]>([
      {
        title: 'Flags',
        key: 'flags',
        dataIndex: 'flags',
        slots: {
          customRender: 'image',
        },
      },
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        customFilterDropdown: true,
        slots: {
          customRender: 'name',
        },
        sorter: (a: ICountryResponse, b: ICountryResponse) => a?.name?.common
          .localeCompare(b?.name?.common),
      },
      {
        title: 'Capital',
        key: 'capital',
        dataIndex: 'capital',
        customFilterDropdown: true,
        slots: {
          customRender: 'tags',
        },
      },
      {
        title: 'Population',
        key: 'population',
        dataIndex: 'population',
        sorter: (a: ICountryResponse, b: ICountryResponse) => a.population - b.population,
      },
      {
        title: 'Region',
        key: 'region',
        dataIndex: 'region',
        customFilterDropdown: true,
        sorter: (a: ICountryResponse, b: ICountryResponse) => a?.region.localeCompare(b?.region),
      },
      {
        title: 'Subregion',
        key: 'subregion',
        dataIndex: 'subregion',
        customFilterDropdown: true,
        sorter: (a: ICountryResponse, b: ICountryResponse) => a?.subregion
          .localeCompare(b?.subregion),
      },
      {
        title: 'Languages',
        key: 'lang',
        dataIndex: 'languages',
        customFilterDropdown: true,
        slots: {
          customRender: 'objectValueTags',
        },
      },
      {
        title: 'Currencies',
        key: 'currency',
        dataIndex: 'currencies',
        customFilterDropdown: true,
        slots: {
          customRender: 'currencies',
        },
      },
      {
        title: 'Demonyms',
        key: 'demonyms',
        dataIndex: 'demonyms',
        slots: {
          customRender: 'demonyms',
        },
      },
      {
        title: 'Coat Of Arms',
        key: 'coatOfArms',
        dataIndex: 'coatOfArms',
        slots: {
          customRender: 'image',
        },
      },
      {
        title: 'Is Independent',
        key: 'independent',
        dataIndex: 'independent',
        slots: {
          customRender: 'booleanTag',
        },
      },
      {
        title: 'Is UN Member',
        key: 'unMember',
        dataIndex: 'unMember',
        slots: {
          customRender: 'booleanTag',
        },
      },
      {
        title: 'Is Landlocked',
        key: 'landlocked',
        dataIndex: 'landlocked',
        slots: {
          customRender: 'booleanTag',
        },
      },
      {
        title: 'Cars',
        key: 'car',
        dataIndex: 'car',
        slots: {
          customRender: 'cars',
        },
      },
      {
        title: 'Timezones',
        key: 'timezones',
        dataIndex: 'timezones',
        slots: {
          customRender: 'tags',
        },
      },
      {
        title: 'Action',
        key: 'action',
        slots: {
          customRender: 'actions',
        },
        fixed: 'right',
      },
    ]);

    const handleSearch = async (queryString: string) => {
      loading.value = true;
      try {
        await fetchCountries(queryString);
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(async () => {
      loading.value = true;
      try {
        await fetchCountries('');
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      columns,
      countries,
      handleSearch,
    };
  },

});
</script>
