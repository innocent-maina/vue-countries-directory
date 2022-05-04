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
      <a-breadcrumb-item>
        <a-typography-link href="/countries">
          Countries
        </a-typography-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ $route.params.countryId }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-descriptions
      title="General Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Name">
        <a-typography-paragraph>
          Common - {{ country?.name?.common }}
        </a-typography-paragraph>

        <a-typography-paragraph>
          Official - {{ country?.name?.official }}
        </a-typography-paragraph>
      </a-descriptions-item>

      <a-descriptions-item
        label="Native Names"
        v-if="country?.name?.nativeName"
      >
        <a-typography-paragraph
          v-for="(nativeName, index) in Object.values(country?.name?.nativeName)"
          :key="index"
        >
          Official - {{ nativeName?.official }} <br>
          Common - {{ nativeName?.common }}
        </a-typography-paragraph>
      </a-descriptions-item>

      <a-descriptions-item
        label="Capital"
        v-if="country?.capital"
      >
        <a-typography-paragraph
          v-for="(capital, index) in country?.capital"
          :key="index"
        >
          {{ capital }}
        </a-typography-paragraph>
      </a-descriptions-item>

      <a-descriptions-item
        label="Languages"
        v-if="country?.languages"
      >
        <a-tag
          v-for="(language, index) in Object.values(country?.languages)"
          :key="index"
        >
          {{ language }}
        </a-tag>
      </a-descriptions-item>

      <a-descriptions-item
        label="Timezones"
        v-if="country?.timezones"
      >
        <a-tag
          v-for="(timezone, index) in country?.timezones"
          :key="index"
        >
          {{ timezone }}
        </a-tag>
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="Political Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Status">
        {{ country?.status }}
      </a-descriptions-item>

      <a-descriptions-item label="Is Independent">
        <a-tag>{{ country?.independent ? 'Yes' : 'No' }}</a-tag>
      </a-descriptions-item>

      <a-descriptions-item label="Is UN Member">
        <a-tag>{{ country?.unMember ? 'Yes' : 'No' }}</a-tag>
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="Financial Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item
        label="Currencies"
        v-if="country?.currencies"
      >
        <a-tag
          v-for="(currency, index) in Object.values(country?.currencies)"
          :key="index"
        >
          {{ currency.symbol }}
          <a-divider type="vertical" />
          {{ currency.name }}
        </a-tag>
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="Pictorial Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Flag">
        <a-image
          :width="40"
          :src="country?.flags?.svg"
        />
      </a-descriptions-item>

      <a-descriptions-item label="Coat Of Arms">
        <a-image
          :width="40"
          :src="country?.coatOfArms?.svg"
        />
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="Demographic Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Population">
        {{ country?.population }}
      </a-descriptions-item>

      <a-descriptions-item label="Demonyms">
        <a-typography-paragraph>
          Male - {{ country?.demonyms?.eng?.m }}
        </a-typography-paragraph>

        <a-typography-paragraph>
          Female - {{ country?.demonyms?.eng?.f }}
        </a-typography-paragraph>
      </a-descriptions-item>

      <a-descriptions-item label="Area">
        {{ country?.area }}
      </a-descriptions-item>

      <a-descriptions-item label="IS Landlocked">
        {{ country?.landlocked }}
      </a-descriptions-item>
    </a-descriptions>

    <a-descriptions
      title="Geographic Information"
      bordered
      layout="vertical"
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Continents">
        <a-tag
          v-for="(continent, index) in country?.continents"
          :key="index"
        >
          {{ continent }}
        </a-tag>
      </a-descriptions-item>

      <a-descriptions-item label="Region">
        {{ country?.region }}
      </a-descriptions-item>

      <a-descriptions-item label="Sub Region">
        {{ country?.subregion }}
      </a-descriptions-item>

      <a-descriptions-item label="Area">
        {{ country?.area }}
      </a-descriptions-item>
    </a-descriptions>
  </a-space>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';

import useCountries from '@/composables/useCountries';

export default defineComponent({
  name: 'CountryView',

  setup() {
    const route = useRoute();

    const { fetchCountry, country } = useCountries();

    const loading = ref<boolean>(false);

    onMounted(async () => {
      loading.value = true;
      try {
        await fetchCountry(route.params.countryId.toString());
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      country,
    };
  },

});
</script>
