import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';

import { ICountryResponse } from '@/interfaces/Countries';

export default function useCountries(): {
  countries: ComputedRef<ICountryResponse[]>;
  country: ComputedRef<ICountryResponse>;
  setCountry: (payload: ICountryResponse) => void;
  fetchCountries: (payload: string) => Promise<void>;
  fetchCountry: (payload: string) => Promise<void>;
  } {
  const store = useStore();

  const countries = computed((): ICountryResponse[] => store.getters['Countries/getCountries']);

  const country = computed((): ICountryResponse => store.getters['Countries/getCountry']);

  function setCountry(payload: ICountryResponse) {
    store.commit('Countries/SET_COUNTRY', payload);
  }

  async function fetchCountries(payload: string): Promise<void> {
    try {
      await store.dispatch('Countries/fetchCountries', payload);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchCountry(payload: string): Promise<void> {
    try {
      await store.dispatch('Countries/fetchCountry', payload);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    countries,
    country,
    setCountry,
    fetchCountries,
    fetchCountry,
  };
}
